ARG deploy_base_image="nginx:1.16.1-alpine"
ARG build_base_image="node:14.13.0-alpine3.12"

# Use an intermediary image to do our builds, removing coupling from the machine executing commands and allowing us to
# trim the fat.
FROM $build_base_image AS builder

WORKDIR /opt/build

# Copy in dependency resolution files.
COPY package*.json ./

# Copy in docs folder to build from.
COPY docs ./docs

# Install NPM dependencies.
RUN npm install

# Build the site into static js/html.
RUN npm run docs:build


FROM $deploy_base_image

# Copy in the required files we built in the previous image (.vuepress).
COPY --from=builder /opt/build/docs /usr/share/nginx/html

# Copy in our configuration, which is applied on startup.
COPY ./deployment/server.conf /etc/nginx/conf.d/server.conf

# We serve on http and https.
EXPOSE 80 443

# Start nginx with a global parameter specifying that we wish to follow the process.
# This is required as a docker container is a single running process, so if nginx crashes we also want the container
# to turn off, allowing us to view that it's no longer working.
ENTRYPOINT ["nginx", "-g", "daemon off;"]

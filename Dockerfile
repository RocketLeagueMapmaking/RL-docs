ARG deploy_base_image="nginx:1.16.1-alpine"
ARG build_base_image="node:node:14.13.0-alpine3.12"

# Use an intermediary image to do our builds, removing coupling from the machine executing commands and allowing us to
# trim the fat.
FROM $build_base_image AS builder

WORKDIR /opt/build

COPY package.json yarn.lock docs/ ./

RUN npm install yarn -g
RUN yarn install
RUN yarn docs:build


FROM $deploy_base_image

# Copy in the files we built in the previous image.
COPY --from=builder /opt/build /usr/share/nginx/html

# Copy in our configuration, which is applied on startup.
COPY ./deployment/server.conf /etc/nginx/conf.d/server.conf

# Start nginx with a global parameter specifying that we wish to follow the process.
# This is required as a docker container is a single running process, so if nginx crashes we also want the container
# to turn off, allowing us to view that it's no longer working.
ENTRYPOINT ["nginx", "-g", "daemon off;"]

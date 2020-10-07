# Rocket league maps documentation
A guide by Mr Swaggles

## Deployment
**NOTE**: These steps will currently only work for the main `rocketleaguemapmaking.com` domain, as it hasn't been made 
customisable yet.

The site can be executed as a docker container on the host machine.
1. Install Docker on the host machine.
2. Clone this repository.
3. Navigate into the root of the repository.
4. Execute `docker build . -t rlmm:0.1.0`.
5. Execute `docker run -p 80:80 -p 443:443 rlmm:0.1.0`. 
    - This container will run in the foreground and you can access the website.
    - If you wish to run the container in the background, prepend `-d` to `rlmm`.
    - To view all docker containers, execute `docker ps -a`, which are ordered by age.
    - To view the NGINX logs of a container, execute `docker logs <container_name>`.
6. Access the site at the correct URL (`rocketleaguemapmaking.com`).

## Contribute
Read [this guide](./docs/menu/contribute) for how to contribute

# Rocket league mapmaking website documentation
A guide by Mr Swaggles

## Deployment
**NOTE**: These steps will currently only work for the main `rocketleaguemapmaking.com` domain, as it hasn't been made 
customisable yet. If you wish to view this locally, see the [contribution](./docs/more/contribute.md) documentation.

This site can be executed as a docker container on the host machine.
1. [Install Docker-CE](https://docs.docker.com/engine/install/) on the host machine. Docker (non-ce) should also work but is not tested.
2. Clone this repository.
3. Navigate into the root of the repository.
4. Execute `sh deployment/build_and_deploy.sh <BUILD_VERSION>`, e.g. `sh deployment/build_and_deploy.sh 0.1.0`.
    - This container will run in the background, and you can access the website.
    - To view all docker containers, execute `docker ps -a`, which are ordered by age.
    - To view the NGINX logs of a container, execute `docker logs <container_name>`.
    - To stop the service, execute `docker stop rlmm`
6. Access the site at the correct URL (`rocketleaguemapmaking.com`).

## Contributing documentation
Read the [contribution](./docs/more/contribute.md) documentation for guidelines when contributing.

## Certificate Renewal
Currently we [manually redeploy](https://certbot.eff.org/docs/using.html#renewing-certificates) certificates using certbot on the host machine. This should be automated in future.  
1. Stop the docker container to free up port 80 `docker stop rlmm`
2. Execute `sudo  certbot certonly --force-renew --cer-name rocketleaguemapmaking.com` on the host machine.
3. Select option 2 (temporary webserver, hence needing step 1)
4. Check that the new certificate looks good `sudo certbot certificates`
5. Restart the docker container `sudo docker container restart rlmm`

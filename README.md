<!-- markdownlint-disable-next-line MD041 -->
![Rocket League map making](./docs/.vitepress/public/icons/logo_rlmm_fulltext_new.png)

# Rocket League Mapmaking Website Documentation

[![GitHub package.json version](https://img.shields.io/github/package-json/v/rocketleaguemapmaking/rl-docs)][package.json]
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/RocketLeagueMapMaking/RL-docs/test.yml?branch=master&label=tests)][github-actions]
[![Website](https://img.shields.io/website?down_message=offline&up_message=online&url=https%3A%2F%2Frocketleaguemapmaking.com%2F)][domain]
[![Dev website](https://img.shields.io/website?down_message=offline&up_message=online&label=website@master&url=https%3A%2F%2Frocketleaguemapmaking.pages.dev%2F)][dev-domain]

- Guide by Mr Swaggles
- Site design by ghostrider-05
- Webdev trickery by wejrox

## Deployment

> [!NOTE]
> These steps will currently only work for the main `rocketleaguemapmaking.com` domain. If you wish to view this branch or a PR remotely, visit the [developer site][dev-domain] or the subdomain in the PR actions.

This site can be executed as a docker container on the host machine.

To update the site on the host machine, run [the `deploy` workflow](https://github.com/RocketLeagueMapmaking/RL-docs/actions/workflows/deploy.yml) on the default branch with the following inputs:

- version: the version to deploy. Generally the same as the version in [package.json](./package.json).
- push (default: `true`). Controls whether to push the built image to Docker hub. If `deploy` is enabled and `push` is disabled, the server will use an already pushed image with the same `version`, or fail.
- deploy (default: `true`). Disable this to only build (and push) the Docker Image without deploying it.
- webhook message (default: `true`): send a Discord message with the deployment details when the workflow is finished.
- run linting (default: `true`): run all linting scripts before deploying the site.

See the GitHub documentation for [how to run a workflow manually](https://docs.github.com/en/actions/using-workflows/manually-running-a-workflow#running-a-workflow).  

<details>
<summary>Manual update steps</summary>

1. [Install Docker-CE](https://docs.docker.com/engine/install/) on the host machine. Docker (non-ce) should also work but is not tested.
1. Clone this repository.
1. Build image not on host with `docker build . -t rocketleaguemapmaking/rlmm:<VERSION>`
1. Push to dockerhub with `docker login; docker push rocketleaguemapmaking/rlmm:<BUILD_VERSION>`
1. Navigate into the root of the repository on the host.
1. Execute `sh deployment/update_and_deploy.sh <BUILD_VERSION>`, e.g. `sh deployment/update_and_deploy.sh 0.1.0` on host
    - This container will run in the background, and you can access the website.
    - To view all docker containers, execute `docker ps -a`, which are ordered by age.
    - To view the NGINX logs of a container, execute `docker logs <container_name>`.
    - To stop the service, execute `docker stop rlmm`
1. Execute `sh deployment/move_dummyassets.sh` to copy in the Not So Dummy Assets.
1. Access the site at the correct URL (`rocketleaguemapmaking.com`).

</details>

## Contributing documentation

Read the [contribution][contributing] documentation for guidelines when contributing.

## Certificate Renewal

The certificate is renewed by the `deployment/renewcert.sh` script run using a cron job.

[contributing]: ./CONTRIBUTING.md
[package.json]: https://github.com/RocketLeagueMapmaking/RL-docs/blob/master/package.json
[github-actions]: https://github.com/RocketLeagueMapmaking/RL-docs/actions
[domain]: https://rocketleaguemapmaking.com
[dev-domain]: https://rocketleaguemapmaking.pages.dev

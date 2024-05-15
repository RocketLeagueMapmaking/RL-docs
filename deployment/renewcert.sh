#!/bin/sh

docker stop rlmm
sudo certbot certonly --force-renew --cert-name rocketleaguemapmaking.com --non-interactive --standalone
docker start rlmm

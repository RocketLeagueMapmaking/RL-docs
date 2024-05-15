#!/bin/sh

cd /var/lib/docker/overlay2

HASH=$(ls -lat | sed '4!d' | rev | cut -d' ' -f 1 | rev)
HASH=$(docker inspect rlmm | grep MergedDir | rev | cut -d' ' -f 1 | rev | cut -d'"' -f2 | cut -d'"' -f1)

cd "${HASH}"
cd usr/share/nginx/html/resources/
pwd

mv /home/rocketleaguemapmaking/RL_NotSoDummyAssets-main.zip ./RL_NotSoDummyAssets-main.zip

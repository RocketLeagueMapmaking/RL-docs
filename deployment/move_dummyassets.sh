#!/bin/sh

HASH=$(ls -lat | sed '4!d' | rev | cut -d' ' -f 1 | rev)
HASH=$(docker inspect rlmm | grep MergedDir | rev | cut -d' ' -f 1 | rev | cut -d'"' -f2 | cut -d'"' -f1)

chmod 644 /home/rocketleaguemapmaking/RL_NotSoDummyAssets-main.zip
cp /home/rocketleaguemapmaking/RL_NotSoDummyAssets-main.zip ${HASH}/usr/share/nginx/html/resources/

#!/bin/sh
# Executes deployment of the repository as a docker container.
# Requires execution from the root of the repository.
# Pipes stdout to /dev/null since most of the time we don't want gunk in the output.

if [ $# -ne 1 ]; then
  echo "Script requires the version to build and deploy in the format: 0.1.0" >&2
  exit 1
fi

version="$1"

# Verify ability to execute docker commands.
if ! docker images >/dev/null; then
  echo "Docker is not installed, or you don't have privileges to use it." >&2
  exit 1
fi

# We can only continue if the build passes.
if ! docker build . -t rlmm:${version}; then
  echo "Failed to build the RLMM image, aborting..." >&2
  exit 1
fi

# Make sure the container doesn't exist then redeploy.
docker container stop rlmm >/dev/null
docker container rm rlmm >/dev/null
docker run --name rlmm -p 80:80 -p 443:443 -d rlmm:${version}

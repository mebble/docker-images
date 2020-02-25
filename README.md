# docker-images

Docker images for various hobby projects, tutorials, etc of mine.

Each directory is meant to map to one Docker image's build context (and hence, one docker image).

Some of these images are published to [@mebble at Docker Hub](https://hub.docker.com/u/mebble).

For an image to be published, it needs to `$ git push origin <tag>` where `<tag>` matches some regex pattern configured at that image's build automation at Docker Hub. The tagging convention followed is:

- `<dir-name>-v<version-number>` as the git tag
- `mebble/<dir-name>:v<version-number>` as the docker image name

For example, to deploy version `1.0.0` of `node-server-simple`, we would git tag it `node-server-simple-v1.0.0` and push it. If configured correctly at Docker Hub, the image published would be `mebble/node-server-simple:v1.0.0`

# docker-images

Docker images for various hobby projects, tutorials, etc of mine.

Each directory is meant to map to one Docker image's build context (and hence, one docker image).

Some of these images are published to [@mebble at Docker Hub](https://hub.docker.com/u/mebble).

For an image to be published, it needs to `$ git push <tag>` where `<tag>` matches some regex pattern configured at that image's build automation at Docker Hub.

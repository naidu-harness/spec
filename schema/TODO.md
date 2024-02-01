



# Stages

- runtime - IMPORTANT (how and if we handle `type` discriminators will `volumes`)



# samples
- stages.platform - no example
- step.queue - no example
- step.container - more docs, especially for kubernetes

# TODO
- pipeline.clone - needed or not?
- pipeline.timeout - needed or not?
- step.test.splitting - fall under "with" instead of being a direct child of test?
- stage.clone - ci
- stage.infra.stack - infra
- stage.infra.workflow - infra
- stage.environment - cd
- stage.services - cd
- step.approval - cd
- stage.volumes - should we move away from `uses` and `with` syntax here?
- where to define default registry credentials? in `defaults`?


```yaml
runs-on: [ self-hosted ]
runs-on: [ kubernetes ]
runs-on: [ cloud ]
runs-on: [ linux, amd64 ]

ubuntu-latest-amd64-large
ubuntu-trusty-amd64-large
windows-latest-amd64-large
macos-latest-arm64
macos-latest-arm64-large
[os]-[version]-[arch]-[size]

executor:
  type: exec | cloud | instance | kubernetes

executor:
  type: cloud
  size: xlarge
  image: ubuntu-trusty

executor:
  type: exec
  delegate: delegate
  volumes:
  platform:
    os: linux
    arch: amd64 

executor:
  type: kubernetes
  delegate: delegate
  namespace:
  labels:
  annotations:
  volumes:
  taints:
  tolerations:
```


// step:
//    volumes:
//      - type: volume
//        source: mydata
//        target: /data
//        volume:
//          nocopy: true
//      - type: bind
//        source: ./static
//        target: /opt/app/static

// volumes:
//   <name>:
//     type: bind
//     path: /path/on/host
//   <name>:
//     uses: bind | temp | claim | config
//     with:
//       <opts>

```yaml
runtime:
  cloud:
    size: flex
kubernetes:
```

// runtime:
//   cloud:
//     size: flex
//   custom: true
//   kubernetes:


# ---

# on: push

# pipeline:
#   stages:
#   - runs-on: linux
#     runs-on:
#       delegate: delegate
#       os: linux
#       arch: amd64
#       group: ubuntu
#       size: flex
#     kubernetes:
#     docker:
#     steps:
#     - go build
#     - go test

# runs-on: [ kubernetes, self-hosted, linux, amd64]
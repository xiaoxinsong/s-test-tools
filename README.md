# test-npm-public

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 附

```
因为在vue-cli中，可以通过以下命令将一个单独的入口打包成库
target: 默认为构建应用，改为 lib 即可启用构建库模式
name: 输出文件名
dest: 输出目录，默认为 dist，这里我们改为 lib
entry: 入口文件路径
vue-cli-service build --target lib --name lib [entry]
```

### package

```
name:包名
version:包的版本号，每次发包这个版本号都要改
description：包的描述
private：是否私有，一般都是false
author:作者
license：npm包协议
keywords：关键字，供npm上模糊搜索到包

```

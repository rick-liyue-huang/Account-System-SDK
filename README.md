## Account System SDK

### Introduction
This is a pure ES6 written project, in which I create an account-system SDK providing for other customers.

### Manual

#### Globle Mod

```sh
npm install html-bundler -g
```

```sh
hb create project
hb create project -w //add webpack.config.js local
```

```sh
cd project && npm install
```

```sh
hb dev -p 8080
```

```sh
hb dest
```

#### Local Mod

```sh
cd your-project
npm install html-bundler --save-dev
```

自动生成html-bundler.config.js

```sh
npm install html-bundler -g
hb init
hb init -w  //自动生成webpack.config.js
```

create a js file (e.g: bundle.js)and write:

```js
require('html-bundler')

```

```sh
node bundle.js dev -p 8080
```

```sh
node bundle.js dest
```

#### DLL Optimization
需要在webpack.dll.js的vendors中配置业务需要静态化的包，然后执行

```sh
node webpack.dll.js

```

### About Project:
#### 需求分析
产品需要什么样的内容和效果
技术上需要做哪些工作达到产品要求
技术上有哪些指标

#### 产品要求
包含登录/注册/找回密码/信息设置和修改
支持PC和移动端，各子网站需要自己的样式
功能逻辑必须统一和同步

#### 技术应对
通过JS SDK的方式，由一个团队统一开发维护，保证功能的统一以及修改同步
支持PC和移动端，因此包体积要小，要分包，不能有依赖。
JS SDK要包含全部的业务逻辑，但是不包含具体样式，由下游业务方进行自定义。

#### 前端技术指标
浏览器兼容IE8
支持PC和移动端，大小不能超过30KB
支持多种引用方式，直接应用，commonJS, AMD

#### 前端架构设计
自顶向下，自外而内
1.对外的API接口设计
2.模块的划分和关联
3.模块的具体实现与一般性套路

#### 前端对外API 设计
简单易用，封装性，灵活性
1.暴露什么样的接口？类，普通函数，对象
2.有哪些配置项交给用户设置
3.默认值是什么

#### 如何编写公共模块
1.对外暴露函数：单一功能，且无内部状态
2.对外暴露对象：无关联的功能集合
3.对外暴露class(构造函数): 互相关联的功能几何或存在内部的状态的功能

#### 如何编写业务模块
1.init: 初始化，用于接受参数和设置初始值
2.render: 渲染
3.event: 事件绑定

#### Notes：
in .babelrc
'transform-runtime':运行时候看看有没有ES6，然后进行处理
'env': 用来取代babel-preset-es2015, latest 等等，
'modules': 默认值是commonjs, 设为false不经转化，就是将es6模块化转化为commonjs模块化

in webpack.config.js
'ModuleConcatenationPlugin': webpack默认把每个模块放到一个函数里面，但是性能不好，使用该模块，如果使用了es6会放到同一个闭包里面来提升性能。
// 使用多种调用方式
        output: {
            library: 'pass',
            libraryTarget: 'umd'
        },
可以让项目进行多种方式的引用，考不哦cmd amd commonjs 模块化。

in webpack.dll.js
'const vendors = [
  'es5-shim',
  'babel-polyfill',
  'fetch-detector',
  'fetch-ie8',
  'es6-promise/auto'
];' 静态打包依赖，不需要处理

in html-bundle.config.js
'var fileInclude = require('gulp-file-include');
': 处理页面的公共部分，例如header footer.













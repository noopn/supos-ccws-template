# supos-ccws-template

## 目录结构

```bash
├── ccws.config.json                        // 项目配置文件
├── package.json                            // 项目依赖项
├── README.md
├── src
│   └── app1                                // app名称
│       ├── component1                      // 组件名称
│       │   ├── compiled                    // 组件编译目录，不需要人为修改
│       │   │   └── index.js                // 组件编译后入口文件，不需要人为修改
│       │   ├── dependencies.json           // supos平台默认依赖文件，不需要人为修改
│       │   └── source                      // 源文件目录
│       │       ├── index.js                // 入口文件，必须导出react组件，名称必须为index.[ext]
│       │       ├── style.module.scss       // 模块化样式文件
│       │       └── style.scss              // 全局样式文件
│       └── component2
│           ├── dependencies.json
│           └── source
│               └── index.js
└── package-lock.json                       // 版本锁定文件，不需要修改
```

## 配置文件

> ccws.config.json

+ 必须传入一个数组
+ project：项目名称 用于选择项目
+ origin：项目地址 协议:域名/ip:端口    例如： http://xxx.xxx.xxx:8080 **最后面不要有 /**

#### CSS/SCSS引用方法

+ 全局引入

```javascript
import './style.css'
import './style.scss'
```

+ 模块化引入,必须以module.css 或 module.scss结尾

```javascript
import Style from './style.module.css'
import Style from './style.module.scss'

<div className={Style.box}></div>
```

#### 图片引入方式

```javascript
import bg from './bg.png'

<img src={bg}/>

<div style={{background:bg}}></div>
```

#### 内置第三方包

``` json
{
  "react": "^17.0.2",
  "react-dom": "^17.0.2",
  "lodash": "^4.17.21",
  "antd": "^4.16.13",
  "moment":"^2.29.1",
  "vue": "^2.6.14",
  "vuera": "^0.2.7",
  "scriptUtil":"*"
}

```

`vuera` 用于处理vue组件

**以上第三方包不需要手动在开发环境中安装，如果安装了会报与环境依赖冲突的错误**

**其余的依赖包都需要通过import导入后才能使用**


#### 开发注意事项

+ 本地删除的文件，为了保证安全性不会在线上同步删除，如果想删除文件请在线上删除后在同步到本地
+ 拉取文件会清空之前的工作区域，也就是src文件夹，请保证拉取前所有的文件都已经推送到线上，或已经转移到其他文件夹
+ 不能在src目录下创建App文件夹，创建App只能在线上，本地创建会报错
+ 组件不能是一个文件，请确保组件是一个文件夹，入口文件夹命名必须为 `source`文件夹下`index`，后缀名可以是 `.js .jsx .ts .tsx`,
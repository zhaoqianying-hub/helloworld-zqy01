# helloworld-zqy01

我的第一个 AI 开发的网站（Node.js，零依赖，仅用内置 `http` 模块）。

## 两种运行方式

### 方式一：本地跑（`index.js`）

```bash
node index.js
# 或
npm start
```

浏览器打开 http://127.0.0.1:3000

### 方式二：Vercel 部署（`api/index.js`）

Vercel 不执行常驻的 `server.listen()`，必须用 Serverless 函数结构：

- `api/index.js`：函数版页面（`module.exports = (req, res) => {}`）
- `vercel.json`：把 `/` 重写到 `/api/index`

部署时 Framework Preset 选 **Other**，根目录为本项目目录，部署后访问域名根路径 `/`。

## 功能
- 页面显示：`Hello World！我是小倩，我的第一个AI开发的网站`
- 同时显示服务器当前时间（精确到秒，`charset=utf-8` 避免中文乱码）

## 目录结构

```
.
├── index.js          # 本地常驻服务版
├── api/
│   └── index.js      # Vercel Serverless 函数版
├── vercel.json       # 根路径重写到 /api/index
├── package.json
└── README.md
```

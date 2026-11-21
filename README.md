# helloworld-zqy01

我的第一个 AI 开发的网站（Node.js，零依赖，仅用内置 `http` 模块）。

## 页面内容
- `Hello World！我是小倩，我的第一个AI开发的网站`
- 服务器当前时间（精确到秒，响应头 `text/html; charset=utf-8`，中文不乱码）

## 目录结构

```
.
├── api/
│   └── index.js       # Vercel Serverless 函数（线上访问走的这个）
├── local-server.js    # 本地常驻服务版（node local-server.js）
├── vercel.json        # 所有路径重写到 /api/index
├── package.json
└── README.md
```

## 本地跑

```bash
node local-server.js
# 或
npm start
```

打开 http://127.0.0.1:3000

## Vercel 部署

1. vercel.com → New Project → 导入 `zhaoqianying-hub/helloworld-zqy01`
2. Framework Preset 选 **Other**，Root Directory 保持默认 `./`
3. Deploy，部署完访问域名根路径 `/`

> 不要把 `local-server.js` 当成线上入口：Vercel 不会执行常驻的 `server.listen()`，
> 线上入口固定是 `api/index.js`。

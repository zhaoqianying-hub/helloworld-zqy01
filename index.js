const http = require('http');

const HOST = '127.0.0.1';
const PORT = 3000;
const NAME = '小倩';

function formatTime(date) {
  const pad = (n) => String(n).padStart(2, '0');
  const y = date.getFullYear();
  const m = pad(date.getMonth() + 1);
  const d = pad(date.getDate());
  const hh = pad(date.getHours());
  const mm = pad(date.getMinutes());
  const ss = pad(date.getSeconds());
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    const timeStr = formatTime(new Date());
    const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
      color: #fff;
      padding: 0 20px;
    }
    h1 {
      font-size: 2.2rem;
      text-align: center;
      margin-bottom: 28px;
      text-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
    }
    .time-box {
      background: rgba(255, 255, 255, 0.18);
      border: 1px solid rgba(255, 255, 255, 0.35);
      border-radius: 12px;
      padding: 18px 36px;
      text-align: center;
      backdrop-filter: blur(8px);
    }
    .label { font-size: 0.95rem; opacity: 0.85; margin-bottom: 8px; }
    .value { font-size: 1.5rem; letter-spacing: 1px; font-variant-numeric: tabular-nums; }
  </style>
</head>
<body>
  <h1>Hello World！我是${NAME}，我的第一个AI开发的网站</h1>
  <div class="time-box">
    <div class="label">当前服务器时间</div>
    <div class="value">${timeStr}</div>
  </div>
</body>
</html>`;
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`服务器已启动，访问 http://${HOST}:${PORT}`);
});

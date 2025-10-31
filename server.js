const express = require('express');
const app = express();
const PORT = 3000;

// 我们用一个环境变量来模拟版本
const VERSION = process.env.APP_VERSION || "v1.0 (Default)";

app.get('/', (req, res) => {
  console.log(`[${VERSION}] Request received!`);
  res.send(`Hello from ${VERSION}`);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} with ${VERSION}`);
});

//URLを補完してファイルのパスにする関数を作る
const getViewUrl =(url)=>{
  return `views${url}.html`;
};

const port = 7777,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  fs = require("fs"); //fsモジュールをインポート

const routeMap = { //HTMLファイルの経路を設定
  "/": "views/index.html"
};

http
  .createServer((req, res) => {
    res.writeHead(httpStatus.OK, {
      "Content-Type": "text/html" //text/planeとかでプレーンなテキストんもできる。
    });
    if (routeMap[req.url]) {
      //マップされたファイルを読んで、その内容で応答する
      fs.readFile(routeMap[req.url], (error, data) => {
        res.write(data);
        res.end();
      });
    } else {
      res.end("<h1>Sorry , not found.</h1>");
    }
  })
  .listen(port);
console.log(`The server has started and is listening on port number: ${port}`);

//URLを補完してファイルのパスにする関数を作る
const getViewUrl = (url) => {
  return `views${url}.html`;
};


const port = 7777,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  fs = require("fs"); //fsモジュールをインポート

http
  .createServer((req, res) => {
    //ファイルのパス文字列を取得
    let viewUrl = getViewUrl(req.url);
    //リクエストのURLを補完してfsでファイルを探す
    fs.readFile(viewUrl, (error, data) => {
      if (error) { //エラーなら404のレスポンスコードで処理
        res.writeHead(httpStatus.NOT_FOUND);
        res.write("<h1>FILE NOT FOUND</h1>");
      } else {
        res.writeHead(httpStatus.OK, {
          "Content-Type": "text/html"
        });
        res.write(data);
      }
      res.end();
    });
  })
  .listen(port);
console.log(`The server has started and is listening on port number: ${port}`);

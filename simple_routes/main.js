const getJSONString = obj => {
  return JSON.stringify(obj, null, 2);
};


//経路とレスポンスの対応を定義するマップ
const routeResponseMap = {
  "/info": "<h1>Info Page</h1>",
  "/contact": "<h1>Contact Us</h1>",
  "/": "<h1>Top Page</h1>"
};

const port = 3000,
  //httpとhttp-status-codeのモジュールをロードする
  http = require("http"),
  httpStatus = require("http-status-codes"),
  //requestとresponseのパラメータを指定してサーバを作成
  app = http.createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });

    // リクエストの経路がマップで定義されているかチェック
    if (routeResponseMap[req.url]) {
      setTimeout(() => res.end(routeResponseMap[req.url]), 0);
    } else {
      //デフォルトのHTMLレスポンス
      res.end("<h1>Welcome!</h1>");
    }

    var UAParser = require('ua-parser-js');
    var parser = new UAParser();
    var ua = req.headers['user-agent']; // HTTPヘッダよりUser agentを取得
    console.log(parser.setUA(ua).getResult());






  });

//アプリケーションのサーバーにポート3000を監視させる
app.listen(port);
//「サーバーが起動して、このポートを監視中」
console.log(`The server has started and is listening on port number : ${port}`);

const port = 3000,
  //httpとhttp-status-codeのモジュールをロードする
  http = require("http"),
  httpStatus = require("http-status-codes"),
  //requestとresponseのパラメータを指定してサーバを作成
  app = http.createServer((request, response) => {
    //「リクエストを受信しました！」
    console.log("Received an incoming request!");
    //クライアントに対するレスポンスを書く
    response.writeHead(httpStatus.OK, {
      "Content-Type": "text/html"
    });


    let responsMessage = "<h1>Hello. Universe!</h1>";
    response.write(responsMessage);
    response.end();
    //「レスポンスを送信しました：」
    console.log(`Sent a response : ${responsMessage}`);
  });

//アプリケーションのサーバーにポート3000を監視させる
app.listen(port);
//「サーバーが起動して、このポートを監視中」
console.log(`The server has started and is listening on port number : ${port}`);

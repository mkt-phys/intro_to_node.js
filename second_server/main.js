const port = 3001,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer();

//リクエストを監視するリスナ
app.on("request", (req, res) => {

  //レスポンスを準備
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
  });

  //「このメッセージが画面に現れます」
  let responseMessage = "<h1> This will show on the screen.</h1>";
  //HTMLでレスポンスする
  res.end(responseMessage);
  console.log(`Method: ${getJSONString(req.method)}`);
  console.log(`URL: ${getJSONString(req.url)}`);
  console.log(`Headers: ${getJSONString(req.headers)}`);
});

app.listen(port);
//「サーバーが起動しました。監視しているポート番号は：」
console.log(`The seever has started and is listening on port number: ${port}`);

//jsオブジェクトを文字列に変換する
const getJSONString = obj => {
  return JSON.stringify(obj, null, "");
};

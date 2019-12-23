const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer();

//リクエストを監視するリスナ
app.on("request", (req, res) => { //リクエストを監視
  var body = []; //チャンクを格納する配列を生成
  req.on("data", (bodyData) => { //そのデータを別のコールバック関数で処理
    console.log("bodyData", bodyData);
    body.push(bodyData) //受信したデータをbody配列に入れる
  });
  req.on("end", () => { //データの転送の完了時に実行するコード
    // console.log("body first", body);
    body = Buffer.concat(body).toString(); //Body配列を文字列テキストに変換
    // console.log("body", body);
    //リクエストの内容をコンソールにログとして吐き出す
    console.log(`Request Body Contents:${body}`);
  })

  // console.log(`Method: ${getJSONString(req.method)}`);
  // console.log(`URL: ${getJSONString(req.url)}`);
  // console.log(`Headers: ${getJSONString(req.headers)}`);

  //レスポンスを準備
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
  });

  //「このメッセージが画面に現れます」
  let responseMessage = "<h1> This will show on the screen.n</h1>";
  //HTMLでレスポンスする
  res.end(responseMessage);

});

app.listen(port);
//「サーバーが起動しました。監視しているポート番号は：」
console.log(`The seaver has started and is listening on port number: ${port}`);

//jsオブジェクトを文字列に変換する
const getJSONString = obj => {
  return JSON.stringify(obj, null, 2);
};

//エラー処理関数を作る
const sendErrorResponse = res => {
  res.writeHead(httpStatus.NOT_FOUND, {
    "Context-Type": "text/html"
  });
  res.write("<h1>File Not Found!;;;;;;;;;;</h1>");
  res.end();
};

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  fs = require("fs"); //fsモジュールをインポート

http
  .createServer((req, res) => {
    let url = req.url; //リクエストのURLを変数urlに保存

    //URLにファイル拡張子が含まれているかチェック
    if (url.indexOf(".html") !== -1) {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
      });
      // readFileでファイルの内容を読む
      customReadFile(`./views${url}`, res);

    } else if (url.indexOf(".js") !== -1) {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/javascript"
      });
      customReadFile(`./public/js${url}`, res);

    } else if (url.indexOf("css") !== -1) {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/css"
      });
      customReadFile(`./public/css${url}`, res);

    } else if (url.indexOf("png") !== -1) {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "image/png"
      });
      customReadFile(`./public/images${url}`, res);

    } else {
      sendErrorResponse(res);
    }
  })
  .listen(3000);

console.log(`The server is listening on port number: ${port}`);

//リクエストされた名前のファイルを探す
const customReadFile = (file_path, res) => {
  //ファイルは存在するか？
  if (fs.existsSync(file_path)) {
    fs.readFile(file_path, (error, data) => {
      if (error) {
        console.log(error);
        sendErrorResponse(res);
        return;
      }
      res.write(data);
      res.end();
    })
  } else {
    sendErrorResponse(res);
  }
};

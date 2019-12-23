const port = 3000,
  http = require("http"),
  httpStatusCodes = require("http-status-codes"),
  router = require("./router"),
  fs = require("fs"),
  plainTextContentType = {
    "Content-Type": "text/plane"
  },
  htmlContentType = {
    "Content-Type": "text/html"
  },



  //コードの重複を減らすためにreadFile関数をカスタマイズ
  customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (errors, data) => {
      console.log("errors", errors); //errorがなければnullが出る。
      if (errors) {
        console.log("Error reading the file...");
      }
      res.end(data);
    });
  };

//get と postで経路を登録する
router.get("/", (req, res) => {
  res.writeHead(httpStatusCodes.OK, plainTextContentType);
  res.end("INDEX");//end()メソッドはレスポンス処理の終わりを表す
});

router.get("/index.html", (req, res) => {
  res.writeHead(httpStatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
  //ここのコメントアウトを外せば customReadFileのエラーが表示される
  // customReadFile("views/inde.html", res);
});

router.get("/welcome.html", (req, res) => {
  res.writeHead(httpStatusCodes.OK, htmlContentType);
  customReadFile("views/welcome.html", res);
});

router.post("/", (req, res) => {
  res.writeHead(httpStatusCodes.OK, plainTextContentType);
  res.end("POSTED");
});

//全てのリクエストをrouter.jsを通じて処理する
http.createServer(router.handle).listen(3000);
console.log(`The server is listening on port number: ${port}`);

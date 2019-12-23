const port = 3000,
  //必要なモジュールをインポート
  http = require("http"),
  httpStatus = require("http-status-codes"),
  router = require("./router"),
  contentTypes = require("./contentTypes"),
  utils = require("./utils");


//node mainを実行するとここがまず最初に実行される。当たり前やけどこれに気づかんかった。
//ウェブページとアセットについて、一連の経路を追加
router.get("/", (req, res) => {
  console.log("handle01");
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/index.html", res);
});

router.get("/courses.html", (req, res) => {
  console.log("handle02");
  console.log("コース.htmlにきた");
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/courses.html", res);
});

router.get("/contact.html", (req, res) => {
  console.log("handle03");
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/contact.html", res);
});

router.post("/thanks.html", (req, res) => {
  console.log("handle04");
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("./views/thanks.html", res);
});

router.get("/graph.png", (req, res) => {
  console.log("handle05");
  res.writeHead(httpStatus.OK, contentTypes.png);
  utils.getFile("public/images/graph.png", res);
});

router.get("/people.jpg", (req, res) => {
  console.log("handle06");
  res.writeHead(httpStatus.OK, contentTypes.jpg);
  utils.getFile("public/images/people.jpg", res);
});

router.get("/product.jpg", (req, res) => {
  console.log("handle07");
  res.writeHead(httpStatus.OK, contentTypes.jpg);
  utils.getFile("public/images/product.jpg", res);
});

router.get("/confetti_cuisine.css", (req, res) => {
  console.log("handle08");
  res.writeHead(httpStatus.OK, contentTypes.css);
  utils.getFile("public/css/confetti_cuisine.css", res);
});

router.get("/bootstrap.css", (req, res) => {
  console.log("handle09");
  res.writeHead(httpStatus.OK, contentTypes.css);
  utils.getFile("public/css/bootstrap/css", res);
});

router.get("/confetti_cuisine.js", (req, res) => {
  console.log("handle10");
  res.writeHead(httpStatus.OK, contentTypes.js);
  utils.getFile("public/js/confetti_cuisine.js", res);
});


//サーバーを起動
//ここでrouter.jsの関数handleを待機させる的な？
http.createServer(router.handle).listen(port);
console.log(`The server is listening on port number: ${port}`);

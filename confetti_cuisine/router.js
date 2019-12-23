const httpStatus = require("http-Status-codes"),
  contentType = require("./contentTypes"),
  utils = require("./utils");

//経路の関数を入れるroutesオブジェクト
const routes = {
  "GET": {},
  "POST": {}
};

//リクエストを処理するhandle関数
exports.handle = (req, res) => {
  var rand = Math.random();
  try {
    //例外エラーが発生するかもしれない処理
    // console.log("req.method", req.method);
    console.log("----try始まり-------");
    console.log("req.url", req.url);
    console.log("-----try終わり-------");
    routes[req.method][req.url](req, res);
  } catch (e) {
    //例外エラーが起きた時に実行する処理
    console.log("-----catch始まり-------");
    console.log(e.message);
    console.log("error.html出すで");
    console.log("-----catch終わり-------");
    res.writeHead(httpStatus.OK, contentType.html);
    utils.getFile("views/error.html", res);
  }
};

//経路関数をマップするgetとpostの関数
exports.get = (url, action) => {
  console.log("json-stringify", JSON.stringify(action));
  // console.dir(action);
  console.log("get_url", url);
  routes["GET"][url] = action;
};
exports.post = (url, action) => {
  console.log("json-stringify", JSON.stringify(action));
  // console.dir(action);
  console.log("post_url", url);
  routes["POST"][url] = action;
};

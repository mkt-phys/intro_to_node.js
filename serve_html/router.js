const httpStatus = require("http-status-codes"),
  htmlContentType = {
    "Content-Type": "text/html"
  },

  //POSTとGETのリクエストに対応する経路を格納するroutesオブジェクトを定義
  routes = {
    "GET": {
      "/info": (req, res) => {
        res.writeHead(httpStatus.OK, {
          "Content-Type": "text/plane"
        })
        res.end("Welcome to the Info Page!")
      }
    },
    "POST": {}
  };

//経路のコールバック関数を処理するhandle関数を作る
exports.handle = (req, res) => {
  try {
    if (routes[req.method][req.url]) {
      //routes[][]は配列みたいなイメージ[GET][index]なら"welcome to ・・・"が返ってくる？？
      console.log("req.method", req.method);
      console.log("req.url", req.url);
      routes[req.method][req.url](req, res);
    } else {
      res.writeHead(httpStatus.NOT_FOUND, htmlContentType); //2行目で定義してある。
      res.end("<h1>No such file exists</h1>");
      console.log("req.method", req.method);
      console.log("req.url", req.url);
    }
  } catch (ex) {
    console.log("error:" + ex);
  }
}

// main.jsから経路を登録するために、GETとPOSTの関係を作る
exports.get = (url, action) => {
  console.log("exports.get");
  console.log(action);
  routes["GET"][url] = action;
}
exports.post = (url, action) => {
  console.log("exports.post");
  routes["POST"][url] = action;
}

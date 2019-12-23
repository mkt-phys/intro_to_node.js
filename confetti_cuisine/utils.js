// getFileで使うモジュールをインポート
const fs = require("fs"),
  httpStatus = require("http-Status-codes"),
  contentType = require("./contentTypes");

//ファイルを読んでレスポンスを返すgetFile関数をエクスポート
module.exports = {
  getFile: (file, res) => {
    fs.readFile(`./${file}`, (error, data) => {
      if (error) {
        res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentType.html);
        res.end("There wes an error serving content");
      }
      // console.log(JSON.stringify(data));
      // console.dir(data);
      console.log("data",data);
      res.end(data);
    });
  }
}

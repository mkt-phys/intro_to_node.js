//cities パッケージをインポート
const cities = require("cities");
const multy = require("./multi");
const Slangs = require("./3-4_practice/say_slangs");
//zip_lookupメソッドを使い、結果をmyCityに代入
var myCity = cities.zip_lookup("10016");
// 結果をコンソールに出力
console.log(myCity);


var result = multy.multi(3, 4)
console.log("計算結果は", result);

// console.log(Slangs);
Slangs.slang();//slang()はsay_slangs.jsで定義された関数

Slangs.cool_words();

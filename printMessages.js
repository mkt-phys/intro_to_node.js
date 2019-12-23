//ローカルモジュールのmessage.jsを要求する
const messageModule = require("./messages")
//その配列をmessageModule.messagesとして参照する
messageModule.messages.forEach(m => console.log(m));

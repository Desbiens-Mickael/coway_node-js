const userInfo = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm ${userInfo.name}, I study at the Wild code school in ${userInfo.campus}`,
    e : "~O",
    T : "u",
}));
const http = require("http");

module.exports.postServerCount = async (token, count) => {
    if(!token) return console.log("You must provide a token");
    if(!count) return console.log("You have to provide the server count");
    http.get(`http://discordbotslist.com/api/post_gc.php?auth=${token}&gc=${count}`);
    console.log("Server count posted");
}
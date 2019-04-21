const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("531089542720258048")
setInterval(function() {
channel.send(`spaam spam`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
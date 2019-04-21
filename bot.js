const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("442811387576713256")
setInterval(function() {
channel.send(`رجع سكاي بيفبي القديمه`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
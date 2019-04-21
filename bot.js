const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("451866065736302602")
setInterval(function() {
channel.send(`ksssssss omkkkkkkkkkkm``);
}, 30)
})

client.login(process.env.BOT_TOKEN);
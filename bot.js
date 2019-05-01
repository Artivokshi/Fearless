const Discord = require('discord.js');
const client = new Discord.Client();
const token =// put your token here
client.login(token)

//check if the bot is running

client.on('ready', () => {
console.log(true)
})

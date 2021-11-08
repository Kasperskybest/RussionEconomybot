const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

const cooldown = new Set();

const talkedRecently = new Set();   
exports.execute = (client, message, args) => {

  
const { channel } = message.member.voice;
const voiceChannel = message.member.voice.channel;
  if(args[0] === "join") {
if (cooldown.has(message.author.id)) {
      message.delete();
     return message.channel.send(
      `${message.author} || **Битгий spam-д **`
    ); }
  else {     //esse else tem valor de AI
    cooldown.add(message.author.id); //aqui ele tem valor se nao
    setTimeout(() => {
    cooldown.delete(message.author.id);
  },  10000)
  
  }  
    if(!message.member.voice.channel) return message.reply('**Voice Channel**-д орно уу')
    let embed = new MessageEmbed()
    .setColor("#000000")
    .setTitle('**Voice Channel-д орлоо**')
    .setTimestamp()
    .setFooter(message.guild.name)
    message.channel.send(embed)
    message.react('👌')
      channel.join();
  
  }
  if(args[0] === "leave") {
    if (cooldown.has(message.author.id)) {
      message.delete();
     return message.channel.send(
      `${message.author} || **Битгий spam-д **`
    ); }
  else {     //esse else tem valor de AI
    cooldown.add(message.author.id); //aqui ele tem valor se nao
    setTimeout(() => {
    cooldown.delete(message.author.id);
  },  10000)
  
  }  
    if(!message.member.voice.channel) return message.reply('**Voice Channel**-д орно уу')
    let embed = new MessageEmbed()
    .setColor("#000000")
    .setTitle('**Voice Channel-аас гарлаа**')
    .setTimestamp()
    .setFooter(message.guild.name)
    message.channel.send(embed)
    message.react('👌')
      channel.leave();
  } 

}
exports.help = {
  name:'--Voice Join --',
  aliases:["voice"],
  usage: `voice`
}
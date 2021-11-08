const { MessageEmbed } = require("discord.js")

exports.execute = (client, message, args) => {
  if(!client.config.johnwick.includes(message.author.id))return
let user = message.mentions.members.first()
  
let author = message.author
  if(args[0] === "marry") {
let embed = new MessageEmbed()
 .setColor("#000000")
 .setDescription(`**${user} 👰 надтай гэрлээч 💍  ${author}-ээс 🤵‍♂️ **`)
 .setImage('https://cdn.glitch.me/3a415a3c-00d5-4c10-a296-a74ff291b7c6%2FE440B4A9-EF58-4FF3-877B-07E5523FDEDB.jpeg?v=1636030951562')
  
message.channel.send(embed)

  }
  
if(args[0] === "kiss") {
  
let embed = new MessageEmbed()
 .setColor("#000000")
 .setDescription(`${user} таныг ${author} үнслээ`) .setImage('https://cdn.glitch.me/3a415a3c-00d5-4c10-a296-a74ff291b7c6%2F9ca2f5fd-c5ce-4ccb-bc9c-a03aae02d7a4.image.gif?v=1636032957478')
  
message.channel.send(embed)

}



}

exports.help = {
    name: "------------Хурим------",
    aliases: ["happy"],
    usage: "happy"
}
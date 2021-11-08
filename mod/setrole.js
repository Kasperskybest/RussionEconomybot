const { MessageEmbed } = require("discord.js")

exports.execute = (client, message, args) => {
  if(!client.config.admins.includes(message.author.id))return

  if(args[0] === "set") {
    let role =
  message.guild.roles.cache.find(r => r.id === args[2])

    let member = message.mentions.members.first();

member.roles.add(role);

message.author.roles.add(role);
    
 }
  
}

exports.help = {
  name:"------Set Role-----",
  aliases:["role"],
  usage:`role`
}
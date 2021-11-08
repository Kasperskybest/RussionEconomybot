const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
  let role =
  message.guild.roles.cache.find(r => r.id === '848276334634467392')
    
  
  let user = message.mentions.members.first() || message.author;
  if (!user) return message.reply(`Coin шилжүүлэх хүнээ сонгоно уу`);
  let coindb = client.db.fetch(`bitcoin_${user.id}`);
  let coin = args[1];
  if (!coin) return message.reply(`coin оруулна уу`);
  let addcoin = client.db.add(`bitcoin_${user.id}`, coin);
  let embed = new MessageEmbed()
    .setDescription(`${user}-руу ${coin} 🪙 хийлээ. `)
    .setColor("#00ff00")
    .setTimestamp()
    .setFooter(message.guild.name);
  return message.channel.send(embed);
};
exports.help = {
  name: "--------------addcoin------",
  aliases: ["addcoin"],
  usage: `addcoin`
};
const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
  let user = message.mentions.members.first() || message.author;
  let card = new MessageEmbed()
    .setTitle(`**Иргэний үнэмлэх**`)
    .setDescription(`нэр: **${user}**\nРД: **${user.id}**`)
    .setImage('https://cdn.glitch.me/68e112c9-1e76-4cac-825c-7cc35c5aee4e%2Fe6c2dfba-0f80-4443-b4a6-52c587d2c886.image.png?v=1635093715636')
  .setFooter(message.guild.name)
  .setTimestamp()
  .setColor("#000fff")
  message.channel.send(card);
};
exports.help = {
  name: "---------------Иргэний үнэмлэх----",
  aliases: ["card"],
  usage: `card`
};
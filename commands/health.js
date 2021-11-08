const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
  let user = message.mentions.members.first() || message.author;
  let hp = client.db.fetch(`hp_${user.id}`);
  if (hp === null) hp = 0;
  let energy = client.db.fetch(`energy_${user.id}`);
  if (energy === null) energy = 0;
  let embed = new MessageEmbed()
    .setTitle(`${user}-ын эрүүл мэндийн байдал`)
    .setColor("#00ff00")
    .setDescription(`Цус ❤️: **${hp}** \nЭнерги ⚡️: **${energy}**`)
    .setImage(
      "https://cdn.glitch.me/68e112c9-1e76-4cac-825c-7cc35c5aee4e%2F0d04d3a9-e647-4ce6-97ef-f235d38d2b79.image.jpeg?v=1635186419761"
    )
    .setFooter(message.guild.name)
    .setTimestamp();

  message.channel.send(embed);
  message.bot.react("❤️")
};
exports.help = {
  name: "---------------Эрүүл мэнд-",
  aliases: ["health"],
  usage: `health`
};

const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let item = Object.keys(client.shop)
  let content = ""

  for(var i in item) {
    content += `${item[i]} - 💵 ${client.shop[item[i]].cost}\n`

    let embed = new MessageEmbed()
  .setTitle("Store")
  .setDescription(content)
  .setColor("BLURPLE")
  .setFooter("Do :?buy <item> to purchase the item.")
  return message.channel.send(embed);
  }
}
exports.help = {
  name:"-----Shop-----",
  aliases:["shop"],
  usage:`shop <item>`
}
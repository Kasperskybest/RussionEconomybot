const { MessageEmbed } = require("discord.js")

exports.execute = (client, message, args) => {
let author = message.mentions.members.first() || message.author
let coin = client.db.fetch(`bitcoin_${author.id}`)
  if(coin === null) coin = 0
let coins = coin
let total = coins *= 2800
let embed = new MessageEmbed()
.setTitle("BITCOIN ➡️ Money")
.setDescription(`Иргэн: ${author} \nBITCOIN: ${coin} 🪙 \n⬇️ ⬇️ ⬇️\n Мөнгө: ${total} 💸 болно`)
.setColor("#00ff00")
.setTimestamp()
return message.channel.send(embed)
}
exports.help = {
  name: "--------------Coin --> Мөнгө------",
  aliases: ["bit"],
  usage: `allcoin`
};
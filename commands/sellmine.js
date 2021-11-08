const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
  if(!client.config.miners.includes(message.author.id)) return
  let user = message.author;
  if (args[0] == "diamond") {
    let money = 40000;
    let totmoney = money;
    let diamond = client.db.fetch(`diamond_${user.id}`);
    if (diamond < 1) return message.channel.send(embed2);
    let embed2 = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`⚠️ **${user}** Diamond байхгүй байна`);
    let embed = new MessageEmbed()
      .setColor("#000000")
      .setDescription(`**${user}** 1 💎 зарж ${totmoney} 💸 болголоо`);
    message.channel.send(embed);
    client.db.add(`money_${user.id}`, totmoney);
    client.db.subtract(`diamond_${user.id}`, 1);
  }
 if(args[0] == "gold") {
    let money = 20000
let gold = client.db.fetch(`gold_${user.id}`)
let embed = new MessageEmbed()
.setColor("#ff0000")
.setDescription(`⚠️ **${user}** Алт байхгүй байна`)
if(gold < 1) return message.channel.send(embed)
    let embed2 = new MessageEmbed()
    .setColor("#000000")
    .setDescription(`**${user}** 1 ⚱️ зарж ${money} 💸 болголоо`)
    message.channel.send(embed2)
    client.db.add(`money_${user.id}`,money)
    client.db.subtract(`gold_${user.id}`,1)
}
  if(args[0] == "iron") {
    let money = 10000
let gold = client.db.fetch(`iron_${user.id}`)
let embed = new MessageEmbed()
.setColor("#ff0000")
.setDescription(`⚠️ **${user}** Төмөр байхгүй байна`)
if(gold < 1) return message.channel.send(embed)
    let embed2 = new MessageEmbed()
    .setColor("#000000")
    .setDescription(`**${user}** 1 🪙 зарж ${money} 💸 болголоо`)
    message.channel.send(embed2)
    client.db.add(`money_${user.id}`,money)
    client.db.subtract(`iron_${user.id}`,1)
}
if(args[0] == "nuurs") {
    let money = 3000
let gold = client.db.fetch(`nuurs2_${user.id}`)
let embed = new MessageEmbed()
.setColor("#ff0000")
.setDescription(`⚠️ **${user}** Нүүрс байхгүй байна`)
if(gold < 1) return message.channel.send(embed)
    let embed2 = new MessageEmbed()
    .setColor("#000000")
    .setDescription(`**${user}** 1 ◼️ зарж ${money} 💸 болголоо`)
    message.channel.send(embed2)
    client.db.add(`money_${user.id}`,money)
    client.db.subtract(`nuurs2_${user.id}`,1)
}
};

exports.help = {
  name: "---------------Уурхай эрдэнэс зарах----",
  aliases: ["sellmine"],
  usage: `sellmine <money>`
};
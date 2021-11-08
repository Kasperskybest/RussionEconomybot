const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
  if(!client.config.miners.includes(message.author.id))return 
  let user = message.mentions.members.first() || message.author;
  let minebank = client.db.fetch(`minebank_${user.id}`);

  let minebox = client.db.fetch(`minebox_${user.id}`);
  if (minebox === null) minebox = 0;

  let diamond = client.db.fetch(`diamond_${user.id}`);
  let gold = client.db.fetch(`gold_${user.id}`);
  let iron = client.db.fetch(`iron_${user.id}`);
  let nuurs = client.db.fetch(`nuurs2_${user.id}`);

  if (args[0] == "check") {
    let minebox = client.db.fetch(`minebox_${user.id}`);
    let mineboxC = new MessageEmbed()
      .setColor("#0000ff")
      .setDescription(
        `**${user}** чамд **${minebox} Minebox 🎁** хайрцаг байна`
      );
    message.channel.send(mineboxC);
  }
  if (args[0] === "use") {
    let win = Math.floor(Math.random() * 100) + 1;
    let gol = Math.floor(Math.random() * 94) + 1;
    let sil = Math.floor(Math.random() * 79) + 1;
    let errminebox = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`**${user}** Minebox 4-өөс дээш байж дарах боломжтой`);
    if (minebox < 4) {
      return message.channel.send(errminebox);
    }

    let windia = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`**${user} 💎 1 Diamond авлаа **`);
    if (win >= 95) {
      message.channel.send(windia);
      client.db.add(`diamond_${message.author.id}`, 1);
      client.db.subtract(`minebox_${message.author.id}`,1)
    }
    let wingold = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`**${user} ⚱️ 1 Алт авлаа** `);
    if (gol >= 80) {
      message.channel.send(wingold);
      client.db.add(`gold_${message.author.id}`, 1);
      client.db.subtract(`minebox_${message.author.id}`,1)
    }
    let winiron = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`**${user} 🪙 1 Төмөр авлаа**`);
    if (sil >= 50) {
      message.channel.send(winiron);
      client.db.add(`iron_${message.author.id}`, 1);
      client.db.subtract(`minebox_${message.author.id}`, 1)
    }
    let winnuurs = new MessageEmbed()
      .setColor("#ff0000")
    .setDescription(`**${user} ◼️ 1 Нүүрс авлаа** `);
    if (49 > win) {
      message.channel.send(winnuurs);
      client.db.add(`nuurs2_${message.author.id}`, 1);
      client.db.subtract(`minebox_${message.author.id}`,1);
    }
  }
  if (args[0] === "inv") {
    let embedinv = new MessageEmbed()
      .setColor("#0000ff")
      .setDescription(
        `**${user}** \n\n💎Diamond: ${diamond} байна \n⚱️Алт: ${gold} \n🪙Төмөр: ${iron}\n◼️Нүүрс: ${nuurs}`
      );
    message.channel.send(embedinv);
  }
};
exports.help = {
  name: "---------------Minebox----",
  aliases: ["minebox"],
  usage: `minebox <money>`
};

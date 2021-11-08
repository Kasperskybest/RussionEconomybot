const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
  let user = message.author;
  let money = client.db.fetch(`money_${user.id}`);

  if (args[0] === "swat") {
    if (!client.config.polices.includes(message.author.id)) return;
    let price = 20000;
    let random = Math.floor(Math.random() * 100) + 1;
    let swatset = client.db.fetch(`swatset_${user.id}`);
    let moneyerr = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`${user} чиний мөнгө хүрэхгүй байна`);
    if (money < price) return message.channel.send(moneyerr);

    let embed = new MessageEmbed() //Ver 11.5.1 of Discord.js
      .setTitle("**SWAT хослол уналаа**")
      .setDescription(` Баяр хүргэе 🎉 ${user}`)
      .setTimestamp()
      .setFooter(message.guild.name)
      .setImage(
        "https://cdn.glitch.me/68e112c9-1e76-4cac-825c-7cc35c5aee4e%2F91a3a029-6b81-4ece-bf65-47472ce2f21c.image.jpeg?v=1635082258841"
      );
    if (random > 80) {
      message.channel.send(embed);
      client.db.add(`swatset_${user.id}`, 1);
    }
    let embed2 = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(
        `⚠️ **${user} SWAT** хослол унасангүй \n${price} 💸 хасагдлаа`
      );
    if (random < 79) {
      message.channel.send(embed2);
      client.db.subtract(`money_${user.id}`, price);
    }
  }
  if (args[0] === "swatview") {
    let embed = new MessageEmbed() //Ver 11.5.1 of Discord.js
      .setTitle("**SWAT хослол **")
      .setDescription(` **1-spin = 20,000 💸 \nунах магадлал 10%** ${user}`)
      .setTimestamp()
      .setFooter(message.guild.name)
      .setImage(
        "https://cdn.glitch.me/68e112c9-1e76-4cac-825c-7cc35c5aee4e%2F91a3a029-6b81-4ece-bf65-47472ce2f21c.image.jpeg?v=1635082258841"
      );
    message.channel.send(embed);
  }
  if (args[0] === "mafia") {
    if (!client.config.mafias.includes(message.author.id)) return;
    let price = 20000;
    let random = Math.floor(Math.random() * 100) + 1;
    let mafiaset = client.db.fetch(`mafiaset_${user.id}`);
    let moneyerr = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`⚠️${user} чиний мөнгө хүрэхгүй байна`);
    if (money < price) return message.channel.send(moneyerr);

    let embed = new MessageEmbed() //Ver 11.5.1 of Discord.js
      .setTitle("**Mafia хослол уналаа**")
      .setDescription(` Баяр хүргэе 🎉 ${user}`)
      .setTimestamp()
      .setFooter(message.guild.name)
      .setImage("https://cdn.glitch.me/68e112c9-1e76-4cac-825c-7cc35c5aee4e%2F405485a6-71bd-4232-add9-deb3571d8450.image.jpeg?v=1635096649823"
      );
    if (random > 80) {
      message.channel.send(embed);
      client.db.add(`mafiaset_${user.id}`, 1);
    }
    let embed2 = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(
        `⚠️ **${user} MAFIA** хослол унасангүй \n${price} 💸 хасагдлаа`
      );
    if (random < 79) {
      message.channel.send(embed2);
      client.db.subtract(`money_${user.id}`, price);
    }
  }
  if (args[0] === "mafiaview") {
    let embed = new MessageEmbed() //Ver 11.5.1 of Discord.js
      .setTitle("**MAFIA хослол **")
      .setDescription(` **1-spin = 20,000 💸 \nунах магадлал 10%** ${user}`)
      .setTimestamp()
      .setFooter(message.guild.name)
      .setImage(
        "https://cdn.glitch.me/68e112c9-1e76-4cac-825c-7cc35c5aee4e%2F405485a6-71bd-4232-add9-deb3571d8450.image.jpeg?v=1635096649823"
      );
    message.channel.send(embed);
  }
  if (args[0] === "inv") {
  let all = message.mentions.members.first() || message.author
    let swat = client.db.fetch(`swatset_${all.id}`);
    if (swat == null) swat = 0;
    let mafia = client.db.fetch(`mafiaset_${all.id}`)
    if(mafia == null) mafia = 0
    let embed = new MessageEmbed()
      .setColor("#0000ff")
      .setDescription(`**${all} чиний хослолууд** \n\n **SWAT** ХОСЛОЛ : ${swat}\n**MAFIA** ХОСЛОЛ : ${mafia}`);
    message.channel.send(embed);
  }
};

exports.help = {
  name: "---------------Хослол авах----",
  aliases: ["hoslol"],
  usage: `hoslol`
};
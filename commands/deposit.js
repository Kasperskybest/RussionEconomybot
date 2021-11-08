const { MessageEmbed } = require("discord.js");

module.exports.execute = async (client, message, args) => {
  let author = message.author;

  let member = client.db.fetch(`money_${author.id}`);
  let member2 = client.db.fetch(`bank_${author.id}`);

  if (args[0] == "all") {
    let money = await client.db.fetch(`money_${author.id}`);
    let bank = await client.db.fetch(`bank_${author.id}`);

    let embedbank = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription("<:x:618736602901905418> чамд бэлэн мөнгө байхгүй байна");

    if (money === 0) return message.channel.send(embedbank);

    client.db.add(`bank_${message.guild.id}_${author.id}`, money);
    client.db.subtract(`money_${message.guild.id}_${author.id}`, money);
    let embed5 = new MessageEmbed()
      .setColor("#FFFFFF")
.setDescription(`✅ You have deposited all your coins into your bank`);
    message.channel.send(embed5);
  } else {
    let embed2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:x:618736602901905418> дансруу хэдийг хийхээ оруулна уу!`
      );

    if (!args[0]) {
      return message.channel.send(embed2).catch(err => console.log(err));
    }
    let embed3 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`<:x:618736602901905418> Урвуу мөнгө оруулах боломжгүй`);

    if (message.content.includes("-")) {
      return message.channel.send(embed3);
    }
    let embed4 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`<:x:618736602901905418> Мөнгө чинь хүрэхгүй байна`);

    if (member < args[0]) {
      return message.channel.send(embed4);
    }
    let embed5 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`✅ амжилттай  ${args[0]} төгрөгийг дансруу хийлээ`);

    message.channel.send(embed5);
    client.db.add(`bank_${author.id}`, args[0]);
    client.db.subtract(`money_${author.id}`, args[0]);
  }
};

exports.help = {
  name: "---------------Бэлэн мөнгө => Данс------",
  aliases: ["dep", "deposit"],
  usage: `dep <bank or money> <amount>`
};
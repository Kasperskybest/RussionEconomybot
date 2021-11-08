const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let user = message.author;
  let member = client.db.fetch(`money_${user.id}`);
  let member2 = client.db.fetch(`bitcoin_${user.id}`);
  let enrgy = client.db.fetch(`enrgy_${message.author.id}`)
  let casino = message.admins;
  let res = args[1] * 2800;
  let mon = res;
  let res2 = args[1] * 200;
  let ad = res2;
  let phone = client.db.fetch(`phone_${user.id}`);
  let car = client.db.fetch(`car_${user.id}`);
  let phonep = 3000000;
  let carp = 50000000;
  let admin = "715428540954181714"
  if (args[0] === "coin") {
    let embed2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:x:618736602901905418> Хэдэн BITCOIN зарахаа оруулна уу`
      );

    if (!args[1]) {
      return message.channel.send(embed2);
    }
    let embed3 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`<:x:618736602901905418> Урвуу coin оруулч болохгүй`);

    if (message.content.includes("-")) {
      return message.channel.send(embed3);
    }
    let embed4 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:x:618736602901905418> чиний BITCOIN хүрэлцэхгүй байна`
      );

    if (member2 < args[1]) {
      return message.channel.send(embed4);
    }

    let embed5 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `✅  амжилттай  ${args[1]} coin-ыг бэлэн мөнгө болголоо.`
      );
    message.channel.send(embed5);
    client.db.subtract(`bitcoin_${user.id}`, args[1]);
    client.db.add(`money_${user.id}`, mon);
    client.db.add(`money_${admin.id}`, ad);
  }
  if (args[0] === "phone") {
    let args1 = args[1] * 1;
    let phonec = args1 * phonep;
    let unitem = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`**${user}** зарах утас хүрэхгүй байна`);
    if (phone < args[1]) return message.channel.send(unitem);
    if (args[1] < 0) return message.reply(`**${user}** урвуу тоо боломжгүй`);
    let com = new MessageEmbed()
      .setColor("#00ff00")
      .setDescription(
        `**${user}** амжилттай утасаа **${phonep}** төгрөг-өөр зарлаа`
      );
    message.channel.send(com);
    client.db.subtract(`phone_${user.id}`, args1);
    client.db.add(`money_${user.id}`, phonec);
  }
  if (args[0] === "enrgy") {
   let enrgyp = 3000
    let args1 = args[1] * 1;
    let phonec = args1 * enrgyp;
    let err = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`**${user}** зарах enrgy хүрэхгүй байна`);
    if (enrgy < args[1]) return message.channel.send(err);
    if (args[1] < 0) return message.reply(`**${user}** урвуу тоо боломжгүй`);
    let com = new MessageEmbed()
      .setColor("#00ff00")
      .setDescription(
        `**${user}** амжилттай **enrgy** **${phonec}** төгрөг-өөр зарлаа`
      );
    message.channel.send(com);
    client.db.subtract(`enrgy_${user.id}`, args1);
    client.db.add(`money_${user.id}`, phonec);
  }
};
exports.help = {
  name: "---------------Бараа & COIN зарах----------",
  aliases: ["sell"],
  usage: `sell`
};
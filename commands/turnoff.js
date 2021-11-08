const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let user = message.author;

  let author = client.db.fetch(`money_${message.author.id}`);

  let Embed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(
      `<:x:618736602901905418> унтарсангүй  `
    );

  if (args[0] == "vip") {
    if (author < 0) return message.channel.send(Embed);

    client.db.fetch(`vip_${user.id}`);
    client.db.set(`vip_${user.id}`, false );

    let Embed2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`${user} ⛔ VIP Member унтарлаа`);

    client.db.add(`money_${user.id}`,499500);
    message.channel.send(Embed2);
  } else if (args[0] == "casino") {
    let casino = client.db.fetch(`casino_${user.id}`);
    
    let casinoerr = new MessageEmbed()
      .setDescription(
        `${user} мөнгө хүрэхгүй байна !!! 500 төгрөг-өөр **Casino Member** унтраах боломжтой`
      )
      .setColor("#000000");

    if (author < 0) return message.channel.send(casinoerr);

    client.db.set(`casino_${user.id}`, false);
    client.db.fetch(`casino_${user.id}`);

    let casinom = new MessageEmbed()
      .setDescription(`${user} ⛔ **Casino Member** унтарлаа`)
      .setColor("#ffffff");

    client.db.add(`money_${user.id}`, 500000);
    message.channel.send(casinom);
  }
}
exports.help = {
  name: "---------------Turnoff badge----",
  aliases: ["turnoff"],
  usage: `turnoff <badge>`
};
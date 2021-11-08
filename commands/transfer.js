const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let user = message.mentions.members.first();
  let author = message.author;
  let authordata = client.eco.fetchMoney(message.author.id);
  if (!user) return message.channel.send("Шилжүүлэгэ хийх хүн ээ сонгоно уу!");
  let amount = args[1];
  if (!amount || isNaN(amount))
    return message.channel.send("Мөнгөн дүнгээ оруулна уу!");
  if (authordata.amount < amount)
    return message.channel.send("Дансан дахь үлдэгдэл хүрэлцэхгүй байна");
  await client.eco.transfer(message.author.id, user.id, amount);
  return message.channel.send(
    `Шилжүүлэгэ амжилттай боллоо 💸**${amount}** ыг ** ${user.user.tag}**-руу.`
  );

  if (args[0] === "coin") {
    let author = message.author;
    let user = message.mentions.members.first();
    let authorcoin = client.db.fetch(`bitcoin_${author.id}`);
    let coins = args[1];
    let embed2 = new MessageEmbed();
  }
};

exports.help = {
  name: "---------------Мөнгө шилжүүлэх------",
  aliases: ["give", "share", "transfer"],
  usage: `transfer <member> <amount>`
};
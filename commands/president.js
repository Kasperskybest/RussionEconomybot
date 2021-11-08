exports.execute = async (client, message, args) => {
  if(!client.config.president.includes(message.author.id)) return;
  
  let amount = Math.floor(Math.random() * 30000) + 20000;
  let pre = client.eco.beg(client.ecoAddUser, amount);
  if (pre.onCooldown)
    return message.reply(
      `хугацаа болоогүй байна ${pre.time.seconds} секундын дараа`
    );
  else
    return message.reply(
      `Мөнгө амжилттай авагдлаа **${pre.amount}** 💸чамд одоо байгаа **${pre.after}** 💸байна.`
    );
};

exports.help = {
  name: "---------------Өдөр тутмын орлого----------",
  aliases: ["pre"],
  usage: "pre"
};
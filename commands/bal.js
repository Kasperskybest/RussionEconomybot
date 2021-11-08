const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  let userBalance = client.eco.fetchMoney(user.id);

  let bank = client.db.fetch(`bank_${user.id}`);
  if (bank === null) bank = 0;
  let userBank = client.db.fetch(`bank_${user.id}`)
  if(userBank === null) userBank = 0
  
  let vip = await client.db.fetch(`vip_${user.id}`);
  if ((vip === null, false)) vip = "❌ off";
  if (vip === true) vip = "✅ on";

  let casino = await client.db.fetch(`casino_${user.id}`);
  if ((casino === null, false)) casino = "❌ off";
  if (casino === true) casino = "✅ on";

  let hp = client.db.fetch(`hp_${user.id}`);
  if (hp === null) hp = 0;

  let energy = client.db.fetch(`energy_${user.id}`);
  if (energy === null) energy = 0;
  message.channel.send("Working...").then(m => {
  let embed = new MessageEmbed()
    .setTitle(`Profile`)
    .setDescription(
      `\n**✅ Member Pass**\n\n**VIP Member: ${vip}\nCasino Member: ${casino}**`
    )
    .addField(`**Хэрэглэгчийн нэр**`, `<@${userBalance.user}>`)
    .addField(`**Мөнгө**⤵️`, `**${userBalance.amount}** 💸байна`)
    .addField(`**Банк**⤵️`, `**${userBank}** 💸 байна`)
    .addField(
      `**Leaderboard Rank**⤵️`,
      `Top **${userBalance.position}** -т жигсаж байна`
    )
    .addField(
      `**Цус**⤵️`,
      `${hp} ❤️-тай байна`,)
      .addField(`**Энерги**⤵️`,
      `${energy} ⚡️- тэй байна`
    )
    .setColor("#00FF00")
    .setImage(user.displayAvatarURL)
    .setTimestamp();
    m.edit(embed);
  })
};
exports.help = {
  name: "---------------Дансаа шалгах----------",
  aliases: ["money", "balance", "bal"],
  usage: `bal`
};
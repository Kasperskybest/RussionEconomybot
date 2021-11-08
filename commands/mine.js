const slotItems = ["🔴", "🟢", "🌕", "⚫️", "⚪️", "🔵", "🟤"];
const { MessageEmbed } = require("discord.js");
const cooldown = new Set();

const talkedRecently = new Set(); 

exports.execute = async (client, message, args) => {
  if(!client.config.miners.includes(message.author.id))return
  let coindb = client.db.fetch(`bitcoin_${message.author.id}`);
  let user = message.mentions.members.first() || message.author;
  let moneydb = client.db.fetch(`money_${user.id}`)
  var money = 1000
  let Wincoin = money
  var minerbox = Wincoin /= 1000;
  let win = false;
  let casino = client.db.fetch(`casino_${user.id}`);
  let minebox = client.db.fetch(`minebox_${user.id}`);
  let fullcoin = new MessageEmbed()
    .setColor("#ff0000")
    .setDescription(`⚠️ ${user} зөвхөн 300-аар **Mine** хийнэ үү `);

  let moneymore = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<a:x:737764891657633814> таны мөнгө хүрэхгүй байна`);

  let moneyhelp = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<a:x:737764891657633814> Mine хийх мөнгөө-өө тавьна уу`);

  let bugmoney = new MessageEmbed()
    .setColor("#000000")
    .setDescription(`<a:x:737764891657633814> Урвуу мөнгө оруулхыг боломжгүй!!`);

  if (args[0] > 1000) return message.channel.send(fullcoin);
  if (args[0] < 1000) return message.channel.send(fullcoin);
  if (!minerbox) return message.channel.send(moneyhelp);
  if (minerbox > moneydb) return message.channel.send(moneymore);
  if (0 > minerbox) return message.channel.send(bugmoney);

if (cooldown.has(message.author.id)) {
      message.delete();
     return message.channel.send(
      `${message.author} || **10секунт-ын cooldown ** `
    ); }
  else {     //esse else tem valor de AI
    cooldown.add(message.author.id); //aqui ele tem valor se nao
    setTimeout(() => {
    cooldown.delete(message.author.id);
  },10000)
  
  }

  let number = [];
  for (let i = 0; i < 3; i++) {
    number[i] = Math.floor(Math.random() * slotItems.length);
  }
if (number[0] == number[1] && number[1] == number[2]) {
    minerbox += 3;
    win = true;
  } else if (
    number[0] == number[1] ||
    number[0] == number[2] ||
    number[1] == number[2]
  ) {
    minerbox;
    win = true;
  }
  if (win) {
    let slotsEmbed1 = new MessageEmbed()
      .setTitle("Баяр хүргэе")
      .setDescription(
        `${slotItems[number[0]]} | ${slotItems[number[1]]} | ${
          slotItems[number[2]]
        }\n\n<@${
          user.id
        }> ${minerbox} Minebox 🎁 хожлоо  `
      )
      .setFooter("Remzx official ECONOMY server")
      .setColor("#00ff00");
    message.channel.send(slotsEmbed1);
    await client.db.add(`minebox_${message.author.id}`, minerbox);
  } else {
    let slotsEmbed = new MessageEmbed()
      .setTitle("Mine-олдсонгүй")
      .setDescription(
        `${slotItems[number[0]]} | ${slotItems[number[1]]} | ${
          slotItems[number[2]]
        }\n\n<@${user.id}> Mine олдоогүй тул 1000 төгрөг алдлаа`
      )
      .setFooter("Remzx official ECONOMY server")
      .setColor("#FF0000");
    message.channel.send(slotsEmbed);
    await client.db.subtract(`money_${message.author.id}`, money);
  }
};
exports.help = {
  name: "---------------Уурхайчин----",
  aliases: ["mine"],
  usage: `mine <money>`
};
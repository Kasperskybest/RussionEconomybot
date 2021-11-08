const slotItems = ["🍒", "🍓", "🍇", "🍋", "🍌", "🍊", "🍎","🎰","🍏","🍐","🥭","🫐"];
const { MessageEmbed } = require("discord.js");
const cooldown = new Set();

const talkedRecently = new Set(); 

exports.execute = async (client, message, args) => {
  const slot = 60000
  let coindb = client.db.fetch(`bitcoin_${message.author.id}`);
  let hps = client.db.fetch(`hp_${message.author.id}`)
  let user = message.author;
  var money = parseInt(args[0]);
  let energy = client.db.fetch(`energy_${user.id}`);
  let win = false;
  let casino = client.db.fetch(`casino_${user.id}`);
  
  let ecost = 1;
  let fullcoin = new MessageEmbed()
    .setColor("#ff0000")
    .setDescription(`⚠️ ${user} 20 coin-оос дээш бооцоо тавьхыг хориглоно`);

  let moneymore = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<a:x:737764891657633814> чиний coin хүрэхгүй байна`);

  let moneyhelp = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<a:x:737764891657633814> Бооцооны coin-оо тавьна уу`);

  let bugmoney = new MessageEmbed()
    .setColor("#000000")
    .setDescription(`<a:x:737764891657633814> Урвуу coin оруулхыг хориглоно!!`);
  let casinoE = new MessageEmbed()
    .setTitle("⚠️ Casino эрх авах ёстой")
    .setDescription(
      `${user} Casino пасс эрх авч байж тоглох боломжтой ~buy casino гэж бичээд авна уу!`
    )
    .setColor("#ff0000")
    .setTimestamp()
    .setFooter(message.guild.name);
  let cool = 10;
  let unhp = new MessageEmbed()
    .setColor("#ff0000")
    .setDescription(`${user} energy чинь дууссан байна ${energy} ⚡️ байна`);

  if (casino < 1) return message.channel.send(casinoE);
  if (hps === 0) return message.reply("чи үхсэн байна эмч дуудна уу!")
  
  if (energy < 1) return message.channel.send(unhp);
if (money > coindb) return message.channel.send(moneymore);
  
  if (args[0] > 100) return message.channel.send(fullcoin);
  if (!money) return message.channel.send(moneyhelp);
  
  if (0 > money) return message.channel.send(bugmoney);

if (cooldown.has(message.author.id)) {
      message.delete();
     return message.channel.send(
      `${message.author} || **10секунт-ын cooldown түр хүлээнэ үү** `
    ); }
  else {     //esse else tem valor de AI
    cooldown.add(message.author.id); //aqui ele tem valor se nao
    setTimeout(() => {
    cooldown.delete(message.author.id);
  },  10000)
  
  }
  
  let number = [];
  for (let i = 0; i < 3; i++) {
    number[i] = Math.floor(Math.random() * slotItems.length);
  }


  if (number[0] == number[1] && number[1] == number[2]) {
    money *= 9;
    win = true;
  } else if (
    number[0] == number[1] ||
    number[0] == number[2] ||
    number[1] == number[2]
  ) {
    money *= 2;
    win = true;
  }
  if (win) {
    
    let slotsEmbed1 = new MessageEmbed()
      .setTitle("**Баяр хүргэе**")
      .setDescription(`———————\n|${slotItems[number[0]]} | ${slotItems[number[1]]} | ${
          slotItems[number[2]]
        }|\n———————\n<@${
          user.id
        }> **${money} coin хожлоо** \n🪙 Өмнө байсан coin :${coindb} 🪙\n -${ecost}⚡️ `
      )
      .setFooter(message.guild.name)
      .setTimestamp()
      .setColor("#00ff00");
    message.channel.send(slotsEmbed1);
    await client.db.add(`bitcoin_${message.author.id}`, money);
    client.db.subtract(`energy_${message.author.id}`, ecost);
  } else {   
    let slotsEmbed = new MessageEmbed()
      .setTitle("**Дахиад нэг дараад үз**")
      .setDescription(
        `———————\n|${slotItems[number[0]]} | ${slotItems[number[1]]} | ${
          slotItems[number[2]]
        }|\n———————\n<@${
          user.id
        }> **${money} coin алдлаа** \n🪙 Өмнө байсан coin: ${coindb} 🪙 \n -${ecost}⚡️`
      )
      .setFooter(message.guild.name)
      .setTimestamp()
      .setColor("#FF0000");
    message.channel.send(slotsEmbed);
    await client.db.subtract(`bitcoin_${message.author.id}`, money);
    client.db.subtract(`energy_${message.author.id}`, ecost);
    
    }
  
  }

exports.help = {
  name: "---------------Мөрийтэй тоглоом----",
  aliases: ["slots"],
  usage: `slot <money>`,
  cooldown: 600
};
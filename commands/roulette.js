const { MessageEmbed } = require("discord.js");

const cooldown = new Set();

const talkedRecently = new Set(); 

exports.execute = async (client, message, args) => {
  let user = message.author;
let casino = client.db.fetch(`casino_${user.id}`)
  function isOdd(num) {
    if (num % 2 == 0) return false;
    else if (num % 2 == 1) return true;
  }
  let energy = client.db.fetch(`energy_${message.author.id}`)
let hps = client.db.fetch(`hp_${message.author.id}`)
  let colour = args[0];
  let money = parseInt(args[1]);
  let moneydb = client.db.fetch(`bitcoin_${message.author.id}`);

  let random = Math.floor(Math.random() * 37);
let fullcoin = new MessageEmbed()
.setColor("#ff0000")
.setDescription(`⚠️ ${user} 10 coin-оос дээш бооцоо тавьхыг хориглоно`)

  
  let moneyhelp = new MessageEmbed()
    .setTitle(`<@${user.id}>`)
    .setColor("#FFFFFF")
    .setDescription(
      `<:x:618736602901905418> өнгө болон бооцоогоо оруулна уу! | \n [GREEN, RED, BLACK] [coin]`
    );

  let moneymore = new MessageEmbed()
    .setTitle(`<:x:618736602901905418> Алдаа гарлаа`)
    .setColor("#FFFFFF")
    .setDescription(
      `<:x:618736602901905418> ${user}таний coin хүрэхгүй байна`
    );

  let colorbad = new MessageEmbed()
    .setTitle(`<@${user.id}>`)
    .setColor("#FFFFFF")
    .setDescription(
      `<:x:618736602901905418> өнгөө сонгоно уу!| \n\n Red [1.5x] Black [2x] Green [15x]`
    );
  
  if (casino < 1) return message.channel.send(errcasino)
  
  if (hps === 0) return message.reply("чи үхсэн байна эмч дуудна уу!")
  if(energy === null) return message.reply('Energy чинь дууссан байна')

  if(energy === 0) return message.reply('Energy чинь дууссан байна')
  if (!colour) return message.channel.send(colorbad);
colour = colour.toLowerCase();
  if (!money) return message.channel.send(moneyhelp);
  if(args[1] > 50) return message.reply('50-аас дээш coin боломжгүй')
  if (money > moneydb) return message.channel.send(moneymore);

  if (colour == "r" || colour.includes("red")) colour = 0;
  else if (colour == "b" || colour.includes("black")) colour = 1;
  else if (colour == "g" || colour.includes("green")) colour = 2;
  else return message.channel.send(colorbad);

if (cooldown.has(message.author.id)) {
      message.delete();
     return message.channel.send(
      `${message.author} || **5минут-ын cooldown ** `
    ); }
  else {     //esse else tem valor de AI
    cooldown.add(message.author.id); //aqui ele tem valor se nao
    setTimeout(() => {
    cooldown.delete(message.author.id);
  },300000)
  
  }
  
  if (random == 0 && colour == 2) {
    // Green
    money *= 15;
    await client.db.add(`bitcoin_${message.author.id}`, money);
    let moneyEmbed1 = new MessageEmbed()
      .setTitle(`<@${user.id}>`)
      .setColor("#00ff00")
      .setDescription(
        `🟢 буулаа баяр хүргэе ${user} \n${money} coin хожлоо -1⚡️\n\n ихэсгэж авсан : 15x`
      )
      .setImage('https://cdn.glitch.me/f69dbb09-65f0-4e98-8c63-df94697895a0%2F16d55d69-6ab4-4db1-a4d5-0026d091d1ae.image.gif?v=1636338885032');
    message.channel.send(moneyEmbed1);
    console.log(`${message.author.tag} Won ${money} on green`);
  } else if (isOdd(random) && colour == 0) {
    // Red
    money = parseInt(money * 1.5);
    await client.db.add(`bitcoin_${message.author.id}`, money);
    let moneyEmbed2 = new MessageEmbed()
      .setTitle(`<@${user.id}>`)
      .setColor("#ff0000")
      .setDescription(
        `🔴 буулаа баяр хүргэе ${user} \n ${money} coin хожлоо -1⚡️\n\n ихэсгэж авсан : 1.5x`
      )
      .setImage('https://cdn.glitch.me/f69dbb09-65f0-4e98-8c63-df94697895a0%2F16d55d69-6ab4-4db1-a4d5-0026d091d1ae.image.gif?v=1636338885032');
    message.channel.send(moneyEmbed2);
  } else if (!isOdd(random) && colour == 1) {
    // Black
    money = parseInt(money * 1.5);
    await client.db.add(`bitcoin_${message.author.id}`, money);
    client.db.subtract(`energy_${message.author.id}`,1)
    let moneyEmbed3 = new MessageEmbed()
      .setTitle(`<@${user.id}>`)
      .setColor("#000000")
      .setDescription(
        `⚫️ буулаа баяр хүргэе ${user} \n ${money} coin хожлоо -1⚡️ \n\n ихэсгэж авсан : 1.5x`
      )
      .setImage('https://cdn.glitch.me/f69dbb09-65f0-4e98-8c63-df94697895a0%2F16d55d69-6ab4-4db1-a4d5-0026d091d1ae.image.gif?v=1636338885032');
    message.channel.send(moneyEmbed3);
  } else {
    // Wrong
    await client.db.subtract(`bitcoin_${message.author.id}`, money);
    let moneyEmbed4 = new MessageEmbed()
      .setTitle(`<@${user.id}>`)
      .setColor("#ffff00")
      .setDescription(
        `<:x:618736602901905418>  ${money} coin алдлаа \n\nMultiplier: 0x -1⚡️`
      )
      .setImage('https://cdn.glitch.me/f69dbb09-65f0-4e98-8c63-df94697895a0%2F16d55d69-6ab4-4db1-a4d5-0026d091d1ae.image.gif?v=1636338885032');
    client.db.subtract(`energy_${message.author.id}`,1)
    message.channel.send(moneyEmbed4);
  }
};
exports.help = {
  name: "---------------Roulette----------",
  aliases: ["roulette"],
  usage: `roulette`
};
  
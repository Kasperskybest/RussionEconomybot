const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let user = message.author;

  let author = client.db.fetch(`money_${message.author.id}`);

  let foods = 6000;
  let waters = 3500;
  let rolexwatchs = 45000000;
  let vips = 500000;
  let casinos = 100000;
  let cars = 50000000;
  let phones = 1000000;
  let enrgyp = 3000;
  let coins = 3000
  let smoking = 500

let Embed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(
      `<:x:618736602901905418> Чи 500000 төгрөгөөр VIP member авах боломжтой `
    );

  if (args[0] == "vip") {
    if (author < vips) return message.channel.send(Embed);
    let vip = client.db.fetch(`vip_${message.author.id}`)
    let role = message.guild.roles.cache.find(r => r.id === "848657056037601320");
    
if(vip === true) return message.reply(`чи аль хэдийнээ авсан байна`)
    client.db.fetch(`vip_${user.id}`);
    client.db.set(`vip_${user.id}`, false);
    

    let Embed2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`✅ ${vips} төгрөгөөр амжилттай VIP авагдлаа`);

    client.db.subtract(`money_${user.id}`, vips);
    message.channel.send(Embed2);
    message.author.roles.add(role)
  } else if (args[0] == "casino") {
    let casino = client.db.fetch(`casino_${user.id}`);

    let casinoerr = new MessageEmbed()
      .setDescription(
        `${user} мөнгө хүрэхгүй байна !!! ${casinos} төгрөг-өөр **Casino Member** авах боломжтой`
      )
      .setColor("#000000");

    if (author < casinos) return message.channel.send(casinoerr);

    client.db.set(`casino_${user.id}`, true);
    client.db.fetch(`casino_${user.id}`);

    let casinom = new MessageEmbed()
      .setDescription(`${user} ✅ амжилттай **Casino Member** авлаа`)
      .setColor("#ffffff");

    client.db.subtract(`money_${user.id}`, casinos);
    message.channel.send(casinom);
  } else if (args[0] == "water") {
    let watersa = args[1] * 1;
    let res = (watersa *= waters);
    let mon = res;
    let Embed2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:x:618736602901905418> чи ${waters} төгрөгөөр ус авах боломжтой`
      );

    if (author < mon) return message.channel.send(Embed2);

    client.db.fetch(`us_${user.id}`);
    client.db.add(`us_${user.id}`, args[1]);

    let Embed3 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`✅ Ус амжилттай авагдлаа \nНийт үнэ : ${mon}`);

    client.db.subtract(`money_${user.id}`, mon);
    message.channel.send(Embed3);
  } else if (args[0] == "food") {
    let fooda = args[1] * 1;
    let res = args[1] * foods;
    let mon = res;
    let EmbeD2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:x:618736602901905418> мөнгө чинь хүрэхгүй байна \n Хоол: ${foods} төгрөг`
      );

    if (author < mon) return message.channel.send(EmbeD2);

    client.db.fetch(`food_${user.id}`);
    client.db.add(`food_${user.id}`, args[1]);

    let EmbeD3 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`✅ Хоол амжилттай авагдлаа \nНийт үнэ : ${mon}`);

    client.db.subtract(`money_${user.id}`, mon);
    message.channel.send(EmbeD3);
  } else if (args[0] == "car") {
    let Embed2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:x:618736602901905418> чи ${cars} төгрөгөөр машин авах боломжтой`
      );

    if (author < cars) return message.channel.send(Embed2);

    client.db.fetch(`car_${user.id}`);
    client.db.add(`car_${user.id}`, 1);

    let Embed3 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`✅ Чи шинэ машинтай боллоо`);

    client.db.subtract(`money_${user.id}`, cars);
    message.channel.send(Embed3);
  } else if (args[0] == "phone") {
    let Embed2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:x:618736602901905418> чи ${phones} төгрөгөөр утас авах боломжтой`
      )

    if (author < phones) return message.channel.send(Embed2);

    client.db.fetch(`phone_${user.id}`);
    client.db.add(`phone_${user.id}`, 1);

    let Embed3 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`✅ I phone X амжилттай авагдлаа`)
    .setImage('https://cdn.glitch.me/68e112c9-1e76-4cac-825c-7cc35c5aee4e%2FBFBE1053-83E2-4324-83C8-79BD3F0CA73E.webp?v=1635435515372')

    client.db.subtract(`money_${user.id}`, phones);
    message.channel.send(Embed3);
  } else if (args[0] == "rolexwatch") {
    let Embed5 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:x:618736602901905418> чи ${rolexwatchs} төгрөгөөр RolexWatch авах боломжтой`
      );

    if (author < rolexwatchs) return message.channel.send(Embed5);

    client.db.fetch(`rolexwatch_${user.id}`);
    client.db.add(`rolexwatch_${user.id}`, 1);

    let Embed4 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`✅ RolexWatch амжилттай авагдлаа`);
    client.db.subtract(`money_${user.id}`, rolexwatchs);
    message.channel.send(Embed4);
  } else if (args[0] == "enrgy") {
    let enrgy = args[1];
    let res = args[1] * enrgyp;
    let mon = res;
    let EmbeD33 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:x:618736602901905418> чи ${enrgyp} төгрөгөөр **energy drink** авах боломжтой`
      );

    if (author < mon) return message.channel.send(EmbeD33);

    let enrgydrink = client.db.fetch(`enrgy_${user.id}`);
    client.db.add(`enrgy_${user.id}`, enrgy);

    let EmbeD333 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `✅ **Energy drink** амжилттай авагдлаа \nНийт үнэ : ${mon}`
      );

    client.db.subtract(`money_${user.id}`, mon);
    message.channel.send(EmbeD333);
  } else if (args[0] === "coin") {
let coin = args[1] * 1
    let res = coin * coins
    let submon = res
if(!args[1])return message.reply('хэдэн coin авахаа оруулна уу')


    let embed = new MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`${user} мөнгө чинь хүрэхгүй байна`) 
    if (author < submon) return message.channel.send(embed)
  let embed2 = new MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`${user} ${coin} ширхэг coin авлаа`)
    .setImage('https://cdn.glitch.me/14a7524f-6b55-4d83-802e-2c67ea5abde0%2F0d5aba87-0559-4eac-a19b-27787d1d9621.image.jpeg?v=1636279169980')
    message.channel.send(embed2)
    client.db.add(`bitcoin_${user.id}`,coin)
    client.db.subtract(`money_${user.id}`,submon)
    
    
  }
  else if (args[0] === "smoke") {
let smoker = args[1] * 1
    let res = smoker * smoking
    let submon = res
if(!args[1])return message.reply('хэдэн тамхи авахаа оруулна уу')


    let embed = new MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`${user} мөнгө чинь хүрэхгүй байна`) 
    if (author < submon) return message.channel.send(embed)
  let embed2 = new MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`${user} ${smoker} ширхэг тамхи авлаа`)
    .setImage('https://cdn.glitch.me/14a7524f-6b55-4d83-802e-2c67ea5abde0%2Fc2819249-f9f5-4a85-9944-a31fcbbc2a6b.image.jpeg?v=1636276288719')
    message.channel.send(embed2)
    client.db.add(`smoke_${user.id}`,smoker)
    client.db.subtract(`money_${user.id}`,submon)
    
    
  } else {
    let embed3 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `✅ хоол хүнс болон бараанууд:\n 
VIP member: vip\n Үнэ: ${vips}\n\n
Casino member: casino\nҮнэ: ${casinos}\n\n
Тамхи: smoke\nҮнэ: ${smoking}\n\n
Bitcoin: coin\nҮнэ: ${coins}\n\n
Хоол: food\nҮнэ: ${foods}\n\n
Ус: water\nҮнэ: ${waters}\n\n
EnergyDrink: enrgy\nҮнэ:${enrgyp}\n\n
Машин: car\nҮнэ: ${cars}\n\n
Утас: phone\nҮнэ: ${phones}\n\n
Rolex цаг: RolexWatch\nҮнэ: ${rolexwatchs}`
      );
    message.channel.send(embed3);
    message.react(`✅`)
  }
};

exports.help = {
  name: "---------------Юм худалдаж авах----",
  aliases: ["buy"],
  usage: `buy <item>`
};
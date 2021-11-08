const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let user = message.author;
  let hp = client.db.fetch(`hp_${user.id}`);
  let energy = client.db.fetch(`energy_${user.id}`);

  if (args[0] == "food") {
    let cfood = args[1] *= 1
    let res = cfood * 5
    let php = res
    let res2 = hp + php
    let fulhp = res2
    
    if(hp === 0)return message.reply("чи үхсэн байна эмч дуудна уу!")
    let Embed2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`<:x:618736602901905418> чамд идэх хоол байхгүй байна`);
    let fullhp = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`${user} амь 100-аас дээш гарахгүй `);
    if (100 < fulhp) {
      return message.channel.send(fullhp);
    }
    let foods = await client.db.fetch(`food_${user.id}`);

    if (foods < cfood) return message.channel.send(Embed2);

    client.db.fetch(`food_${user.id}`);
    client.db.subtract(`food_${user.id}`, cfood);

    let Embed3 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`✅ хоол идлээ + ${php} ❤️`);

    client.db.add(`hp_${user.id}`, php);
    message.channel.send(Embed3);
  } else if (args[0] == "water") {
    let cus = args[1] * 1
    let res = cus * 3
    let php = res
    let fulhp = hp + php
    if(hp === 0)return message.reply("чи үхсэн байна эмч дуудна уу!")
    let Embed2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`<:x:618736602901905418> чамд уух ус байхгүй байна`);
    let fullhp = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`${user} амь 100-аас дээш болохгүй`);
    if (fulhp > 100) {
      return message.channel.send(fullhp);
    }
    let waters = await client.db.fetch(`us_${user.id}`);

    if (waters < cus) return message.channel.send(Embed2);

    client.db.fetch(`us_${user.id}`);
    client.db.subtract(`us_${user.id}`, cus);

    let Embed3 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`✅ Ус уулаа  +${php} ❤️`);
client.db.add(`hp_${user.id}`, php);
    message.channel.send(Embed3);
  }
  if (args[0] === "rolexwatch") {
    let Time = new Date();
if(hp === 0)return message.reply("чи үхсэн байна эмч дуудна уу!")
    let rolex = await client.db.fetch(`rolexwatch_${user.id}`);
    if (rolex < 1) return message.channel.send(UnRolex);
    let UnRolex = new MessageEmbed()
      .setColor("#000000")
      .setDescription(`${user} чамд Rolex Watch байхгүй байна`);

    let rolexEmbed = new MessageEmbed()
      .setTitle("⌚️ Rolex Watch 2021")
      .addField("Яг одоо цаг⤵", Time)
      .setColor("#000000");

    client.db.fetch(`rolexwatch_${user.id}`);
    message.channel.send(rolexEmbed);
  }
  if (args[0] === "mafia") {
    if (!client.config.mafias.includes(message.author.id)) return;
    let mafia = client.db.fetch(`mafiaset_${user.id}`);
    let err = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`⚠️ **${user}** чамд **Mafia Хослол** байхгүй байна`);
    if (mafia < 1) {
      return message.channel.send(err);
    }
    let embed = new MessageEmbed()
      .setTitle("**Mafia хослол **")
      .setDescription(` Mafia-ын бүлэглэлын хувцас ${user}`)
      .setTimestamp()
      .setFooter(message.guild.name)
      .setImage(
        "https://cdn.glitch.me/68e112c9-1e76-4cac-825c-7cc35c5aee4e%2F405485a6-71bd-4232-add9-deb3571d8450.image.jpeg?v=1635096649823"
      )
      .setColor("#ffffff");
    message.channel.send(embed);
  }
  if (args[0] === "swat") {
    if (!client.config.polices.includes(message.author.id)) return;
    let swat = client.db.fetch(`swatset_${user.id}`);
    let err = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`⚠️ **${user}** чамд **SWAT Хослол** байхгүй байна`);
    if (swat < 1) {
      return message.channel.send(err);
    }

    let embed = new MessageEmbed()
      .setTitle("**SWAT хослол **")
      .setDescription(` Цагдаа нарын хувцас ${user}`)
      .setTimestamp()
      .setFooter(message.guild.name)
      .setImage(
        "https://cdn.glitch.me/68e112c9-1e76-4cac-825c-7cc35c5aee4e%2F91a3a029-6b81-4ece-bf65-47472ce2f21c.image.jpeg?v=1635082258841"
      )
      .setColor("#ffffff");
    message.channel.send(embed);
  } else if (args[0] == "enrgy") {
    let cenrgy = args[1] *= 1
    let res = cenrgy * 3
    let penergy = res
    let res2 = penergy + energy
    let errenr = res2
    if(hp === 0)return message.reply("чи үхсэн байна эмч дуудна уу!")
    let Embed2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:x:618736602901905418>  уух **Enrgy** хүрэхгүй байна`
      );
    
    let fullhp = new MessageEmbed()
    .setColor("#ff0000")
    .setDescription(`${user} **Energy** 100-аас дээш гарах боломжгүй байна!`)
    if (100 < errenr) {
      return message.channel.send(fullhp);
    }
    let energys = await client.db.fetch(`enrgy_${user.id}`);

    if (energys < cenrgy) return message.channel.send(Embed2);

    client.db.fetch(`enrgy_${user.id}`);
    client.db.subtract(`enrgy_${user.id}`, cenrgy);

    let Embed3 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`✅ **Enrgy** уулаа + ${penergy}⚡️`);

    client.db.add(`energy_${user.id}`, penergy);
    message.channel.send(Embed3);
  } 
  if(args[0] === "smoke"){
    let smoke = client.db.fetch(`smoke_${message.author.id}`)
    if(smoke === null) return message.reply("чамд тамхи байхгүй байна")
if(smoke === 0) return message.reply("чамд тамхи байхгүй байна")
    
    let embed = new MessageEmbed()
    .setColor("#ffffff")
    .setDescription(`${message.author} 🚬 тамхи татлаа`)
    .setImage('https://cdn.glitch.me/14a7524f-6b55-4d83-802e-2c67ea5abde0%2Fe3ded203-f233-4bb9-8704-cc6c5f6abafb.image.gif?v=1636275680148')
    client.db.subtract(`smoke_${message.author.id}`,1)
    message.channel.send(embed)
  }
 if(!args[0]) message.reply(`ямар бараа ашиглахаа бичнэ үү!`)
};
exports.help = {
  name: "---------------Item ашиглах------",
  aliases: ["use"],
  usage: `use <item>`
};

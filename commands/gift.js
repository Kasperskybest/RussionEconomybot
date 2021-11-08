const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
  let user = message.mentions.members.first();
  let author = message.author;
  let coins = client.db.fetch(`bitcoin_${author.id}`);
  let sum = client.db.fetch(`bullet_${message.author.id}`)
let glock19 = client.db.fetch(`glock19_${message.author.id}`)
  if (args[0] === "coin") {
    let embed2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:x:618736602901905418>  хэдэн coin шилжүүлэх-ээ оруулна уу!`
      );
    let usererr = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`${author} хэн-рүү coin шилжүүлэгэ хийхээ сонгоно уу`);
    if (!user) return message.channel.send(usererr);

    if (!args[2]) {
      return message.channel.send(embed2).catch(err => console.log(err));
    }
    let embed3 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`<:x:618736602901905418> Урвуу coin оруулах боломжгүй`);

    if (message.content.includes("-")) {
      return message.channel.send(embed3);
    }
    let embed4 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`<:x:618736602901905418> coin хүрэхгүй байна`);

    if (coins < args[2]) {
      return message.channel.send(embed4);
    }
    let coinerr = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`coin-оо оруулна уу`);
    if (!coins) {
      return message.channel.send(coinerr);
    }
    let embed5 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`✅ амжилттай  ${args[2]} coin-ыг ${user}-д өглөө`);

    message.channel.send(embed5);
    client.db.add(`bitcoin_${user.id}`, args[2]);
    client.db.subtract(`bitcoin_${author.id}`, args[2]);
  }

  if (args[0] === "swat") {
    let swat = client.db.fetch(`swatset_${author.id}`);
    let err = new MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`${author} чамд **SWAT** хослол байхгүй байна`);
    if (swat < 1) {
      return message.channel.send(err);
    }
    let embed = new MessageEmbed()
      .setColor("#00ffff")
      .setDescription(`**${user}\n${author} чамруу  **SWAT** хослол явуллаа`)
      .setFooter(message.guild.name)
      .setTimestamp();
    message.channel.send(embed);
    client.db.add(`swatset_${user.id}`, 1);
    client.db.subtract(`swatset_${author.id}`, 1);
  }
  if(args[0] === "glock19") {
    if(glock19 === 0 ) return message.reply('чамд Glock 19 буу байхгүй байна')
    let embed = new MessageEmbed()
    .setColor("#000000")
    .setDescription(`${author}\n---------------\n${user}-т Glock 19 бууг өглөө`)
    .setImage('https://cdn.glitch.me/64dc5c28-0df5-48d4-99b2-bc8bc399bc63%2Fd272a291-2f1b-427a-88a0-05378e107882.image.jpeg?v=1636096952394')
    message.channel.send(embed)
    client.db.subtract(`glock19_${message.author.id}`,1)
    client.db.add(`glock19_${user.id}`,1)
  }
  if(args[0] === "bullet") {
    if(!args[2]) return message.reply('хэдэн сум авахаа бичнэ үү')
    if(args[2] < 0) return message.reply('боломжгүй тоо')
    if(sum < 0 ) return message.reply("сум чинь хүрэхгүй байна")
    let embed = new MessageEmbed()
    .setColor("#000000")
    .setDescription(`${user} чамд ${args[2]} ширхэг сум өглөө `)
    .setImage('https://cdn.glitch.me/7c948be9-fc1a-487e-b115-0ac53a3f12b8%2Fd93ce2e9-4dd2-4eaf-bf10-7de6ca096d4e.image.jpeg?v=1636133842806')
    client.db.add(`bullet_${user.id}`,args[2])
    client.db.subtract(`bullet_${message.author.id}`,args[2])
    message.channel.send(embed)
  }
};
exports.help = {
  name: "---------------Хослол өгөх----",
  aliases: ["gift"],
  usage: `gift <item>`
};

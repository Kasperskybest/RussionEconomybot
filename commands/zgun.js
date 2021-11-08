const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
  let user = message.author;

  let hp = client.db.fetch(`hp_${user.id}`);

  let usermoney = client.db.fetch(`money_${user.id}`);

  let pglock19 = 800000;
  let bullet = 10000
  
 let sum = client.db.fetch(`bullet_${user.id}`); 

  let glock19 = client.db.fetch(`glock19_${user.id}`);
  if(glock19 === null) glock19 = 0 

  let p320 = client.db.fetch(`p320_${user.id}`);
  if (args[0] === "buy") {
    if(args[1] === "bullet") {
    let bulletarg = bullet * args[2]
    let err = new MessageEmbed()
    .setColor("#ff0000")
    .setDescription(`⚠️ ${user} Мөнгө чинь хүрэхгүй байна`)
    if(usermoney < bulletarg) return message.channel.send(err)
    let embed = new MessageEmbed()
    .setColor("#000000")
    .setDescription(`${user} **${args[2]}** сум авлаа \nНийт үнэ: ${bulletarg}`)
      .setImage('https://cdn.glitch.me/7c948be9-fc1a-487e-b115-0ac53a3f12b8%2Fd93ce2e9-4dd2-4eaf-bf10-7de6ca096d4e.image.jpeg?v=1636133842806')
    message.channel.send(embed)
    client.db.add(`bullet_${user.id}`,args[2])
      client.db.subtract(`money_${user.id}`,bulletarg)
    }
    if (args[1] === "glock19") {
      
      let errmon = new MessageEmbed()
        .setColor("#ff0000")
        .setDescription( `${user} мөнгө чинь хүрэхгүй байна \n Glock 19: ${pglock19} үнэтэй`
        );

      if (usermoney < pglock19) return message.channel.send(errmon);

      let embed = new MessageEmbed()
        .setColor("#0000ff")
        .setTitle(`**Glock 19**`)
        .setImage(
          "https://cdn.glitch.me/3a415a3c-00d5-4c10-a296-a74ff291b7c6%2Fb8267a97-392b-4b07-bd2b-191672734f21.image.jpeg?v=1636009890558"
        )
        .setDescription(`${user} Glock 19 буу авагдлаа`);
      message.channel.send(embed);

      client.db.add(`glock19_${user.id}`, 1);
      client.db.subtract(`money_${user.id}`, pglock19);
    }
  }
  if (args[0] === "view") {
    if (args[1] === "glock19") {
      let embed = new MessageEmbed()
        .setColor("#0000ff")
        .setTitle(`**Glock 19**`)
        .setImage(
          "https://cdn.glitch.me/3a415a3c-00d5-4c10-a296-a74ff291b7c6%2Fb8267a97-392b-4b07-bd2b-191672734f21.image.jpeg?v=1636009890558"
        )
        .setDescription(
          `${user} Glock 19-ыг танд сонирхуулж байна \n Үнэ:${pglock19}`
        );
      message.channel.send(embed);
    }
  }
  if(args[0] === "inv") {
    let inv = new MessageEmbed()
    .setColor("#000000")
    .setDescription(`Бууны агуулаах\n
${user}\n\nGlock19: ${glock19} ширхэг\n\nСум: ${sum} ширхэг`)
    message.channel.send(inv)
  }
  if(args[0] === "ready") {
   
    let embed = new MessageEmbed()
    .setColor("#ffffff")
    .setImage('https://cdn.glitch.me/7c948be9-fc1a-487e-b115-0ac53a3f12b8%2F0676931b-f78f-4404-a43b-fc78ee6fce4a.image.gif?v=1636187530709')
    message.channel.send(embed)
  }
};

exports.help = {
  name: "--------------Буу------",
  aliases: ["gun"],
  usage: "gun"
};
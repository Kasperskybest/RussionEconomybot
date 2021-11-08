const {MessageEmbed} = require("discord.js");

exports.execute = (client, message, args) => {
  let user = message.mentions.members.first();
  let author = message.author;
  let hp = client.db.fetch(`hp_${user.id}`);
  let authorhp = client.db.fetch(`hp_${author.id}`)
  let energy = client.db.fetch(`energy_${user.id}`);
  if (args[0] === "hug") {
    if(authorhp === 0)return message.reply("чи үхсэн байна эмч дуудна уу!")
    
    let hpfull = new MessageEmbed()
      .setColor("#00ff00")
      .setDescription(`${user} \n ${author} чамайг тэвэрлээ`)
      .setImage(
        "https://cdn.glitch.me/68e112c9-1e76-4cac-825c-7cc35c5aee4e%2F19753629-ee2a-4e46-868f-7a06bc77d4b5.image.gif?v=1635108984221"
      );
    if (hp > 100) {
      message.channel.send(hpfull);
    }
    let embed = new MessageEmbed()
      .setColor("#00ff00")
      .setDescription(`${user} \n=========================\n${author} чамайг тэвэрлээ `)
      .setImage(
        "https://cdn.glitch.me/68e112c9-1e76-4cac-825c-7cc35c5aee4e%2F19753629-ee2a-4e46-868f-7a06bc77d4b5.image.gif?v=1635108984221"
      );
    message.channel.send(embed);
   
  }
  if (args[0] === "slap") {
    
    if(authorhp === 0)return message.reply("чи үхсэн байна эмч дуудна уу!")
    let hpfull = new MessageEmbed()
      .setColor("#00ff00")
      .setDescription(`${author} наад хүн чинь үхлээ боль `)
      .setImage(
        "https://cdn.glitch.me/68e112c9-1e76-4cac-825c-7cc35c5aee4e%2F320096f6-6f74-4083-9ea8-ba23a0a013ff.image.gif?v=1635152975991"
      );
    if (hp === 0) {
      message.channel.send(hpfull);
    }
    let embed = new MessageEmbed()
      .setColor("#00ff00")
      .setDescription(`${user} - 1 ❤️\n ${author} чамайг алгадлаа `)
      .setImage(
        "https://cdn.glitch.me/68e112c9-1e76-4cac-825c-7cc35c5aee4e%2F629cfea4-d552-4082-a26c-c7078561545c.image.gif?v=1635152688557"
      );
    if (hp > 0) {
      message.channel.send(embed);
      client.db.subtract(`hp_${user.id}`, 1);
    }
  }
  if (args[0] === "punch") {
   
    if(authorhp === 0)return message.reply("чи үхсэн байна эмч дуудна уу!")
    let hpfull = new MessageEmbed()
    .setColor("#00ff00")
      .setDescription(`${author} наад хүн чинь үхлээ боль `)
      .setImage(
        "https://cdn.glitch.me/68e112c9-1e76-4cac-825c-7cc35c5aee4e%2F320096f6-6f74-4083-9ea8-ba23a0a013ff.image.gif?v=1635152975991"
      );
    if (hp === 0) {
      message.channel.send(hpfull);
    }
    let embed = new MessageEmbed()
      .setColor("#00ff00")
      .setDescription(`${user} - 1 ❤️\n ${author} чамайг цохилоо `)
      .setImage(
        "https://cdn.glitch.me/68e112c9-1e76-4cac-825c-7cc35c5aee4e%2F8045ba0e-6824-478e-abc6-618c977e986d.image.gif?v=1635221140321"
      );
    if (hp > 0) {
      message.channel.send(embed);
      client.db.subtract(`hp_${user.id}`, 1);
    }
  }
  if(args[0] === "handup") {
    
    if(authorhp === 0)return message.reply("чи үхсэн байна эмч дуудна уу!")
    let embed = new MessageEmbed()
    .setColor("#000000")
    .setDescription(`${author} гараа өрөглөө`)
    .setImage('https://cdn.glitch.me/64dc5c28-0df5-48d4-99b2-bc8bc399bc63%2F4467ec6e-70a5-46bf-a340-dd99a31b56ae.image.gif?v=1636086029076')
    message.channel.send(embed)
  }
};
exports.help = {
  name: "---------------Үйл хөдлөл хийх----",
  aliases: ["do"],
  usage: `do <member>`
};
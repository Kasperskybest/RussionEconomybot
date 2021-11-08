const { MessageEmbed } = require("discord.js")

const cooldown = new Set();

const talkedRecently = new Set(); 


exports.execute = (client, message, args) => {
  
 if(client.config.doctors.includes(message.author.id))return
  
let user = message.mentions.members.first() || message.author
let hp = client.db.fetch(`hp_${user.id}`)

 let heal = 1000
let hpc = args[1] * 1
 let res = hpc + hp
  
let beg = res

                 
let hpp = args[1] * heal
  
let err = new MessageEmbed()
 .setColor("#ff0000")
 .setDescription("Цус 100-аас дээш гарч болохрүй")
  
if(100 < beg) return message.channel.send(err)

if (cooldown.has(message.author.id)) {
      message.delete();
     return message.channel.send(
      `${message.author} || **10минут-ын cooldown ** `
    ); }
  else {     //esse else tem valor de AI
    cooldown.add(message.author.id); //aqui ele tem valor se nao
    setTimeout(() => {
    cooldown.delete(message.author.id);
  },60000 * 10)
  
  }

  let embed = new MessageEmbed()
 .setColor("#00ff00")
 .setDescription(`${user} чиний цус +${hpc} ❤️ нэмэгдлээ Үнэ:${hpp} болсон`)
  
client.db.add(`hp_${user.id}`,hpc)

  
message.channel.send(embed)

}

exports.help = {
  name: "--------------Эмч----",
  aliases: ["heal"],
  usage: `heal <member>`
};
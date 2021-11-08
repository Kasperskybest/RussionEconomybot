const { MessageEmbed } = require("discord.js")

const cooldown = new Set();

const talkedRecently = new Set(); 


exports.execute = (client, message, args) => {
  let user = message.mentions.members.first()
  let author = message.author
  let bullet = client.db.fetch(`bullet_${message.author.id}`)
  let glock19 = client.db.fetch(`glock19_${message.author.id}`)
  let hp = client.db.fetch(`hp_${user.id}`)
  let hpa = client.db.fetch(`hp_${message.author.id}`)

  if(args[1] === "glock19") {
   let hpcost = 10
    
    if(glock19 === 0) return message.reply("чамд Glock 19 буу байхгүй байна")
    
    if(hpa === 0)return message.reply("чи үхсэн байна эмч дуудна уу!")
    if(bullet < 0) return message.reply("сум чинь дууссан байна")
    if(hp < hpcost) return message.reply(`цус 0-аас доош явахгүй`)

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
    
    let embed = new MessageEmbed()
    .setColor("#ffffff")
    .setDescription(`${user} -${hpcost}❤️\n-------------------------\n ${author} чамайг буудлаа`)
    .setImage('https://cdn.glitch.me/64dc5c28-0df5-48d4-99b2-bc8bc399bc63%2F09c240b4-3e2b-4ea7-9de7-546d576f0ac8.image.gif?v=1636081157768')
    .setTimestamp()
    client.db.subtract(`bullet_${message.author.id}`,1)
      client.db.subtract(`hp_${user.id}`,hpcost)
    message.channel.send(embed)
  }
}
exports.help = {
  name: "--------------Буудах------",
  aliases: ["shoot"],
  usage: "shoot"
};
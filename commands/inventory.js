const { MessageEmbed } = require("discord.js")

exports.execute = async (client, message, args ) => {

  let user = message.mentions.users.first() || message.author;
  
  let vip = await client.db.fetch(`vip_${user.id}`)
    if(vip === null) vip = 'байхгүй'
    if(vip === true) vip = '⚜VIP Member⚜'

  let casino = await client.db.fetch(`casino_${user.id}`)
    if(vip === null) vip = 'байхгүй'
    if(vip === true) vip = '🎰Casino🎰'
  
  let enrgy = client.db.fetch(`enrgy_${user.id}`)
  if (enrgy === null) enrgy = 0
  
 let hool = await client.db.fetch(`food_${user.id}`)
if(hool === null) hool = 0
  
  let water = await client.db.fetch(`us_${user.id}`)
  if(water === null) water = 0

  let newcar = await client.db.fetch(`car_${user.id}`)
  if(newcar === null) newcar = 0

  let phone = await client.db.fetch(`phone_${user.id}`)
  if(phone === null) phone = 0

  let rolexwatch = await client.db.fetch(`rolexwatch_${user.id}`)
  if(rolexwatch === null) rolexwatch = 0

  let smoke = client.db.fetch(`smoke_${message.author.id}`)
  
  let moneyEmbed = new MessageEmbed()
  .setTitle(`**${user}-ын Бараа**`)
  .setColor("#FFFFFF")
  .setDescription(`\n\n**Бараанууд**\n\nУс: ${water} ширхэг\n
Хоол: ${hool} ширхэг\n
Energy Drink: ${enrgy} ширхэг \n
Тамхи: ${smoke} ширхэг \n
Машин: ${newcar} ширхэг\n
Утас: ${phone} ширхэг\n
Цаг: ${rolexwatch} ширхэг`);
  message.channel.send(moneyEmbed)
};
exports.help = {
  name: "---------------Цүнх--------",
  aliases: ["inv"],
  usage: "inv"
};
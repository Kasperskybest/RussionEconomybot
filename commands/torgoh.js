const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let authorhp = client.db.fetch(`hp_${message.author.id}`)
  if (!client.config.polices.includes(message.author.id)) return;
  let user = message.mentions.members.first();
  let targetuser = await client.db.fetch(`money_${user.id}`); // fetch mentioned users balance
  let author = await client.db.fetch(`money_${message.author.id}`); // fetch authors balance
let userBalance = client.eco.fetchMoney(user.id);
  if (!user) {
    return message.channel.send(":x: торгох хүнээ сонгоно уу!");
  }


  if(authorhp === 0)return message.reply("чи үхсэн байна эмч дуудна уу!")
  
  if (author < 0) {
    // if the authors balance is less than 250, return this.
    return message.channel.send(":x: You need atleast 250$ to rob somebody.");
  }

  

  let random = Math.floor(Math.random() * 100000) + 70000; // random number 200-1, you can change 200 to whatever you'd like

  let embed = new MessageEmbed()
    .setDescription(
      `${user} танийг  ${message.author} цагдаа ${random} төгрөг-өөр торголоо ! таньд одоо байгаа мөнгө ${author}`
    )
    .setColor("GREEN")
    .setTimestamp();
  message.channel.send(embed);

  client.db.subtract(`money_${user.id}`, random);
  client.db.add(`money_${message.author.id}`, random);
};

exports.help = {
  name: "---------------Торгууль өгөх----------",
  aliases: ["torgoh"],
  usage: `torguuli <member>`
};
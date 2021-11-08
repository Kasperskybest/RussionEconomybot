const { MessageEmbed } = require("discord.js");

const cooldown = new Set();

const talkedRecently = new Set(); 


exports.execute = async (client, message, args) => {
  if (!client.config.mafias.includes(message.author.id)) return;
  
  let user = message.mentions.members.first();
  let targetuser = await client.db.fetch(`money_${user.id}`); // fetch mentioned users balance
  let author = await client.db.fetch(`money_${message.author.id}`);  
  let userBalance = client.eco.fetchMoney(user.id);
  
  let timeout = 600000;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = client.cooldowns(timeout - (Date.now() - author));

    let timeEmbed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:Cross:618736602901905418> You have already robbed someone\n\nTry again in ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  }
  
  if (!user) {
    return message.channel.send(":x: дээрэмдэх хүнээ сонгоно уу!");
  }
  if (author < 250) {
    // if the authors balance is less than 250, return this.
    return message.channel.send(":x: You need atleast 250$ to rob somebody.");
  }

  if (targetuser < 5000) {
    // if mentioned user has 0 or less, it will return this.
    return message.channel.send(
      `:x: ${user.user.username} хэтэрхий бага мөнгөтэй болсон байна`
    );
  }

if (cooldown.has(message.author.id)) {
      message.delete();
     return message.channel.send(
      `${message.author} || **20минут-ын cooldown ** `
    ); }
  else {     //esse else tem valor de AI
    cooldown.add(message.author.id); //aqui ele tem valor se nao
    setTimeout(() => {
    cooldown.delete(message.author.id);
  },1200000)
  
  }
  
  let random = Math.floor(Math.random() * 10000) + 1; // random number 200-1, you can change 200 to whatever you'd like

  let embed = new MessageEmbed()
    .setDescription(
      `${user} хөөе  ${message.author} чамайг ${random} төгрөг-өөр дээрэмдлээ!`
    )
    .setColor("GREEN")
    .setTimestamp();
  message.channel.send(embed);

  client.db.subtract(`money_${user.id}`, random);
  client.db.add(`money_${message.author.id}`, random);
};

exports.help = {
  name: "---------------Дээрэм хийх----------",
  aliases: ["rob"],
  usage: `rob <member>`
};

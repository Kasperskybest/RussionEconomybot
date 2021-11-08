module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 10000) + 4000;
    let work = client.eco.work(client.ecoAddUser, amount);
    if (work.onCooldown) return message.reply(`Чи ядарсан байна дараа дахиж ажилаа хийгээрэй ${work.time.minutes} минут & ${work.time.seconds} секундын дараа.`);
    else return message.reply(`Таний ажилын хөлсийг **${work.workedAs}** өгч байна **${work.amount}** 💸. Нийт мөнгө **${work.after}** 💸.`);
};

module.exports.help = {
    name: "---------------Ажилын хөлсөө авах------",
    aliases: ["work"],
    usage: "work"
}
exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 100000) + 70000;
    let addMoney = client.eco.weekly(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`Аль хэдийнээ авчихсан байна дараа дахиж оруулна уу! ${addMoney.time.days} хоног, ${addMoney.time.hours} цаг, ${addMoney.time.minutes} минут & ${addMoney.time.seconds} секунт-ын дараа авна уу.`);
    else return message.reply(`Таний мөнгө авагдлаа.Нийт: **${addMoney.amount}** 💸 энэ 7 хоногын урамшуулал амжилттай **${addMoney.after}** 💸. манай Remzx official Server-ийг дэмжиж ашиглаж байгаа таньд баярлла`);
};

exports.help = {
    name: "---------------7 хоногын орлого----------",
    aliases: ["weekly", "weakly"],
    usage: "weekly"
}
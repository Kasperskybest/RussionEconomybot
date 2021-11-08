const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setAuthor("Коммандууд")
        .setTitle("Мэдэхгүй зүйл гарвал #ЭНД ДАРЧ холбогдоно уу!")
        .setURL("https://www.facebook.com/profile.php?id=100038870322966")
        .setDescription(`Нийт комманд: ${client.commands.size}`)
        .setColor("BLURPLE")
        .setTimestamp()
      .setImage(message.author.displayAvatarURL)
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
    client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `Aliases: ${cmd.help.aliases.join(", ") || "None"}\nUsage: \`${client.prefix}${cmd.help.usage}\``, true);
    });
    return message.channel.send(embed);
}

exports.help = {
    name: "----------------Тусламж-------",
    aliases: ["h","help"],
    usage: `help`
}

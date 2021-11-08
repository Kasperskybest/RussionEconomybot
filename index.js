const Discord = require("discord.js");
 const client = new Discord.Client({ disableMentions: 'everyone' });
const Eco = require("quick.eco");
client.eco = new Eco.Manager(); // quick.eco
client.db = Eco.db; // quick.db
client.config = require("./botConfig");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.cooldown = new Discord.Collection();
client.shop = {
  food:{
    cost:5000
  },
  water:{
    cost:3000
  }
};

const fs = require("fs");

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        const event = require(`./events/${f}`);
        let eventName = f.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        let command = require(`./commands/${f}`);
        client.commands.set(command.help.name, command);
        command.help.aliases.forEach(alias => {
            client.aliases.set(alias, command.help.name);
        });
    });
});

fs.readdir("./mod/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        let command = require(`./mod/${f}`);
        client.commands.set(command.help.name, command);
        command.help.aliases.forEach(alias => {
            client.aliases.set(alias, command.help.name);
        });
    });
});



client.on("message", message => {
  if (message.content === "hi") {
    
    let a = ["hi👋", "bye🙄"];
    let b = [];
    for (let i = 0; i < 1; i++) {
      b[i] = Math.floor(Math.random() * a.length);
    }
    message.reply(a[b[0]]);
  }
  if (message.content === "yu bn") {
    let user = message.author;
    let a = ["юмгүй ээ","давгүй ээ"];
    let b = [];
    for (let i = 0; i < 1; i++) {
      b[i] = Math.floor(Math.random() * a.length);
    }
    message.reply(a[b[0]]);
  }
});

client.login(client.config.token);
require('./server')();
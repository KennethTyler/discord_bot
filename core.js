const Discord = require("discord.js");
const client = new Discord.Client();

const prefix  = "!";
const commands = require("./scripts/commandReader")(prefix);

console.log(commands);

client.on("ready", () => {
    console.log(`Logando com o bot ${client.user.tag}`);
});

client.on("message", (msg) => {
    if(!msg.author.bot) {
        console.log(`${msg.author.username}: ${msg.content}`)
        const args = msg.content.split("  ");
        if(commands[args[0]])  commands[args[0]](client,msg );

        //if(msg.content == "Olá") msg.reply("Olá")
        if(msg.content == "Pablinho?") msg.reply("TAZ em casa?")
    }
});



client.login("ODI3MDIzNDAxMzc3NTk1Mzkz.YGU_kA.6Xb5mE7uA4dp97gvPICe8-wyMUM");
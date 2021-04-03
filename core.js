const Discord = require("discord.js");
const client = new Discord.Client();
const commands = require("./commands")

const prefix  = "!";
//const commands = require("./scripts/commandReader")(prefix);
//const search = require("./commands/search")

//console.log(commands);

client.on("ready", () => {
    console.log(`Logando com o bot ${client.user.tag}`);
});

client.on("message", (msg) => {
    if(!msg.author.bot) {
        if (!msg.content.startsWith(prefix)) return;
        console.log(`${msg.author.username}: ${msg.content}`);
        //const args = msg.content.split("  ");
        //if(commands[args[0]])  commands[args[0]](client,msg);
        const commandBody = msg.content.slice(prefix.length);
        const args = commandBody.split(' ');
        const command = args.shift().toLowerCase();
        commands.map(c=>{
            if (c.name==command) c.function(client,msg,args.join(" "));
        })
        //if (command == "search") search(client,msg,args.join(" "));
        //if(msg.content == "Olá") msg.reply("Olá");
        
    }
});



client.login("ODI3MDIzNDAxMzc3NTk1Mzkz.YGU_kA.oYn2_g49EQ-k_55a34Mvk7LJMOE");
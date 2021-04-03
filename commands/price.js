const fetch = require("node-fetch");

module.exports = (client,msg) => {

    
fetch("https://www.futwiz.com/en/searches/player21/neymar") 
  .then(response => {
    return response.json();
  })
  .then(response => {
    console.log(response);
    msg.reply(`Achamos!!!! ${response.length} resultados`)
    response.map(player =>{
        msg.reply(`${player.cardname} ${player.rating} ${player.pc}`)
    })
  });
    
}
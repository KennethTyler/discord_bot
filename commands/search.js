const fetch = require("node-fetch");

module.exports = (client,msg,content) => {

    
fetch(`https://www.futwiz.com/en/searches/player21/${content}`) 
  .then(response => {
    return response.json();
  })
  .then(response => {
    console.log(msg.content);
    msg.channel.send(`Achamos!!!! ${response.length} resultados`)
    response.map(player =>{
        msg.channel.send(`${player.cardname} ${player.rating} ${player.lineid}`)
    })
  });
    
}
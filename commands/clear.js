module.exports = async (client,msg) => {
    const channel = msg.channel;
    const FetchMsg  = await channel.messages.fetch();
    await channel.bulkDelete(FetchMessage);
    msg.reply("Chat Limpo!!!");

}



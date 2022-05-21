module.exports = (bot) => {
    bot.interactionCommand({
     name: "ping",
    prototype: "slash",
     code: `
     $interactionReply[Pong! $ping ms!]`
    }) 
    }
    
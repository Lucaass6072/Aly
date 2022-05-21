//╭───────────────── ✦ 🌐 Dependencias

const {Bot, LoadCommands} = require('aoi.js');

const fs = require('fs');
//╭───────────────── ✦ 🤖 Bot Config

const bot = new Bot({
	token: 'OTcwODgyMDYyODY3MzkwNDY0.Gc9-Cy.2PWMfjbnBKRqdhBEPBErPB5tVmxOZPdifhVdr0', 
	prefix: '$getServerVar[prefixo]', 
	intents: 'all', 
	autoUpdates: true,
 database: {
            type: "default",
            path: "./db/",
            tables: ["Aly"],
            promisify: false
        },
        respondOnEdit: {
            commands: true
}
    })





//╭───────────────── ✦ 😎 Comandos On
bot.onReactionAdd()
bot.onReactionRemove()
bot.onLeave()
bot.onJoin()
bot.onGuildJoin()
bot.onGuildLeave()
bot.onBanAdd()
bot.onTypingStart()
bot.onRateLimit()
bot.onChannelDelete()
bot.onChannelUpdate()
bot.onChannelCreate()
bot.onVoiceStateUpdate() 
bot.onRoleUpdate()
bot.onMemberUpdate()
bot.onRoleDelete()
bot.onRoleCreate()
bot.onBanRemove()
bot.onMessage()
bot.onMessageUpdate()
bot.onPresenceUpdate()
bot.onUserUpdate()
bot.onMessageDelete()
bot.onInteractionCreate()
bot.onGuildUpdate()
bot.onEmojiCreate()
bot.onEmojiUpdate()
bot.onEmojiDelete()
bot.onReactionRemoveAll()
bot.onReactionRemoveEmoji()
bot.onMessageDeleteBulk()
bot.onWebhookUpdate()
bot.onChannelPinsUpdate()
bot.onVariableCreate()
bot.onVariableUpdate()
bot.onVariableDelete()
bot.onApplicationCmdCreate()
bot.onApplicationCmdUpdate()
bot.onApplicationCmdDelete()
bot.onStickerCreate()
bot.onStickerUpdate()
bot.onStickerDelete()
bot.onThreadCreate()
bot.onThreadUpdate()
bot.onThreadDelete()
bot.onThreadListSync()


//╭──────────────── ✦ 🔨 Pastas-Config

require('./handler/variables')(bot)
//equire('./handler/status')(bot)

//╭───────────────── ✦ 👊 ComdsConfig

const loader = new LoadCommands(bot) 

loader.load(bot.cmd,"./comandos/"); 

loader.setColors(loader.themes.default)  

//╭───────────────── ✦ 🐢 Eventos 

const files = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
files.forEach( x => {
require(`./events/${x}`)(bot)
});

//╭───────────────── ✦ 🌐 Hospedagem


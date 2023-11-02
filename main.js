const { Client, IntentsBitField, Collection } = require("discord.js"); 
const intents = new IntentsBitField(3276799);
const bot = new Client({ intents });
const loadCommands = require("./src/Loaders/loadCommands");
const loadEvents = require("./src/Loaders/loadEvents");
require(`./src/Fonctions/anti-crash.js`)();
require('dotenv').config();

bot.commands = new Collection()

bot.login(process.env.TOKEN)
loadCommands(bot)
loadEvents(bot)
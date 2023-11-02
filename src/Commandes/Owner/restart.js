const Discord = require("discord.js");

module.exports = {

    name: 'restart',
    description: 'Permet de relancer le bot',
    permission: "Aucune",
    ownerOnly: true,
    dm: false,
    category: '.Owner',
    options: [],
    
    async run(bot, interaction) {
        await interaction.reply({ content: 'Le bot a été relancé', ephemeral: true });
        return process.exit();
    },
};
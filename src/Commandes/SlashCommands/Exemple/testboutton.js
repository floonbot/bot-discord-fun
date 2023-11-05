const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {

    name: "testboutton",
    description: "Permet de répondre pong",
    permission: "Aucune",
    ownerOnly: true,
    dm: false,
    category: ".Exemple",
    options: [],

    run(bot, interaction, args) {

        const pingButton = new ButtonBuilder()
            .setCustomId('ping_button')
            .setLabel('Cliquez pour Pong!')
            .setStyle(ButtonStyle.Primary);

        const actionRow = new ActionRowBuilder().addComponents(pingButton);

        interaction.reply({
            content: 'Cliquez sur le bouton pour Pong!',
            components: [actionRow],
        });
    }
};
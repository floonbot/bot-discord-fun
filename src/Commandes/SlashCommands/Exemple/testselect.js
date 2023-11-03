const { StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {

    name: "testselect",
    description: "Exemple pour le select-menu",
    permission: "Aucune",
    ownerOnly: true,
    dm: false,
    category: ".Exemple",
    options: [],

    async run(bot, interaction, args) {

        const select = new StringSelectMenuBuilder()
            .setCustomId('starter')
            .setPlaceholder('Faites un choix...')
            .addOptions(
                new StringSelectMenuOptionBuilder()
                    .setLabel('Option 1')
                    .setValue('option1'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Option 2')
                    .setValue('option2'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Option 3')
                    .setValue('option3'),
            );

        const row = new ActionRowBuilder()
            .addComponents(select);

        await interaction.reply({
            content: 'Choisissez une option :',
            components: [row],
        });
    },
};
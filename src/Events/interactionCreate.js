const { InteractionType } = require("discord.js");
const ownerId = process.env.ownerId
const buttonHandler = require('../Handler/buttonHandler');
const autocompleteHandler = require('../Handler/autocompleteHandler');
const selectMenuHandler = require('../Handler/selectMenuHandler');

module.exports = async (bot, interaction) => {

  if (interaction.isButton()) {
        buttonHandler.handleButtonInteraction(bot, interaction);
    }

    
    if (interaction.isStringSelectMenu()) {
      selectMenuHandler.handleSelectMenuInteraction(bot, interaction);
    }

    if (interaction.type === InteractionType.ApplicationCommandAutocomplete) {
      autocompleteHandler.handleAutocompleteInteraction(bot, interaction);
  }

    if (interaction.type === InteractionType.ApplicationCommand) {
      const command = interaction.client.commands.get(interaction.commandName);
      if (command.ownerOnly && interaction.user.id != ownerId) return await interaction.reply('Seul le développeur du bot peut utiliser cette commande !');
      command?.run?.(bot, interaction, interaction.options);
    } 
};

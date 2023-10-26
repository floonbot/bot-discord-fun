const Discord = require("discord.js");

module.exports = async (bot, interaction) => {
  if (interaction.type === Discord.InteractionType.ApplicationCommandAutocomplete) {
    const autocompleteOptions = {
      calculatrice: ["+", "-", "*", "/", "%"],
      traduction: {
        langue: ['fr', 'en', 'ja'],
      },
      'pierre-feuille-ciseaux': ["pierre", "papier", "ciseaux"],
    };

    const commandName = interaction.commandName;
    const entry = interaction.options.getFocused();
    const choices = autocompleteOptions[commandName];
    
    if (choices) {
      const filteredChoices = choices.filter(c => c.includes(entry));
      const options = filteredChoices.map(c => ({ name: c, value: c }));
      await interaction.respond(options);
    }
  }

  if (interaction.type === Discord.InteractionType.ApplicationCommand) {
    const command = interaction.client.commands.get(interaction.commandName);
    command?.run?.(bot, interaction, interaction.options);
  }
};

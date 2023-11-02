module.exports = {
    handleAutocompleteInteraction: async (bot, interaction) => {
      const commandNames = ["calculatrice", "pierre-feuille-ciseaux", "traduction", "help"];
  
      const commandName = interaction.commandName;
      if (!commandNames.includes(commandName)) {
        return;
      }
      const entry = interaction.options.getFocused();
  
      const autocompleteOptions = {
        calculatrice: ["+", "-", "*", "/", "%"],
        traduction: {
          langue: ['fr', 'en', 'ja'],
        },
        'pierre-feuille-ciseaux': ["pierre", "papier", "ciseaux"],
        help: bot.commands.map(cmd => cmd.name),
      };
  
      if (commandName === "traduction") {
        const langues = autocompleteOptions["traduction"].langue;
        const filteredOptions = langues.filter(langue => langue.startsWith(entry));
        const options = filteredOptions.map(langue => ({
          name: langue,
          value: langue,
        }));
  
        await interaction.respond(options);
      } else if (Array.isArray(autocompleteOptions[commandName])) {
        const filteredOptions = autocompleteOptions[commandName].filter(option => {
          if (typeof option === "string") {
            return option.startsWith(entry);
          }
          return false;
        });
  
        const options = filteredOptions.map(option => ({
          name: option,
          value: option,
        }));
  
        await interaction.respond(options);
      } else if (commandName === "help") {
        const choices = autocompleteOptions[commandName].filter(choice => {
          if (typeof choice === "string") {
            return choice.startsWith(entry);
          }
          return false;
        });
  
        await interaction.respond(
          choices.map(choice => ({ name: choice, value: choice }))
        );
      }
    },
  };
  
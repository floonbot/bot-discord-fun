module.exports = {
    handleAutocompleteInteraction: async (bot, interaction) => {
        const commandNames = ["calculatrice", "pierre-feuille-ciseaux", "traduction"];

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
          };

        if (commandName === "traduction") {
            const langues = autocompleteOptions["traduction"].langue;
            const filteredOptions = langues.filter(langue => langue.includes(entry));
            const options = filteredOptions.map(langue => ({
                name: langue,
                value: langue,
            }));

            await interaction.respond(options);
        } else if (Array.isArray(autocompleteOptions[commandName])) {
            const filteredOptions = autocompleteOptions[commandName].filter(option => option.includes(entry));
            const options = filteredOptions.map(option => ({
                name: option,
                value: option,
            }));

            await interaction.respond(options);
        }
    }
};
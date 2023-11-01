module.exports = {
    handleSelectMenuInteraction: async (bot, interaction) => {
        const customId = interaction.customId;

        if (customId === 'starter') {
            const selectedOption = interaction.values[0];
            const optionResponses = {
                option1: 'Vous avez choisi Option 1.',
                option2: 'Vous avez choisi Option 2.',
                option3: 'Vous avez choisi Option 3.',
              };
            
              if (optionResponses[selectedOption]) {
                await interaction.update(optionResponses[selectedOption]);
              }
        }
    }
};
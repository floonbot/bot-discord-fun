module.exports = {
  handleButtonInteraction: async (bot, interaction) => {
    if (interaction.customId === 'ping_button') {
      await interaction.update({
        content: 'Pong!',
        components: [],
      });
    }
  }
};
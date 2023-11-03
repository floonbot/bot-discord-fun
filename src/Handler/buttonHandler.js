const { EmbedBuilder } = require("discord.js");

module.exports = {
  handleButtonInteraction: async (bot, interaction) => {
    if (interaction.customId === 'ping_button') {
      await interaction.update({
        content: 'Pong!',
        components: [],
      });
    }

    if (interaction.customId.startsWith('category_')) {
      const categoryName = interaction.customId.replace('category_', '');
      const categoryCommands = bot.commands.filter((command) => command.category === categoryName);
      const embed = new EmbedBuilder()
        .setTitle(`-🤖  Les commandes dans la catégorie  ${categoryName}`)
        .setColor("#0070FF")
        .setDescription(categoryCommands.map((command) => `
\`\`\`asciidoc
• Nom  :: ${command.name}
• desc :: ${command.description}
\`\`\`
`).join(''));
      await interaction.update({
        embeds: [embed],
      });
    }
  }
};
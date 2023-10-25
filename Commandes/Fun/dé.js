const Discord = require('discord.js');
const { rollDice } = require('../../Fonctions/math')

module.exports = {

    name: "dé",
    description: "Permet au bot de choisir un nombre entre 1 et 6",
    permission: "Aucune",
    category: "🥳 .Fun",
    dm: false,

    async run(bot, interaction) {

        const random = rollDice();

        const EmbedDe = new Discord.EmbedBuilder()
            .setTitle(`-🎲 Le bot est entrain de lancé le dé`)
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 256, format: "png" }))
            .setColor("#00A705")
            .setDescription(`
\`\`\`asciidoc
• Résultat :: ${random}
\`\`\`
                            `)
            .setFooter({ text: `Dé lancé par ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL({ dynamic: true, size: 128, format: "png" })}` })
            .setTimestamp();

        interaction.reply({ embeds: [EmbedDe] });
    }
}

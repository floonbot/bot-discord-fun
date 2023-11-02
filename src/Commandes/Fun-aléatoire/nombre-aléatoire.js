const { EmbedBuilder } = require('discord.js');
const { generateRandomNumber } = require("../../Fonctions/math")

module.exports = {
    name: "nombre-aléatoire",
    description: "Permet de choisir un nombre aléatoire",
    permission: "Aucune",
    ownerOnly: false,
    dm: false,
    category: ".Fun",
    options: [],

    async run(bot, interaction) {

        const nombreAléatoire = generateRandomNumber();

        const embedAléatoire = new EmbedBuilder()
            .setTitle(`-🎲 Le bot est entrain de choisir le nombre`)
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 256, format: "png" }))
            .setColor("#00A705")
            .setDescription(`
\`\`\`asciidoc
• Obetnue :: ${nombreAléatoire}
\`\`\`
                            `)
            .setFooter({ text: `Commande lancé par ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL({ dynamic: true, size: 128, format: "png" })}` })
            .setTimestamp();

        interaction.reply({ embeds: [embedAléatoire] });
    }
}

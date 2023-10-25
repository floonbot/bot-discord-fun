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
            .setTitle(`***VOUS AVEZ OBTENU LE NUMÉRO***`)
            .setColor("#00A705")
            .setDescription(`>🍀 Vous avez obtenu le numéro : \`${random}\``)
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
            .setTimestamp()
            .setFooter({ text: `${interaction.user.tag}`, iconURL: `${interaction.user.avatarURL()}` })

        interaction.reply({ embeds: [EmbedDe] });
    }
}

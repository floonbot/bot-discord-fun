const Discord = require('discord.js');
const { générerNombreAléatoire } = require("../../Fonctions/math")

module.exports = {
    name: "nombre-aléatoire",
    description: "Permet de choisir un nombre aléatoire",
    permission: "Aucune",
    dm: false,
    category: "🥳 .Fun",

  async  run (bot, interaction)  {
        const nombreAléatoire = générerNombreAléatoire();

        const embedAléatoire = new Discord.EmbedBuilder()
            .setTitle(`***VOUS AVEZ OBTENU LE NUMÉRO***`)
            .setColor("#00A705")
            .setDescription(`> 🍀 Vous avez obtenu le numéro : \`${nombreAléatoire}\``)
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
            .setTimestamp()
            .setFooter({ text: `${interaction.user.tag}`, iconURL: `${interaction.user.avatarURL()}` })

        interaction.reply({ embeds: [embedAléatoire] });
    }
}

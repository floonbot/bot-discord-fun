const { EmbedBuilder, version } = require('discord.js');
const moment = require("moment");
require("moment-duration-format");
const ms = require("ms");
const os = require("node:os");
const { formatBytes } = require("../../../Fonctions/formatBytes")

module.exports = {

    name: "statistique",
    description: "Afficher les statistiques du système",
    permission: "Aucune",
    ownerOnly: true,
    dm: false,
    category: '.Owner',
    options: [],

    async run(bot, interaction, args) {

        const durée = moment.duration(bot.uptime).format("**D [D], H [H], m [M], s [S]**");

        const embed = new EmbedBuilder()
            .setTitle(`-💻  Statistiques du Système`)
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 256, format: "png" }))
            .setColor("#00A705")
            .setDescription(`
\`\`\`asciidoc
• Plateforme - Arch         :: ${process.platform} - ${process.arch}
• Temps du Bot              :: ${durée}
• Utilisation de la mémoire :: ${formatBytes(process.memoryUsage.rss())}
• Temps du processus        :: ${ms(Math.round(process.uptime() * 1000), { long: true })}
• Temps du système          :: ${ms(os.uptime() ?? 0, { long: true })}
• Version de Node.js        :: ${process.version}
• Version de Discord.js     :: v${version}
\`\`\`
            `)
            .setFooter({ text: `Commande utilisée par ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL({ dynamic: true, size: 128, format: "png" })}` })
            .setTimestamp();

        interaction.reply({ embeds: [embed] });
    }
};



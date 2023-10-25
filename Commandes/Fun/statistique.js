const discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");
const ms = require("ms");
const os = require("node:os");

module.exports = {

    name: "statistique",
    description: "Afficher les statistiques du système",
    permission: "Aucune",
    dm: false,
    category: "🥳 .Fun",
    run: async (bot, interaction, args) => {

        const durée = moment.duration(bot.uptime).format("**D [D], H [H], m [M], s [S]**");

        const embed = new discord.EmbedBuilder()
            .setTitle(` 💻 Statistiques du Système`)
            .setThumbnail(bot.user.displayAvatarURL())
            .setColor("#00A705")
            .setDescription(`
\`\`\`asciidoc
• Plateforme - Arch         :: ${process.platform} - ${process.arch}
• Temps du Bot              :: ${durée}
• Utilisation de la mémoire :: ${formatBytes(process.memoryUsage.rss())}
• Temps du processus        :: ${ms(Math.round(process.uptime() * 1000), { long: true })}
• Temps du système          :: ${ms(os.uptime() ?? 0, { long: true })}
• Version de Node.js        :: ${process.version}
• Version de Discord.js     :: v${discord.version}
\`\`\`
            `)
            .setFooter({ text: `${interaction.user.tag}`, iconURL: `${interaction.user.avatarURL()}` });
        interaction.reply({ embeds: [embed] });
    }
};

function formatBytes(octets) {
    if (octets === 0) return "0 Octets";
    const tailles = ["Octets", "Ko", "Mo", "Go", "To", "Po", "Eo", "Zo", "Yo"];
    const i = Math.floor(Math.log(octets) / Math.log(1024));
    return `${parseFloat((octets / Math.pow(1024, i)).toFixed(2))} ${tailles[i]}`;
}

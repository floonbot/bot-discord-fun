const Discord = require("discord.js");
const { getInfoFromName } = require('mal-scraper');

module.exports = {

    name: "recherche-anime",
    description: "Permet de consulter des informations sur un anime",
    permission: "Aucune",
    ownerOnly: false,
    dm: false,
    category: "🥳 .Fun",
    options: [
        {
            type: "string",
            name: "anime",
            description: "Quel est l'anime ?",
            required: true,
            autocomplete: false
        }
    ],


    async run(bot, interaction, args) {

        const nomAnime = args.getString("anime");

        const { title, episodes, duration, score, url, picture } = await getInfoFromName(nomAnime)
        const files = new Discord.AttachmentBuilder(picture, { name: `picture.png` });

        const EmbedAnime = new Discord.EmbedBuilder()
            .setTitle(`-🎬  Le titre de l'animé ${title}`)
            .setColor("#00A705")
            .setImage(`attachment://${files.name}`)
            .setDescription(`
\`\`\`asciidoc
• Nombre d'épisodes          :: ${episodes}
• Durée moyenne des épisodes :: ${duration}
• Score                      :: ${score}
• URL                        :: ${url}
\`\`\`
`)
            .setFooter({ text: `Commande utilisée par ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL({ dynamic: true, size: 128, format: "png" })}` })

        await interaction.reply({ embeds: [EmbedAnime], files: [files] });
    }
}

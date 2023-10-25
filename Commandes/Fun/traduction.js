const translate = require('@iamtraction/google-translate');
const Discord = require("discord.js");

module.exports = {

    name: "traduction",
    description: "Permet de traduire du texte",
    permission: "Aucune",
    dm: false,
    category: "🥳 .Fun",
    options: [
        {
            type: "string",
            name: "texte",
            description: "Quel est le texte ?",
            required: true,
            autocomplete: false
        },
        {
            type: "string",
            name: "langue",
            description: "Quelle est la langue ?",
            required: true,
            autocomplete: true
        }
    ],

    async run(bot, interaction, args) {

        const texte = args.getString("texte")

        const langue = args.getString("langue")

        const languesDisponibles = ["fr", "en", "ja"]

        if (!languesDisponibles.includes(langue)) {

            const erreur = new Discord.EmbedBuilder()
                .setTitle(`👅 ***__LANGUES DISPONIBLES__*** 👅`)
                .setColor("#000000")
                .setDescription("Les choix de langues disponibles sont : \n\n \`fr\`\n \`en\`\n \`ja\`")
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setTimestamp()
                .setFooter({ text: "traduction" })
            interaction.reply({ embeds: [erreur] })
        }

        const traduit = await translate(texte, { to: langue });

        interaction.reply(`${traduit.text}`);

    }
}


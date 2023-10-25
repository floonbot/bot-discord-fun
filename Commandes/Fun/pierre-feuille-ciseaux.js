const Discord = require("discord.js");
const { getChoiceBot, determineResult } = require('../../Fonctions/pfc')

module.exports = {

    name: 'pierre-feuille-ciseaux',
    description: 'Joue à pierre-papier-ciseaux',
    permission: "Aucune",
    dm: false,
    category: "🥳 .Fun",
    options: [
        {
            type: "string",
            name: "choix",
            description: "Choisissez pierre, papier ou ciseaux",
            required: true,
            autocomplete: true,
        },
    ],

    async run(bot, interaction, args) {

        const userChoice = args.getString("choix");
        const botChoice = getChoiceBot();
        const result = determineResult(userChoice, botChoice);

        const EmbedPFC = new Discord.EmbedBuilder()
            .setTitle(`-🪨 Le bot est entrain de chosir son coup à jouer`)
            .setColor("#00A705")
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 256, format: "png" }))
        EmbedPFC .setDescription(`
\`\`\`asciidoc
• Joueurs :: ${userChoice}
• Bot     :: ${botChoice}
• Résutla :: ${result}
\`\`\`
                                    `)
        .setFooter({ text: `pfc lancé par ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL({ dynamic: true, size: 128, format: "png" })}` })
        .setTimestamp();
    interaction.reply({ embeds: [EmbedPFC] });
}
}


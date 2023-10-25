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
            .setColor("#00A705")
            .setTimestamp()
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64, }))
            .setFooter({ text: `${interaction.user.tag}`, iconURL: `${interaction.user.avatarURL()}` });

        EmbedPFC.setDescription(`🏆 **LES RÉSULTATS SONT :**
 
        > **Joueur ${interaction.user.tag} : ** a choisi \`${userChoice}\`
        > **Bot ${bot.user.tag} : ** a choisi \`${botChoice}\`
        > **RÉSULTAT : ** ${result}`);
        interaction.reply({ embeds: [EmbedPFC] });
    }
}


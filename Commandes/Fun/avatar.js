const Discord = require('discord.js');

module.exports = {

    name: "avatar",
    description: "Vous permet de récupérer l'avatar d'un membre",
    permission: "Aucune",
    dm: false,
    category: "🥳 .Amusement",
    options: [
        {
            type: "user",
            name: "membre",
            description: "De quel membre voulez-vous voir l'avatar ?",
            required: true,
            autocomplete: false
        }
    ],

    run: (bot, interaction, args) => {

        const utilisateur = args.getUser(`membre`);
        const avatarUtilisateur = utilisateur.displayAvatarURL({ dynamic: true, size: 512, format: "png" })

        const ligne = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                    .setLabel("Avatar")
                    .setURL(avatarUtilisateur)
                    .setStyle(Discord.ButtonStyle.Link)
            );

        const embedAvatar = new Discord.EmbedBuilder()
            .setColor("#00A705")
            .setImage(avatarUtilisateur)
            .setFooter({ text: `Commande utilisée par ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL({ dynamic: true, size: 128, format: "png" })}` })
            .setTimestamp();

        interaction.reply({ embeds: [embedAvatar], components: [ligne] });
    }
}

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

        const ligne = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                    .setLabel("Avatar")
                    .setURL(utilisateur.displayAvatarURL({ dynamic: true }))
                    .setStyle(Discord.ButtonStyle.Link)
            );

        const embedAvatar = new Discord.EmbedBuilder()
            .setColor("#00A705")
            .setDescription(`>🎭 **__L'avatar du membre ${utilisateur.tag}__**`)
            .setImage(utilisateur.displayAvatarURL({ dynamic: true }))
            .setFooter({ text: `${interaction.user.tag}`, iconURL: `${interaction.user.avatarURL()}` });

        interaction.reply({ embeds: [embedAvatar], components: [ligne] });
    }
}

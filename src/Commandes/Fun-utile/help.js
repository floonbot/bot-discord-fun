const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require("discord.js");

module.exports = {

    name: "help",
    description: "Affiche les commandes du bot",
    permission: "Aucune",
    ownerOnly: false,
    dm: false,
    category: ".Util",
    options: [
        {
            type: "string",
            name: "commande",
            description: "Quelle est la commande ?",
            required: false,
            autocomplete: true
        }
    ],

    async run(bot, interaction, args) {

        let commande;
        if (args.getString("commande")) {
            commande = bot.commands.get(args.getString("commande"));
            if (!commande) return interaction.reply("Commande introuvable");
        }

        if (!commande) {
            let catégories = [];
            bot.commands.forEach(commande => {
                if (!catégories.includes(commande.category)) catégories.push(commande.category);
            });



            const Embed = new EmbedBuilder()
                .setTitle("-🤖  Voici les informations pour les commandes du bot")
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 256, format: "png" }))
                .setColor("#0070FF")
                .setDescription(`
\`\`\`asciidoc
•Commandes disponibles :: ${bot.commands.size}
•Catégories disponibles :: ${catégories.length}
\`\`\`
                                `)
                .setFooter({ text: `Commande utilisée par ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL({ dynamic: true, size: 128, format: "png" })}` })
                .setTimestamp();

            await catégories.sort().forEach(async cat => {
                let commandes = bot.commands.filter(cmd => cmd.category === cat);
                Embed.addFields({ name: `${cat}`, value: `${commandes.map(cmd => `•${cmd.name} : \`${cmd.description}\``).join("\n")}` });
            });

            const catégorieButtons = catégories.map((cat) =>
                new ButtonBuilder()
                    .setCustomId(`category_${cat}`)
                    .setLabel(cat)
                    .setStyle(ButtonStyle.Primary));

            const actionRow = new ActionRowBuilder().addComponents(catégorieButtons);

            await interaction.reply({ embeds: [Embed], components: [actionRow] });
        } else {
            const Embed = new EmbedBuilder()
                .setTitle(`-🤖  Voici les informations de la commande ${commande.name} du bot`)
                .setColor("#0070FF")
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 256, format: "png" }))
                .setDescription(`
\`\`\`asciidoc
•Nom            :: ${commande.name}
•Description    :: ${commande.description}
•Permission     :: ${typeof commande.permission !== "bigint" ? commande.permission : new PermissionsBitField(commande.permission).toArray(false)}
•Owner          :: ${commande.ownerOnly ? "oui" : "non"}   
•Autorisé en MP :: ${commande.dm ? "oui" : "non"}
•Catégorie      :: ${commande.category}
\`\`\`
`)
                .setFooter({ text: `${interaction.user.tag}`, iconURL: `${interaction.user.avatarURL()}` })
                .setTimestamp();
            await interaction.reply({ embeds: [Embed] });
        }
    }
}

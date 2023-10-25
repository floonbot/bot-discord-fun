const Discord = require("discord.js");
const { calculate } = require("../../Fonctions/math")

module.exports = {
    name: "calculatrice",
    description: "Permet de calculer",
    permission: "Aucune",
    dm: false,
    category: "🥳 .Fun",
    options: [
        {
            type: "number",
            name: "number",
            description: "Quel est le nombre ?",
            required: true,
            autocomplete: false
        },
        {
            type: "string",
            name: "symbol",
            description: "Quel est le symbole ?",
            required: true,
            autocomplete: true
        },
        {
            type: "number",
            name: "number1",
            description: "Quel est le nombre ?",
            required: true,
            autocomplete: false
        }
    ],

    async run(bot, interaction, args) {

        const nombre = args.getNumber("number");
        const symbole = args.getString("symbol");
        const nombre1 = args.getNumber("number1");

        const result = calculate(nombre, symbole, nombre1);
        if (result === "Symbole invalide") {
            interaction.reply("Symbole invalide");
        } else if (result === "Division par zéro") {
            interaction.reply("Division par zéro n'est pas autorisée");
        } else {

            const EmbedEval = new Discord.EmbedBuilder()
                .setTitle(`🧮-  Le bot est entrain de calculer ${nombre} ${symbole} ${nombre1}`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 256, format: "png" }))
                .setColor("#00A705")
                .setDescription(`
\`\`\`asciidoc
• Résultat :: ${result}
\`\`\`
                            `)
                .setFooter({ text: `Commande utilisée par ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL({ dynamic: true, size: 128, format: "png" })}` })
                .setTimestamp();

            interaction.reply({ embeds: [EmbedEval] });
        }
    }
}
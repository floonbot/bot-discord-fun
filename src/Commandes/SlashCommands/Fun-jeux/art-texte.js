const figlet = require("figlet");

module.exports = {
    
    name: "art-texte",
    description: "Permet de créer de l'art texte",
    permission: "Aucune",
    ownerOnly: false,
    dm: false,
    category: ".Fun",
    options: [
        {
            type: "string",
            name: "texte",
            description: "Quel est le texte ?",
            required: true,
            autocomplete: false
        }
    ],

    async run(bot, interaction, args) {
        try {
            const texte = args.getString("texte");

            figlet(texte, function (err, data) {
                interaction.reply(`\`\`\`${data}\`\`\``);
            });
        } catch (err) {
            console.error(err);
            interaction.reply("Une erreur s'est produite lors de la création de l'art texte.");
        }
    }
}

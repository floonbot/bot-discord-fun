module.exports = {

    name: 'emojify',
    description: "Permet de transformer le texte en emoji",
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
        },
    ],

    async run(bot, interaction, args)  {

        let texte = args.getString("texte");

        if (!args.getString("texte")) return interaction.reply({ content: "Veuillez entrer un texte valide !!", ephemeral: true });

        const codesSpeciaux = {
            '0': ':zero:',
            '1': ':one:',
            '2': ':two:',
            '3': ':three:',
            '4': ':four:',
            '5': ':five:',
            '6': ':six:',
            '7': ':seven:',
            '8': ':eight:',
            '9': ':nine:',
            '#': ':hash:',
            '*': ':asterisk:',
            '?': ':grey_question:',
            '!': ':grey_exclamation:',
            ' ': '   '
        };

        let texteEmojifié = ''

        for (let i = 0; i < texte.length; i++) {

            const lettre = texte[i].toLowerCase();

            if (/[a-z]/g.test(lettre)) {

                texteEmojifié += `:regional_indicator_${lettre}:`

            } else if (codesSpeciaux[lettre]) {

                texteEmojifié += codesSpeciaux[lettre]

            } else {

                texteEmojifié += lettre
            }
        };

        interaction.reply(texteEmojifié);
    }
}

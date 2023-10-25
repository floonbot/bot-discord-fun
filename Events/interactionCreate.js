const Discord = require("discord.js");

module.exports = async (bot, interaction) => {

    if (interaction.type === Discord.InteractionType.ApplicationCommandAutocomplete) {
        let entry = interaction.options.getFocused()
        if (interaction.commandName === "calculatrice") {
            let choices = ["+", "-", "*", "/", "%"]
            let sortie = choices.filter(c => c.includes(entry))
            await interaction.respond(entry === "" ? sortie.map(c => ({ name: c, value: c })) : sortie.map(c => ({ name: c, value: c })))
        }
        if (interaction.commandName === "traduction") {
            let choices;
            const focusedOption = interaction.options.getFocused(true);
            if (focusedOption.name === 'language') {
                choices = ['fr', 'en', 'ja']
            }
            let sortie = choices.filter(c => c.includes(entry))
            await interaction.respond(entry === "" ? sortie.map(c => ({ name: c, value: c })) : sortie.map(c => ({ name: c, value: c })))
        }
        if (interaction.commandName === "pierre-feuille-ciseaux") {
            let choices = ["pierre", "papier", "ciseaux"]
            let sortie = choices.filter(c => c.includes(entry))
            await interaction.respond(entry === "" ? sortie.map(c => ({ name: c, value: c })) : sortie.map(c => ({ name: c, value: c })))
        }
    }
    if (interaction.type === Discord.InteractionType.ApplicationCommand) {
        const command = interaction.client.commands.get(interaction.commandName);
        command?.run?.(bot, interaction, interaction.options)
    }
}















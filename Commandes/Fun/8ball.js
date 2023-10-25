const Discord = require("discord.js");
const réponse = ["Oui", "Non", "Peut-être"]

module.exports = {

	name: "8ball",
	description: "Permet de poser une question",
	permission: "Aucune",
	dm: false,
	category: "🥳 .Fun",
	options: [
		{
			type: "string",
			name: "question",
			description: "Quelle est la question ?",
			required: true,
			autocomplete: false
		}
	],

	async run(bot, interaction, args) {

		const quest = args.getString("question");

		const result = réponse[Math.floor(Math.random() * réponse.length)];

		const Embedball = new Discord.EmbedBuilder()
			.setTitle("***LA RÉPONSE À LA QUESTION***")
			.setColor("#00A705")
			.addFields(
				{ name: `❓ Question`, value: `> ${quest}`, inline: false },
				{ name: `✅❌ Réponse`, value: `> ${result}`, inline: false },
			)
			.setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
			.setTimestamp()
			.setFooter({ text: `${interaction.user.tag}`, iconURL: `${interaction.user.avatarURL()}` });

		interaction.reply({ embeds: [Embedball] });
	}
};

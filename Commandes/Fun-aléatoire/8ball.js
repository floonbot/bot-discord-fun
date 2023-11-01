const { EmbedBuilder } = require("discord.js");
const réponse = ["Oui", "Non", "Peut-être"];

module.exports = {

	name: "8ball",
	description: "Permet de poser une question",
	permission: "Aucune",
	ownerOnly: false,
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

		const Embedball = new EmbedBuilder()
			.setTitle("-✅  Le bot a répondu à ta question")
			.setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 256, format: "png" }))
			.setColor("#00A705")
			.setDescription(`
\`\`\`asciidoc
• Question   :: ${quest}
• Réponse    :: ${result}
\`\`\`
            `)
			.setFooter({ text: `Question posée par ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL({ dynamic: true, size: 128, format: "png" })}` })
			.setTimestamp();

		interaction.reply({ embeds: [Embedball] });
	}
};

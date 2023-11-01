const { ActionRowBuilder, ButtonStyle, ButtonBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

	name: "avatar-aléatoire",
	description: "Obtenez l'avatar d'un membre aléatoire",
	permission: "Aucune",
	ownerOnly: false,
	dm: false,
	category: "🥳 .Fun",
	options: [],

	async run(bot, interaction, args) {

		const user = bot.users.cache.random();
		const avatarUser = user.displayAvatarURL({ dynamic: true, size: 512, format: "png" })

		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setLabel(`Avatar`)
					.setURL(avatarUser)
					.setStyle(ButtonStyle.Link)
			);

		const EmbedAvatar = new EmbedBuilder()
			.setColor("#00A705")
			.setImage(avatarUser)
			.setFooter({ text: `Commande utilisée par ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL({ dynamic: true, size: 128, format: "png" })}` })
			.setTimestamp();

		interaction.reply({ embeds: [EmbedAvatar], components: [row] });
	}
}

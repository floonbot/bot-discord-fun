const Discord = require('discord.js');

module.exports = {

	name: "avatar-aléatoire",
	description: "Obtenez l'avatar d'un membre aléatoire",
	permission: "Aucune",
	dm: false,
	category: "🥳 .Fun",

	async run(bot, interaction, args) {

		const user = bot.users.cache.random();

		const row = new Discord.RowBuilder()
			.addComponents(
				new Discord.ButtonBuilder()
					.setLabel(`Avatar`)
					.setURL(`${user.displayAvatarURL({ dynamic: true })}`)
					.setStyle(Discord.ButtonStyle.Link)
			);

		const EmbedAvatar = new Discord.EmbedBuilder()
			.setColor("#00A705")
			.setDescription(`> 🎭 **__L'avatar du membre ${user.tag}__**`)
			.setImage(user.displayAvatarURL({ dynamic: true }))

		interaction.reply({ embeds: [EmbedAvatar], components: [row] });
	}
}

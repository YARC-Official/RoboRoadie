const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('controllers')
		.setDescription('🎸 Information about supported controllers on YARG'),

	async execute(interaction) {
		const wikiButton = new ButtonBuilder()
			.setLabel('📖 YARG Wiki - Controllers')
			.setURL('https://wiki.yarg.in/wiki/Hardware_compatibility')
			.setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder().addComponents(wikiButton);

		await interaction.reply({
			content: '# 🎸 Information about supported controllers on YARG\nYARG supports a majority of both Guitar Hero and Rock Band controllers, however some may not be directly supported in gameplay, like Guitar Hero Live controllers. You can see a list of tested/confirmed supported controllers on the YARG Wiki.',
			components: [row],
		});
	},
};


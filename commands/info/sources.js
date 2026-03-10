const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sources')
		.setDescription('▶️ Information about supported chart sources on YARG'),

	async execute(interaction) {
		const openSourcebutton = new ButtonBuilder()
			.setLabel('OpenSource Website')
			.setURL('https://opensource.yarg.in/')
			.setStyle(ButtonStyle.Link);
		
		const githubButton = new ButtonBuilder()
			.setLabel('💻 Contribute to OpenSource')
			.setURL('https://github.com/YARC-Official/OpenSource?tab=readme-ov-file')
			.setStyle(ButtonStyle.Link);
		
		const osJsonButton = new ButtonBuilder()
			.setLabel('📖 JSON Reference')
			.setURL('https://github.com/YARC-Official/OpenSource/blob/master/base/index.json')
			.setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder().addComponents(openSourcebutton, githubButton, osJsonButton);

		await interaction.reply({
			content: '# ▶️ Information about supported chart sources on YARG\nYARG\'s source icons for charts are provided from OpenSource, a list of custom-made source icons free and open to use, including official GH/RB games, individual charters, and many custom setlists.\n\nIf you want to define your own custom icons, you can either add them to OpenSource by following the README on the OpenSource GitHub Repo, or if you want to only locally add custom sources, follow these instructions:\n\n1. Place your custom icon source in the icons folder (`Persistent Data Path/custom/icons`, see `/data`)\n2. Create or edit an `index.json` file in the icons folder, adding in the source ID\'s, names, specific icon image, and type\n3. Custom icons are prioritized over OpenSource\'s icons, so user-provided replacements supersede the official ones',
			components: [row],
		});
	},
};

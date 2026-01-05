const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		
        function updatePresence() {
			let totalMembers = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
			client.user.setActivity(`Rocking out with ${totalMembers} members`, { type: ActivityType.Custom });
		}
                
		// Set initial presence
		updatePresence();

		// Update every 5 minutes
		setInterval(updatePresence, 5 * 60 * 1000);
	},
};

const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		
        const updatePresence = async () => {
            let totalMembers = 0;

            for (const guild of client.guilds.cache.values()) {
                await guild.members.fetch({withPresences: false});
                totalMembers += guild.memberCount;
            }

            client.user.setActivity(
                `Rocking out with ${totalMembers} members`,
                {type: ActivityType.Custom}
            );
        }
                
		// Set initial presence
		updatePresence();

		// Update every 5 minutes
		setInterval(updatePresence, 5 * 60 * 1000);
	},
};
const { REST, Routes } = require('discord.js');
const { name, description } = require('./Configs/commands/help');
require('dotenv').config();

const commands = [
    {
        name: 'help',
        description: 'List All Available Commands'
    },
    {
        name: "ping",
        description: "Says Pong"
    }
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

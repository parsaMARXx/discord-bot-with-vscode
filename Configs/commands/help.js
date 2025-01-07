module.exports = {
    name: 'help',
    description: 'List All Available Commands',
    async execute(interaction) {
        const { commands } = interaction.client;
        const helpMessage = commands.map(command => `\`${command.name}\`: ${command.description}`).join('\n');

        await interaction.reply(`**Available Commands:**\n${helpMessage}`);
    },
};

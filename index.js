const { Client, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once('ready', () => {
  console.log(`Ready! Logged in as ${client.user.tag}`);

  // Define your command
  const command = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!');

  // Register the command
  client.application.commands.create(command);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

  client.login('YOUR_BOT_TOKEN');

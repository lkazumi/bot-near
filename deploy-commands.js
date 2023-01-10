const { REST, Routes } = require('discord.js');
require("dotenv").config();
const fs = require('node:fs');

let token = process.env.TOKEN 
let clientId = process.env.CLIENTID
let guildId = process.env.GUILDID

const commands = [];
// Grab all the command files from the commands directory you created earlier
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(token);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			//Routes.applicationGuildCommands(clientId, guildId), // Comandos ficam disponiveis apenas no servidor informado no guild id
            Routes.applicationCommands(clientId), // Comandos ficam disponiveis em qualquer servidor que o bot esteja.
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();
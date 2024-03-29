const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Informações sobre o servidor.'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`\`\`\`Servidor: ${interaction.guild.name} \nContém: ${interaction.guild.memberCount} membros.\`\`\``);
	},
};
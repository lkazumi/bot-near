const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Informações sobre o usuário.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(`Este comando foi executado por ${interaction.user.username}, se juntou a nós em ${interaction.member.joinedAt}.`);
	},
};
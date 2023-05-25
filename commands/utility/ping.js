const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Responde com Pong!"),
  async execute(iteraction) {
    await iteraction.reply(
      `\`\`\`Pong! \n\*Latencia é ${
        Date.now() - iteraction.createdTimestamp
      }ms. \n\*Latencia da API é ${Math.round(iteraction.client.ws.ping)}ms\`\`\``
    );
  },
};

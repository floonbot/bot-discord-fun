const loadSlashCommands = require("../Loaders/loadSlashCommands");

module.exports = async (bot) => {
  await loadSlashCommands(bot);

  process.on("SIGINT", async () => {
    process.exit(0);
  });

  console.log(`Le bot ${bot.user.tag} est en ligne`)
};

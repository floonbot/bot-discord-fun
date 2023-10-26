const loadSlashCommands = require("../Loaders/loadSlashCommands");

module.exports = async (bot) => {
  await loadSlashCommands(bot);

  process.on("SIGINT", async () => {
    process.exit(0);
  });
};

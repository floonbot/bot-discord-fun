const loadSlashCommands = require("../Loaders/loadSlashCommands");
const { bgGreenBright, bgRedBright, red } = require("colorette");

module.exports = async (bot) => {
  try {

    const [commands] = await Promise.all([
      loadSlashCommands(bot),
    ]);


    console.log();
    console.log(bgGreenBright(`${bot.user.tag} est en ligne!`));

    process.on("SIGINT", async () => {
      console.log();
      console.log(bgRedBright(`${bot.user.tag} est hors ligne.`));
      process.exit(0);
    });
  } catch (error) {
    console.error(red("Une erreur s'est produite lors du chargement du bot:", error.message));
  }
};
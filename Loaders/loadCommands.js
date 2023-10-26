const { readdir, lstat } = require("fs").promises;
const { join } = require("path");

module.exports = async (bot) => {
  const allCommands = [];
  let commandsLoaded = true;

  async function scanDir(path, indent = 0) {
    const files = await readdir(path);

    for (const thing of files) {
      const fullPath = join(path, thing);
      const stats = await lstat(fullPath);

      if (stats.isDirectory()) {
        await scanDir(fullPath, indent + 2);
      } else {
        const command = require(fullPath);
        bot.commands.set(command.name, command);
        allCommands.push(command.name);
        commandsLoaded = true;
      }
    }
  }

  await scanDir(join(process.cwd(), 'Commandes'));
}

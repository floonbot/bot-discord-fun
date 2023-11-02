const { readdir } = require("fs").promises;

module.exports = async (bot) => {
  const files = await readdir("./src/Events");
  const eventFiles = files.filter(file => file.endsWith(".js"));

  const bindEvents = eventFiles.map(async file => {
    const event = require(`../Events/${file}`);
    bot.on(file.split(".js").join(""), event.bind(null, bot));
  });

  await Promise.all(bindEvents);
};

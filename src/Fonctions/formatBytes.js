function formatBytes(octets) {
    if (octets === 0) return "0 Octets";
    const tailles = ["Octets", "Ko", "Mo", "Go", "To", "Po", "Eo", "Zo", "Yo"];
    const i = Math.floor(Math.log(octets) / Math.log(1024));
    return `${parseFloat((octets / Math.pow(1024, i)).toFixed(2))} ${tailles[i]}`;
}

module.exports = { formatBytes }
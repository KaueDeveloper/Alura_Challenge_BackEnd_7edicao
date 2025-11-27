//Cria um warning personalizado no console
async function consoleWarning(message) {
    let lines = "";

    for(let i = 0; i < message.length + 7; i++) {
        lines+= "-";
    }

    console.log(lines);
    console.warn(`| ⚠️  ${message} |`);
    console.log(lines);
}

module.exports = consoleWarning;
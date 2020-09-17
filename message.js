function message(message, color) {

    color = color || "black";
    message = message || '';

    switch (color) {
        case "blue":
            console.log('\x1b[34m%s\x1b[0m', message);
            break;
        case "yellow":
            console.log('\x1b[33m%s\x1b[0m', message);
            break;
        case "red":
            console.log('\x1b[31m%s\x1b[0m', message);
            break;
        case "cyan":
            console.log('\x1b[36m%s\x1b[0m', message);
            break;
        case "green":
            console.log('\x1b[32m%s\x1b[0m', message);
            break;
        case "magenta":
            console.log('\x1b[35m%s\x1b[0m', message);
            break;
        default:
            console.log('\x1b[37m%s\x1b[0m', message);
    }
}

module.exports= message;
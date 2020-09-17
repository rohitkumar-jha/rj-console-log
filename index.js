const color=require('./color')
const message = require('./message');

//To print success messga
function success(message) {
    if (message != null) {
        console.log('\x1b[32m%s\x1b[0m', message);
    }
}

//To print info messga
function info(message) {
    if (message != null) {
        console.log('\x1b[34m%s\x1b[0m', message);
    }
}

//To print warning messga
function warning(message) {
    if (message != null) {
        console.log('\x1b[33m%s\x1b[0m', message);
    }
}

//To print error messga
function error(message) {
    if (message != null) {
        console.log('\x1b[31m%s\x1b[0m', message);
    }
}

module.exports = { success, info, warning, error,color,message}
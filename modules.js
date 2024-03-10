
const names = require('./names')
const sayHi = require('./utils')
const data = require('./altflav')
require('./mindgrenade')
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)

const os = require('os')

const user = os.userInfo();
console.log(user);

console.log(`System uptime is: ${os.uptime} seconds `);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}

console.log(currentOS)


const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)
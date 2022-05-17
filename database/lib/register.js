const fs = require('fs')

let _registered = JSON.parse(fs.readFileSync('./database/user/register.json'))


const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}



const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/user/register.json', JSON.stringify(_registered, null, 2))
}



const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

module.exports = { getRegisteredRandomId, addRegisteredUser, checkRegisteredUser }


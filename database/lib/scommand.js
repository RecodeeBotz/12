const fs = require('fs')

let scommand = JSON.parse(fs.readFileSync('./database/prefix_seticker.json'))



const addCmd = (id, command) => {
			const obj = { id: id, chats: command }
			scommand.push(obj)
			fs.writeFileSync('./database/prefix_seticker.json', JSON.stringify(scommand, null, 2))
			}
			const getCommandPosition = (id) => {
				let position = null
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						position = i
						}
						})
						if (position !== null) {
							return position
							}
					}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}

module.exports = { addCmd, getCmd, checkSCommand, getCommandPosition }

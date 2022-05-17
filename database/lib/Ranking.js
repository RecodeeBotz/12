const fs = require('fs-extra')



const getUserRank = (userId, _level) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./database/user/level.json', JSON.stringify(_level, null, 2))
        return 99
    } else {
        return position + 1
    }
}

// Cooldown XP gains to prevent spam
const xpGain = new Set()

/**
 * Check is user exist in set.
 * @param {string} userId 
 * @returns {boolean}
 */
const isGained = (userId) => {
    return !!xpGain.has(userId)
}

/**
 * Add user in set and delete it when it's 1 minute.
 * @param {string} userId 
 */
const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 30000) // Each minute
}

module.exports = { getUserRank, isGained,  addCooldown }
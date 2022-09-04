import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { text }) => {
let name = m.pushName || conn.getName(m.sender)

let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
 m.reply(` ${conn.getName(m.sender)} is now AFK${text ? ': ' + text : ''}
  `)
    } })
            }
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler

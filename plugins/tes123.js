import fs from 'fs'

import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix: _p }) => {
let res = await fetch('https://telegra.ph/file/08e57d12a311fcf78ebdf.jpg')
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Halo Kak >///<', 'Halo miku', 'iyh', m)
}

handler.customPrefix = /^(tes|bot|miku)$/i

handler.command = new RegExp



export default handler

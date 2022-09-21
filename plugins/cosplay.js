import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, global.API('adiisus', '/api/randomimage/cosplay'), 'cosplay.jpg', '_*Done*_', m)
}
handler.help = ['cosplay']
handler.tags = ['internet']

handler.command = /^(cosplay)$/i

export default handler

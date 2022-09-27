import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, global.API('https://api.akuari.my.id/randomimganime/milf'), '_*Nih Wibu*_', m)
}
handler.help = ['milf']
handler.tags = ['internet']
handler.command = /^(milf)$/i
handler.limit = true
export default handler

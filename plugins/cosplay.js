import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, global.API('https://api.akuari.my.id/randomimganime/cosplay'), '_*Cosplayer*_', m)
}
handler.help = ['cosplay']
handler.tags = ['internet']

handler.command = /^(cosplay)$/i

export default handler

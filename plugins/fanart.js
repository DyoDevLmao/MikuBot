let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.lolhuman.xyz/api/random/art?apikey=8e66d0934cf741bfd2182c16')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'FanArt', m)
}
handler.help = ['fanart']
handler.tags = ['internet']
handler.command = /^(fanart)$/i
handler.limit = true
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler

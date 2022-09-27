import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.akuari.my.id/randomimganime/cosplay'
	conn.sendButton(m.chat, 'Cosplayer', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(cosplay)$/i
handler.tags = ['internet']
handler.help = ['cosplay']
handler.limit = true
export default handler

import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.akuari.my.id/randomimganime/akaneko?param=cum'
	conn.sendButton(m.chat, '🔞Dasar sangean', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(cum)$/i
handler.tags = ['nsfw']
handler.help = ['cum']
handler.premium = true
handler.owner = true
handler.limit = true
export default handler

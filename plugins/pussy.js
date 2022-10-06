import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.akuari.my.id/randomimganime/akaneko?param=pussy'
	conn.sendButton(m.chat, '🔞Dasar sangean', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(pussy)$/i
handler.tags = ['nsfw']
handler.help = ['pussy']
handler.admin = true
handler.limit = true
export default handler

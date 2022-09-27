import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.akuari.my.id/randomimganime/akaneko?param=uniform'
	conn.sendButton(m.chat, '🔞Dasar sangean', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(uniform)$/i
handler.tags = ['nsfw']
handler.help = ['uniform']
handler.limit = true
export default handler

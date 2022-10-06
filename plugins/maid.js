import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.akuari.my.id/randomimganime/akaneko?param=maid'
	conn.sendButton(m.chat, '🔞Dasar sangean', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(maid)$/i
handler.tags = ['nsfw']
handler.help = ['maid']
handler.admin = true
handler.limit = true
export default handler

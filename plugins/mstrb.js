import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.akuari.my.id/randomimganime/akaneko?param=masturbation'
	conn.sendButton(m.chat, '🔞ahhhh>///<', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(masturbation)$/i
handler.tags = ['nsfw']
handler.help = ['masturbation']
handler.limit = true
export default handler

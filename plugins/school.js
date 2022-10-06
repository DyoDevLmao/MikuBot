import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.akuari.my.id/randomimganime/akaneko?param=school'
	conn.sendButton(m.chat, '🔞ahhhh>///<', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(school)$/i
handler.tags = ['nsfw']
handler.help = ['school']
handler.admin = true
handler.limit = true
export default handler

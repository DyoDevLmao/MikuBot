import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.akuari.my.id/randomimganime/milf'
	conn.sendButton(m.chat, 'Bojone Gepenk', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(milf)$/i
handler.tags = ['anime']
handler.help = ['milf']
handler.limit = true
export default handler

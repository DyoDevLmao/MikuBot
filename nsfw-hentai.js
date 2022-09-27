import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
let res = await fetch('https://api.akuari.my.id/randomimganime/akaneko?param=hentai')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), '🔞', 'Next', '.hentai', m)
}
handler.command = /^(hentai)$/i
handler.tags = ['nsfw']
handler.help = ['hentai']
export default handler

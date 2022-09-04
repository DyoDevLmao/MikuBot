let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Donasi • Pulsa 」
│ • *telkomsel:* [${global.ppulsa}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Dana:* [${global.pdana}]
❏────
`

let tm = {
text: text,
footer: global.wm,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler

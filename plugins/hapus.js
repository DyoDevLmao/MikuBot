let handler = function (m) {
    if (!m.quoted) throw false
    let { chat, fromMe } = m.quoted
    if (!fromMe) throw true
    conn.sendMessage(chat, { delete: m.quoted.vM.key })
}
handler.help = ['hps', 'hapus']
handler.tags = ['owner']
handler.owner = true

handler.command = /^(hps|hapus)?$/i

export default handler

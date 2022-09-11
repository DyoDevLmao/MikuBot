import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
let res = await fetch('https://telegra.ph/file/15fad2458c84ab50913a3.jpg')

handler.command = /^(loli)$/i
handler.tags = ['anime']
handler.help = ['loli']
export default handler

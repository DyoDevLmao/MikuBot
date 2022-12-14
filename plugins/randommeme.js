//created by Scooppt
import fetch from 'node-fetch'

let handler  = async (m, { conn, args, text }) => {
  try {
    if (!text) return m.reply('What are you looking for?')
    let res = await fetch('https://meme-api.herokuapp.com/gimme/' + text)
    let json = await res.json()
    if (json.status) throw json
    let caption = `
©Reddit
Author: ${json.author} Subreddit: ${json.subreddit}
${json.postLink}
`.trim()
    conn.sendFile(m.chat, json.url, '', caption, m)
   } catch (e) {
        console.log(e)
        throw 'Error!'
    }
}

handler.help = ['meme (subreddit)']
handler.tags = ['internet']
handler.command = /^memesub$/i

handler.fail = null

export default handler

let handler = async (m, { conn, text }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
	
	text = no(text)
  
  if(isNaN(text)) {
		var number = text.split`@`[1]
	}else if(!isNaN(text)) {
		var number = text
	}

  if(number.length > 15 || (number.length < 9 && number.length > 0)) return conn.reply(m.chat, `*Tag target !*`, m)

  

  if (typeof global.db.data.users[user] == "undefined"){
    return m.reply("*Orang yang anda tag tidak terdaftar di Bot.*")
  }

  if (typeof global.db.data.users[global.db.data.users[user].pasangan] == "undefined" && global.db.data.users[user].pasangan != ""){
    return m.reply("*Pacar/gebetan target tidak terdaftar di ArieTube bot.*")
  }

  if (global.db.data.users[user].pasangan == "") {
    conn.reply(m.chat, `*${orang} tidak memiliki pasangan dan tidak sedang menembak siapapun*\n\n*Ketik /tembak @user untuk menembak seseorang*`, m)
  }else if (global.db.data.users[global.db.data.users[user].pasangan].pasangan != user){
    conn.reply(m.chat, `*${orang} sedang digantung oleh @${global.db.data.users[user].pasangan.split('@')[0]} karena sedang tidak diterima atau di tolak*\n\n*Ketik .ikhlasin untuk menghapus nama dia dari hatimu*`, m,{contextInfo: {
      mentionedJid: [global.db.data.users[user].pasangan]
    }})
  }else {
    conn.reply(m.chat, `*${orang} sedang menjalani hubungan dengan @${global.db.data.users[user].pasangan.split('@')[0]} ðŸ¥³ðŸ¥³*`, m,{contextInfo: {
      mentionedJid: [global.db.data.users[user].pasangan]
    }})
  }
}
handler.help = ['cekpacar']
handler.tags = ['jadian']
handler.command = /^(cekpacar)$/i
handler.limit = true
handler.fail = null
export default handler

//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
   let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `❒ منشن الشخص لفك البان`
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `
تم الغاء البان !
@${who.split`@`[0]} لقد اصبحت غير مبند الان تستطيع استخدام البوت`, m, { mentions: [who] })
}
handler.help = ['بانفك']
handler.tags = ['owner']
handler.command = /^الغاء_البان|حذف_البان|حذف-البان|بانفك$/i
handler.rowner = true

export default handler

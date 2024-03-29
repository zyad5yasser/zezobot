var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (!text) return conn.reply(m.chat, 'هذا الأمر خاص بتغيير إسم المجموعة تكتب هكذا \n\n*.اسم_الجروب* 𝑍𝐸𝑍𝛩 𝐵𝛩𝑇 GROUPE', m,  )
await conn.groupUpdateSubject(m.chat, text)
conn.reply(m.chat, `🚩 ${text ? `${text} *هو الاسم الجديد لهذه المجموعة*\n` : '*لم يعطوا اسما*'}`, m,  )
}
handler.help = ['اسم_الجروب']
handler.tags = ['group']
handler.command = /^setgroupname|اسم_الجروب$/i

handler.botAdmin = true
handler.group = true
handler.admin = true

export default handler

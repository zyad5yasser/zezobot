let handler = async (m, { conn, participants, usedPrefix, command }) => {
	
let kickte = `✳️ لازم منشن\n*${usedPrefix + command}* @المستخدم`

if (!m.mentionedJid[0] && !m.quoted) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
	await conn.sendMessage(m.chat, { react: { text: '😈', key: m.key } })
m.reply(`✅ تم الطرد`) 

}

handler.help = ['طرد']
handler.tags = ['group']
handler.command = ['kick', 'expulsar','طرد'] 
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler

async function handler(m, { conn }) {

  conn.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
  await conn.sendMessage(m.chat, { react: { text: '😌', key: m.key } })
  let a = await m.reply("تم حذف رسائل هذه المحاذثة بنجاح") 

}
handler.help = ['حذف-الشات'],
handler.tags = ['owner'],
handler.command = /^(حذف-الشات)$/i
handler.owner = true
export default handler

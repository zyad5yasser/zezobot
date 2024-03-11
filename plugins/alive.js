import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────────────────────
│👋 مرحبا يا , ${conn.getName(m.sender)}!
│🤖 أتمنى أنك بخير ♥ البوت أون لاين الآن 
يمكنك إستخدامه عبر كتابة menu.
╰────────────────────
*─[ BY 𝑍𝑌𝐴𝐷_𝑌𝐴𝑺𝑺𝐸𝑅 ]*🌟✨
`.trim()
  m.reply(caption)
}
handler.help = ['تشغيل']
handler.tags = ['infobot']
handler.command = /^(تشغيل)$/i


export default handler

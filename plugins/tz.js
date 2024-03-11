import moment from 'moment-timezone';

const handler = async (m, {conn}) => {

  const tzAF = moment().tz('Africa/Cairo').format('DD/MM HH:mm');
  await conn.sendMessage(m.chat, {text: `\`\`\`
الوقت الحالي في مصر هو :


▢ eygpt     : ${tzAF}
  ${String.fromCharCode(8206).repeat(850)}
  ▢ https://www.instagram.com/zaidyasser44?igsh=MWkweWpwMG10bjNkeg==`}, {quoted: m});
  };
handler.help = ["توقيت"]
handler.tags = ["infobot"]
handler.command = /^(توقيت)$/i
  export default handler;

import {wallpaper} from '@bochilteam/scraper';
import _translate from "./_translate.js"
const tradutor = _translate.plugins.downloader_wallpaper

//لعيون لغوالي
// لتغيير اللغة، في  الكود ، عدل  على  ملف config.json

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `${tradutor.texto1} ${usedPrefix + command} Minecraft*`;
  const res = await wallpaper(text);
  const img = res[Math.floor(Math.random() * res.length)];
  conn.sendFile(m.chat, img, 'error.jpg', `${tradutor.texto2} ${text}*`, m);
};
handler.help = ['خلفية'].map((v) => 'wallpaper' + v + ' <query>');
handler.tags = ['downloader'];
handler.command = /^(خلفية?)$/i;
export default handler;

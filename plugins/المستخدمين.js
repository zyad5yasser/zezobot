const handler = async (m) => {
  let totalreg = Object.keys(global.db.data.users).length;
  let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
  m.reply(`*عدد المستخدمين البوت حاليا:* ${totalreg}`);
};

handler.help = ['المستخدمين'];
handler.tags = ['tools'];
handler.command = /^(المستخدمين)$/i;
handler.owner = true;

export default handler;

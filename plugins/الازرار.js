let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: 'الاوامر'
            },
            body: {
              text: 'جرب براحتك'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط',
                    sections: [
                      {
                        title: 'القائمة',
                        highlight_label: 'زيزو',
                        rows: [
                          {
                            header: 'منشن',
                            title: 'منشن',
                            description: '',
                            id: '.منشن'
                          },
                                        {
                            header: 'مخفي',
                            title: 'مخفي',
                            description: '',
                            id: '.مخفي'
                          },
                          {
                            header: 'المطور',
                            title: 'المطور',
                            description: '',
                            id: '.المطور'
                          }, 
                          {
                                header: 'القايمه', 
                                title: 'القايمه', 
                                description: '', 
                                id: '.القايمه', 
                         } 
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['اوامر']

export default handler

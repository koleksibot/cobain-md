const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;KOLEKSI;;;'
                    + 'FN:BOT\n' // full name
                    + 'ORG:Owner Koleksibot;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6281515474080:+6281515474080\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'KOLEKSI BOT', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler

let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/44c08e07a1c81411d5a69.jpg', m, { packname: "gaarabotz", author: "@gaaraxploite" })
}

handler.customPrefix = /^(😭|😭😭|😭😭😭|😭😭😭😭|😭😭😭😭😭|😭😭😭😭😭😭)$/i
handler.command = new RegExp

module.exports = handler

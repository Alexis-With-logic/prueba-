import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ ππ½ π΄π½π»π°π²π΄ ππ°π»πΈπ³πΎ π³π΄ πΌπ΄π³πΈπ°π΅πΈππ΄, π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} https://www.mediafire.com/file/xo6msugx6u2fhlw/1.19.30.apk/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
π *ππππππ:* ${filename}
π¦ *ππππ:* ${filesizeH}
ποΈ *ππππ:* ${ext}

*β° π΄ππΏπ΄ππ΄ π΄π½ π»πΎ πππ΄ π΄π½ππΈπΎ ππ π°ππ²π·πΈππΎ. . . .* 
*_- π°ππ²π·πΈππΎπ πΌπ°ππΎππ΄π π° π·00 πΌπ± πΏππ΄π³π΄ πππ΄ π½πΎ ππ΄π°π½ π΄π½ππΈπ°π³πΎπ_* 
`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'π³π΄ππ²π°ππΆπ°π π³π΄ πΌπ΄π³πΈπ°π΅πΈππ΄',
body: 'π©π π«πΆπΉπΉπ¨π»-π©πΆπ»-π΄π«',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/DIEGO-OFC/DORRAT-BOT-MD`}}})
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) {
m.reply('*[βππππβ] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*\n\n*- π²πΎπππΎπ±πΎππ΄ πππ΄ π΄π» π΄π½π»π°π²π΄ ππ΄π° ππΈπΌπΈπ»π°π π°:*\n*β https://www.mediafire.com/file/xo6msugx6u2fhlw/1.19.30.apk/file*')
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
export default handler

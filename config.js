import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs' 
 
//á­Ĩđá­ĸáĸĪ´Î áĪ´Õ ÎáŽĖáˇáŦáĄĪ´Õ ĪáŽáŦ ĪáŽááŦáĄáĒÕá­Ĩđá­ĸ
global.owner = [
  ['50241370839', 'â­', true],
  ['50241370839', 'â­', true],
  ['50241370839', 'â­', true],
  ['573244488043', 'Criwilop-Bot', true]
]
global.mods = [] 
global.prems = [] 
//â°ââââââââââââââââââââââ¯

global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz',
  violetics: 'https://violetics.pw'
},
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://violetics.pw': 'beta'
}

//á­Ĩđá­ĸâââââââđģđ°đŦđ´đˇđļâââââââá­Ĩđá­ĸ
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' })
let time = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
//â°ââââââââââââââââââââââ¯

//á­Ĩđá­ĸâââââââđēđģđ°đĒđ˛đŦđšđēâââââââá­Ĩđá­ĸ
global.packname = ``
global.author = `
 đąÃđšĘá´É´đŽá´á´đ­á´á´Ãđą\n\t\t\t\t\t\ đĸ\nâAĘĘá´Ęá´á´ Y AsĘĘĘâ\n\t\t\t\t\t\ đ\n\t\t\t${time}\n\t\t\t\t\t\ đ\n${date}
 `
//â°ââââââââââââââââââââââ¯


//á­Ĩđá­ĸâââââđ´đ¨đšđĒđ¨đē đĢđŦ đ¨đŽđŧđ¨âââââá­Ĩđá­ĸ
global.ignyc = '\JhanX-Bot-MD\JhanX44 y Kei\n' 
global.wm = '\JhanX-Bot-MD\JhanX44 y Kei' 
global.botname = 'JhanX-Bot-MD'
global.me = 'JhanX44 y Kei' 
//â°ââââââââââââââââââââââ¯


//Texto
	global.adimagen = `đ| Iá´á´ĖÉĸá´É´á´s BĘ NĘá´É´Cá´á´Bá´á´đŋ`
	global.adanime = `đ¸| AÉ´ÉĒá´á´ BĘ NĘá´É´Cá´á´Bá´á´đ´`
	global.adyoutube = `đ| Dá´sá´á´ĘÉĸá´s á´á´ Yá´á´Tá´Ęá´đ`
	global.adsticker = `đī¸| Sá´ÉĒá´á´á´Ęs BĘ NĘá´É´Cá´á´Bá´á´đē`
	global.addescargas = `đ¤| Dá´sá´á´ĘÉĸá´s BĘ NĘá´É´Cá´á´đ¸`
 

//á­Ĩđŧá­ĸâââââđ´đēđŽ đĢđŦ đŦđēđˇđŦđšđ¨âââââá­Ĩđŧá­ĸ
global.wait = '*âŗAÉĸá´á´Ęá´á´ á´É´ á´á´á´á´É´á´á´... ā¸^âĸīģâĸ^ā¸âŗ*'
//â°ââââââââââââââââââââââ¯


//á­Ĩđá­ĸâââââââđ°đ´đ¨ĖđŽđŦđĩđŦđēâââââââá­Ĩđá­ĸ
global.imgmenu = fs.readFileSync('./storage/image/nyanbot.jpg')
global.imgfgif = fs.readFileSync('./storage/image/fgif.jpg')
global.catalogo = fs.readFileSync('./storage/image/catalogo.png')
global.miniurl = fs.readFileSync('./storage/image/nyanmini.jpg')
global.nyanregis = fs.readFileSync('./storage/image/nyanregis.jpg')
global.imginv = fs.readFileSync('./storage/image/inventario.jpg')
global.imgshop = fs.readFileSync('./storage/image/shop.jpg')
global.menugif = fs.readFileSync('./storage/mp4/menu.mp4')
global.adnyancat = fs.readFileSync('./storage/image/adnyancat.png')
global.verificado = fs.readFileSync('./storage/image/verificado.png')
//â°ââââââââââââââââââââââ¯


//á­Ĩđŋá­ĸââââââââđŗđ°đĩđ˛đēââââââââá­Ĩđŋá­ĸ
global.linkgc = 'https://chat.whatsapp.com/DjweUbjfKALGCFACnIhqfS'
global.nycuser = 'https://chat.whatsapp.com/DjweUbjfKALGCFACnIhqfS'
global.script = 'https://chat.whatsapp.com/DjweUbjfKALGCFACnIhqfS'
//â°ââââââââââââââââââââââ¯



//á­Ĩđēá­ĸââââđēđģđ°đĒđ˛đŦđš đŊđŦđšđ°đ­đ°đĒđ¨đĢđļââââá­Ĩđēá­ĸ
global.faketick = { "key": { "participant": `0@s.whatsapp.net`, "remoteJid": "6287834993722-1621306547@g.us", "fromMe": false, "id": "3B64558B07848BD81108C1D14712018E" }, "message": { "stickerMessage": { "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=", "pngThumbnail": catalogo, "mimetype": "image/webp", "height": 64, "width": 64, "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE", "fileLength": "60206", "firstFrameLength": 3626, "isAnimated": false } }, "messageTimestamp": "1614070775", "status": "PENDING" }
//â°ââââââââââââââââââââââ¯
//á­Ĩđēá­ĸâââđĒđļđĩđģđ¨đĒđģđļ đŊđŦđšđ°đ­đ°đĒđ¨đĢđļâââá­Ĩđēá­ĸ
global.ownerfk = { "key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"}, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=19362556628:global.nyanregis\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}
//â°ââââââââââââââââââââââ¯
//á­Ĩđēá­ĸâââđĒđ¨đģđ¨ĖđŗđļđŽđļ đŊđŦđšđ°đ­đ°đĒđ¨đĢđļâââá­Ĩđēá­ĸ
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'đąâ¸ŊâNĘá´É´Cá´á´Bá´á´ - MDđâ¨áââ°\nâAĘĘá´Ęá´á´ Y AsĘĘĘâ', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
//â°ââââââââââââââââââââââ¯
//á­Ĩđēá­ĸâââââđŽđ°đ­ đŊđŦđšđ°đ­đ°đĒđ¨đĢđļâââââá­Ĩđēá­ĸ
global.fgif = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`*AĘĘá´Ęá´á´ Y AsĘĘĘâĨī¸*`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `đąâ¸ŊâNĘá´É´Cá´á´Bá´á´ - MDđâ¨áââ°\n      đAĘĘá´Ęá´á´ Y AsĘĘĘâ`, 'jpegThumbnail': imgfgif }}}
//â°ââââââââââââââââââââââ¯
//á­Ĩđēá­ĸâââââđ¨đŧđĢđ°đļ đŊđŦđšđ°đ­đ°đĒđ¨đĢđļâââââá­Ĩđēá­ĸ
global.estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "50499698072-1625305606@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   }}}  
//â°ââââââââââââââââââââââ¯
//á­Ĩđēá­ĸâââđĢđļđĒđŧđ´đŦđĩđģđļ đŊđŦđšđ°đ­đ°đĒđ¨đĢđļâââá­Ĩđēá­ĸ
global.fdocument = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `đąâ¸ŊâNĘá´É´Cá´á´Bá´á´ - MDđâ¨áââ°\n   đAĘĘá´Ęá´á´ Y AsĘĘĘâ`,jpegThumbnail: catalogo}}}
//â°ââââââââââââââââââââââ¯
//á­Ĩđēá­ĸââââđ°đ´đ¨đŽđŦđĩ đŊđŦđšđ°đ­đ°đĒđ¨đĢđ¨ââââá­Ĩđēá­ĸ
global.fakeimg = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"imageMessage": { "title":`*AĘĘá´Ęá´á´ Y AsĘĘĘâĨī¸*`, "h": `Hmm`,'seconds': '99999', 'imagePlayback': 'true', 'caption': `đąâ¸ŊâNĘá´É´Cá´á´Bá´á´ - MDđâ¨áââ°\n    đAĘĘá´Ęá´á´ Y AsĘĘĘâ`, 'jpegThumbnail': catalogo }}}
//â°ââââââââââââââââââââââ¯
//á­Ĩđēá­ĸââââđ´đŦđĩđēđ¨đąđŦ đŊđŦđšđ°đ­đ°đĒđ¨đĢđļââââá­Ĩđēá­ĸ
global.fakemsg = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "17608914335-1625305606@g.us" } : {}) }, message: { "extendedTextMessage": { "text":'đąâ¸ŊâNĘá´É´Cá´á´Bá´á´ - MDđâ¨áââ°\nđAĘĘá´Ęá´á´ Y AsĘĘĘâ', "title": 'đąâ¸ŊâNĘá´É´Cá´á´Bá´á´ - MDđâ¨áââ°', 'jpegThumbnail': catalogo}}}
//â°ââââââââââââââââââââââ¯
//á­Ĩđēá­ĸââđŗđļđĒđ¨đŗđ°đđ¨đĒđ°đļĖđĩ đŊđŦđšđ°đ­đ°đĒđ¨đĢđ¨ââá­Ĩđēá­ĸ
global.flocation = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `đąâ¸ŊâNĘá´É´Cá´á´Bá´á´ - MDđâ¨áââ°\n   đAĘĘá´Ęá´á´ Y AsĘĘĘâ`,jpegThumbnail: catalogo}} }
//â°ââââââââââââââââââââââ¯
//á­Ĩđēá­ĸââââđŊđ°ĖđĢđŦđļ đŊđŦđšđ°đ­đ°đĒđ¨đĢđļââââá­Ĩđēá­ĸ
global.fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`đąâ¸ŊâNĘá´É´Cá´á´Bá´á´ - MDđâ¨áââ°`, "h": `Hmm`,'seconds': '2022', 'caption': `đąâ¸ŊâNĘá´É´Cá´á´Bá´á´ - MDđâ¨áââ°`, 'jpegThumbnail': catalogo}} }
//â°ââââââââââââââââââââââ¯
//á­Ĩđēá­ĸââââđŗđ°đĩđ˛đŽđˇ đŊđŦđšđ°đ­đ°đĒđ¨đĢđļââââá­Ĩđēá­ĸ
global.fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "Alberto", "caption": `đąâ¸ŊâNĘá´É´Cá´á´Bá´á´ - MDđâ¨áââ°\n      đAĘĘá´Ęá´á´ Y AsĘĘĘâ`, 'jpegThumbnail': catalogo}} }
//â°ââââââââââââââââââââââ¯
//á­Ĩđēá­ĸâââđˇđšđļđĢđŧđĒđģđļ đŊđŦđšđ°đ­đ°đĒđ¨đĢđļâââá­Ĩđēá­ĸ
global.fproducto = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "17608914335@s.whatsapp.net" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": catalogo }, "title": `đąâ¸ŊâNĘá´É´Cá´á´Bá´á´ - MDđâ¨áââ°`, "description": "NyanCatBot-MD", "currencyCode": "USD", "priceAmount1000": "200000000", "retailerId": "Ghost", "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
//â°ââââââââââââââââââââââ¯
//á­Ĩđēá­ĸââââđŗđ°đŊđŦ đŗđļđĒđ¨đŗđ°đđ¨đĒđ°đļĖđĩââââá­Ĩđēá­ĸ
global.liveloc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false  ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption":"đąâ¸ŊâNĘá´É´Cá´á´Bá´á´ - MDđâ¨áââ°","h": `đąâ¸ŊâNĘá´É´Cá´á´Bá´á´ - MDđâ¨áââ°`, 'jpegThumbnail': catalogo}}}
//â°ââââââââââââââââââââââ¯
//á­Ĩđēá­ĸâââđˇđšđļđĢđŧđĒđģđļ đŊđŦđšđ°đ­đ°đĒđ¨đĢđļ 2âââá­Ĩđēá­ĸ
global.fproducto2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": catalogo }, "title": `đąâ¸ŊâNĘá´É´Cá´á´Bá´á´ - MDđâ¨áââ°`, "retailerId": "đąâ¸ŊâNĘá´É´Cá´á´Bá´á´ - MDđâ¨áââ°", "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
//â°ââââââââââââââââââââââ¯
//á­Ĩđēá­ĸâââđŊđ°đŦđžđļđĩđĒđŦ đŊđŦđšđ°đ­đ°đĒđ¨đĢđļâââá­Ĩđēá­ĸ
global.fakevo = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: { imageMessage: { mimetype: 'image/jpeg', caption: botname, jpegThumbnail: catalogo, viewOnce: true }}}
//â°ââââââââââââââââââââââ¯
//á­Ĩđēá­ĸâââđŊđ°đŦđžđļđĩđĒđŦ đŊđŦđšđ°đ­đ°đĒđ¨đĢđļ #2âââá­Ĩđēá­ĸ
global.fakevo = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: { videoMessage: { mimetype: 'video/mp4', caption: botname, jpegThumbnail: catalogo, viewOnce: true }}}
//â°ââââââââââââââââââââââ¯

//á­Ĩđá­ĸââââââđ¨đĢ đĢđŦ đŽđšđŧđˇđļââââââá­Ĩđá­ĸ
global.adgp = { contextInfo: { externalAdReply: { showAdAttribution: true, title: 'JhanX-Bot-MD', body: global.botname, sourceUrl: global.linkgc, thumbnail: miniurl }}}
//â°ââââââââââââââââââââââ¯

//á­Ĩđá­ĸâââââđ¨đĢ đĢđŦ đ°đĩđēđģđ¨đŽđšđ¨đ´âââââá­Ĩđá­ĸ
global.adig = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: "https://instagram.com/jonathhanxit?igshid=MDE2OWE1N2Q=", mediaType: "VIDEO", description: "https://Instagram.com/rlxfly.uw",  title: 'Test', body: `hola`, thumbnail: miniurl, sourceUrl: 'http://s.id/0x404' }}}


//á­Ĩđžá­ĸâââââââđ˛đŦđđē đ¨đˇđ°đēâââââââá­Ĩđžá­ĸ
global.keysZens = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.lolkeys = ['2e0da1f78d1721134b21816d', '902c3bc9d8c08b0dcf8f5373', '808693688ecc695293359089', '85faf717d0545d14074659ad']
global.lolkeysapi = lolkeys[Math.floor(lolkeys.length * Math.random())]
//â°ââââââââââââââââââââââ¯

//á­Ĩâá­ĸââââââđģđ°đŦđ´đˇđļ đšđˇđŽââââââá­Ĩâá­ĸ
global.stime = function clockString(seconds) {
  var d = Math.floor(seconds / (1000 * 60 * 60 * 24));
  var h = Math.floor((seconds / (1000 * 60 * 60)) % 24);
  var m = Math.floor((seconds / (1000 * 60)) % 60);
  var s = Math.floor((seconds / 1000) % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia," : " Dias,") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Horas, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minutos, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay ? dDisplay + hDisplay + mDisplay + sDisplay : '0 Segundos'
};
//â°ââââââââââââââââââââââ¯

//á­Ĩâá­ĸââââââđģđ°đŦđ´đˇđļ đšđˇđŽââââââá­Ĩâá­ĸ
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'una linda noche đ'; break; case 1: hour = 'una linda noche đ¤'; break; case 2: hour = 'una linda noche đĻ'; break; case 3: hour = 'una linda maÃąana â¨'; break; case 4: hour = 'una linda maÃąana đĢ'; break; case 5: hour = 'una linda maÃąana đ'; break; case 6: hour = 'una linda maÃąana đ'; break; case 7: hour = 'una linda maÃąana đ'; break; case 8: hour = 'una linda maÃąana đĢ'; break; case 9: hour = 'una linda maÃąana â¨'; break; case 10: hour = 'un lindo dia đ'; break; case 11: hour = 'un lindo dia đ¨'; break; case 12: hour = 'un lindo dia â'; break; case 13: hour = 'un lindo dia đ¤'; break; case 14: hour = 'una linda tarde đ'; break; case 15: hour = 'una linda tarde đĨ'; break; case 16: hour = 'una linda tarde đš'; break; case 17: hour = 'una linda tarde đ'; break; case 18: hour = 'una linda noche đ'; break; case 19: hour = 'una linda noche đ'; break; case 20: hour = 'una linda noche đ'; break; case 21: hour = 'una linda noche đ'; break; case 22: hour = 'una linda noche đ'; break; case 23: hour = 'una linda noche đ'; break;}
  global.saludo = "Espero que tengas " + hour;
//â°ââââââââââââââââââââââ¯

global.multiplier = 9999 

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'đ',
      limit: 'đ',
      exp: 'đšī¸'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/	
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/	
const {	Presence, Mimetype, waChatkey, ProxyAgent, processTime, mentionedJid, MessageType, WAyorissection, ReyorissectMode, MessageOptions, GroupSettingChange, WALocationMessage, WA_DEFAULT_EPHEMERAL, WA_MESSAGE_STUB_TYPES, } = 
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/	
//»»»Node_Module fitur 
require('@adiwajshing/baileys')
//»»»Node_Module fitur 
const simple = require('./database/lib/simple.js')
const { exec, spawn, execSync } = require('child_process')
const imageToBase64 = require("image-to-base64");
const hx = require('hxz-api')
const ffmpeg = require('fluent-ffmpeg')
const axios = require("axios")
const ms = require('parse-ms')
const crypto = require('crypto') 
const yts = require('yt-search')
const request = require('request')
const fetch = require('node-fetch')
const googleImage = require('g-i-s')
const toMs = require('ms')
const brainly = require('brainly-scraper')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
const fs = require('fs')
const speed = require('performance-now')
const moment = require('moment-timezone')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const ggs = require('google-it')
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/	
//»»»database Lib files
const { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./database/lib/about_level")
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./database/lib/about_user");
const { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require("./database/lib/rpgfunction");

const { addRegisteredUser, getRegisteredRandomId, checkRegisteredUser } = require('./database/lib/register'); 
const { y2mateA, y2mateV } = require('./database/lib/y2mate')
const premium = require("./database/lib/premiun");
const { yta, ytv, igdl, upload, formatDate } = require('./database/lib/ytdl') 
const { addCmd, getCmd, checkSCommand, getCommandPosition } = require("./database/lib/scommand");
const { color, bgcolor } = require('./database/lib/color')
const { fetchJosn, etchText } = require('./database/lib/fetcher')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./database/lib/functions')
const setting = JSON.parse(fs.readFileSync('./config/setting.json'))
const { runtime, sleep } = require('./database/lib/myfunc')
const Ranking = require('./database/lib/Ranking')
const _sewa = require("./database/lib/sewa");
const { webp2mp4File } = require("./database/lib/webp2mp4");
const { pinterest } = require('./database/lib/pinterest')
const { mediafireDl } = require('./database/lib/mediafire')
const { jadibot, stopjadibot, listjadibot } = require("./database/lib/jadibot");
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./database/lib/uploadimage')
const { gcbotwa } = require('./database/shop/grupbot')
const { fetchJson, getBase64, kyun, createExif } = require('./database/lib/fetch')
const { msgFilter } = require('./database/lib/antispam')
const afk = require("./database/lib/afk");
const { lirikLagu } = require('./database/lib/lirik.js')
const { addCommands, checkCommands, deleteCommands } = require('./database/lib/autoresp')
//━━━━[ Setting ]━━━━//
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
owner = setting.OwnerNumber
owner2 = `${owner}@s.whatsapp.net`
botname = setting.BotName
ownername = setting.OwnerName
zerokey = setting.Zero
lolkey = setting.lolkey
fake = setting.fake
const fakeimage = fs.readFileSync ('./database/image/banner.jpg')
const thumb = fs.readFileSync ('./database/image/thumb.jpg')
thumbnail = setting.thumb
limitCount = setting.limitCount
gcounttprem = "50" 
gcounttuser = "25" 
prefixStatus = true;
antidelete = false
antitrol = true 
banChats = true
bugc = true
const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
baterai = 'unknown'
charging = 'unknown'

hit_today = []
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/	
const pendaftar = JSON.parse(fs.readFileSync('./database/user/pengguna.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const _antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))
const _scommand = JSON.parse(fs.readFileSync('./database/prefix_seticker.json'))
const limit = JSON.parse(fs.readFileSync('./database/limitan/limit.json'))
const balance = JSON.parse(fs.readFileSync('./database/limitan/balance.json'));
const glimit = JSON.parse(fs.readFileSync('./database/limitan/glimit.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const banned = JSON.parse(fs.readFileSync('./database/banned.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user/register.json'))
const _RPG = JSON.parse(fs.readFileSync('./database/rpg/inventori.json'))
const _petualang = JSON.parse(fs.readFileSync('./database/rpg/_petualang.json'))
const _welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
const  sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
const event = JSON.parse(fs.readFileSync('./database/group/event.json'))
const _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/	
const tebakgambar = JSON.parse(fs.readFileSync('./database/src/tebakgambar.json'))
const caklontong = JSON.parse(fs.readFileSync('./database/src/caklontong.json'))
const family = JSON.parse(fs.readFileSync('./database/src/family100.json'))
const siapakahaku = JSON.parse(fs.readFileSync('./database/src/siapakahaku.json'))
const tebakanime = JSON.parse(fs.readFileSync('./database/src/tebakanime.json'))
const tebakkalimat = JSON.parse(fs.readFileSync('./database/src/tebakkalimat.json'))
const tebakkata = JSON.parse(fs.readFileSync('./database/src/tebakkata.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./database/src/tebaklirik.json'))
const tekateki = JSON.parse(fs.readFileSync('./database/src/tekateki.json'))
const susunkata = JSON.parse(fs.readFileSync('./database/src/susunkata.json'))
const absen = JSON.parse(fs.readFileSync('./database/src/absen.json'))
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/	
//Lomgo
const mrpg = fs.readFileSync('./database/media/mrpg.jpg')
const devil = fs.readFileSync('./database/media/devil.jpg')
const slime = fs.readFileSync('./database/media/slime.jpg')
const demon = fs.readFileSync('./database/media/demon.jpg')
const goblin = fs.readFileSync('./database/media/goblin.jpg')
const demonking = fs.readFileSync('./database/media/demonking.jpg')
const behemoth = fs.readFileSync('./database/media/behemoth.jpg')
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/	
//------------------------ < T E M P > ------------------------\\
let setiker = JSON.parse(fs.readFileSync('./database/media/stik.json'))
let imagenye = JSON.parse(fs.readFileSync('./database/media/image.json'))
let videonye = JSON.parse(fs.readFileSync('./database/media/video.json'))
let audionye = JSON.parse(fs.readFileSync('./database/media/vn.json'))
const { pc_sewa } = require('./database/shop/sewa')
//━━━━[ sticker ]━━━━//
const Exif = require('./database/lib/exif');
const exif = new Exif();
//━━━━[ Time ]━━━━//
let d = new Date
let locale = 'en'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
    
numbernye = '0'
msgId="B826873620DD5947E683E3ABE663F263"

/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/	
module.exports = yoriss = async (yoriss, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		
		if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3 && bugc && !mek.key.fromMe) {
		nums = mek.participant
        longkapnye = "TANDAI TELAH DIBACA\n".repeat(200)
        tekuss = `\`\`\`TANDAI TELAH DIBACA !!!\`\`\`${longkapnye}\`\`\`@⁨${nums.split('@')[0]} Terdeteksi Telah Mengirim Bug, @⁨${nums.split('@')[0]} Akan Dikick!\`\`\`\n`
        yoriss.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
        yoriss.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        }
		m = simple.smsg(yoriss, mek)
		const antibot = m.isBaileys
		        
		global.blocked
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message              
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		m = simple.smsg(yoriss, mek)
		const { text, extendedText, contact, hydratedButtons, contactsArray, groupInviteMessage, quoted, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
        const typei = Object.keys(mek.message)[0]
	    global.prefix
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
               
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()        		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const v = args.join(' ')
		const c = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = yoriss.user.jid
		const arg = body.substring(body.indexOf(' ') + 1)
		const ownerNumber = [`${owner}@s.whatsapp.net`, `${owner}@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
	    const sender = mek.key.fromMe ? yoriss.user.jid : isGroup ? mek.participant : mek.key.remoteJid;
        hit_today.push(command);
		let senderr = mek.key.fromMe ? yoriss.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0]     		
		const totalchat = await yoriss.chats.all()
		const groupMetadata = isGroup ? await yoriss.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? yoriss.user.jid : yoriss.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? yoriss.user.name : conts.notify || conts.vname || conts.name || '-'
        const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isEventon = isGroup ? event.includes(from) : false
		const isNsfw = isGroup ? nsfww.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isUseri = pendaftar.includes(sender)
		const isAfkOn = afk.checkAfkUser(sender, _afk)
		const isMybot = isOwner || mek.key.fromMe
		const isUser = checkRegisteredUser(sender)
		const isPetualang = checkPetualangUser(sender) 
		const isSewa = _sewa.checkSewaGroup(from, sewa)	
		const isPremium = isOwner || mek.key.fromMe ? true : premium.checkPremiumUser(sender, _premium)
		const gcount = isPremium ? gcounttprem : gcounttuser
	    const isBanned = banned.includes(sender)
		if (isCmd && isBanned) return reply('anda terbanned')
        //const participant = quoted.mek.fromMe ? this.user.jid : (quoted.participant || quoted.mei.participant || quoted.mek.remoteJid)
		
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/	
        const reply2 = (teks) => {
            yoriss.sendMessage(from, teks, text, {quoted:mek})
        }
        
if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (mek.key.fromMe) return
reply2('Fake Troli Detected \n\n')
await yoriss.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = `GoodNigh`
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = `GooodEvening`
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = `GoodEvening`
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = `GoodAfternoon`
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = `GoodMoorning`
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = `GoodNigh`
}
try {
		pporang = await yoriss.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		
const gime = await getBuffer(`https://hardianto.xyz/api/anime/random?sfw=neko&apikey=hardianto`)		
//━━━━[ Mess And Others ]━━━━//
		//>>>>>>>>STICKER<<<<<<<\\
		const sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/owner.webp')
			yoriss.sendMessage(hehe, ano, sticker, { quoted: yor})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/notadmin.webp')
			yoriss.sendMessage(hehe, ano, sticker, { quoted: yor})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/admin.webp')
			yoriss.sendMessage(hehe, ano, sticker, { quoted: yor})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/wait.webp')
			yoriss.sendMessage(hehe, ano, sticker, { quoted: yor})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			yoriss.sendMessage(hehe, ano, sticker, { quoted: yor})
		}
const createSerial = (size) => {
		return crypto.randomBytes(size).toString('hex').slice(0, size)}
		mess = {
		cekgame : `-1 tersisa ${isOwner ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}\nLimit hampr habis`,
		hu: 'ಥ‿ಥ',
		glimit : '```Limit game lu abis bwang```',
		limit: `Upss maaf kak ${pushname} limit kamu sudah habis`,
		wait: '```𝘛𝘶𝘯𝘨𝘨𝘶 𝘉𝘦𝘯𝘵𝘢𝘳𝘳...```',
		success: '```𝘚𝘶𝘤𝘤𝘦𝘴𝘴 𝘕i𝘩```',
		error: {
		stick: '```𝘚𝘵𝘪𝘤𝘬𝘦𝘳 𝘈𝘦 𝘟𝘰𝘯𝘵𝘰𝘭```',
		Iv: '```𝘓𝘪𝘯𝘬 𝘌𝘙𝘙𝘖𝘙 𝘉𝘳𝘶𝘩𝘩_-```',
		},
		only: {
		group: '```𝘒𝘩𝘶𝘴𝘶𝘴 𝘎𝘳𝘰𝘶𝘱 𝘉𝘳𝘰𝘰```',
		owner: 'Khusus Owner Slurr',
		admin: 'Khusus Admin...',
		prem: 'Khusus Member Premium...',
		event: 'Event Belum Aktif Di Group ini!!',
		bot: 'Bot Harus Admin Boss',
		premium: 'khusus yang premium lurr',	    
		player: `Maaff kak ${pushname} sepertinya kakak bukan petualang!!\nUntuk menjadi petualang silahkan ketik :\n${prefix}joinrpg`,	           
		}
		} 
        var premi = 'No Premium User'
			if (isPremium) {
				premi = 'Premiun User'
			} 
			if (isOwner) {
				premi = 'This Is Owner'
			}	                          
			    var elit = 'Player Biasa'
			if (isPremium) {
				elit = 'Player Pro'
			} 
			if (isOwner) {
				elit = 'GM in GAME'
			}
			
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
/*        const reply = (teks) => {
            yoriss.sendMessage(from, teks, text, {quoted:mek})
        }*/
       
        
        const sendMess = (hehe, teks) => {
            yoriss.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? yoriss.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : yoriss.sendMessage(from, teks.trim(), extendedText, { quoted: yor, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
			yoriss.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}

        function monospace(string) {
            return '```' + string + '```'
        }
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        } 
                function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
	const nebal = (angka) => {
	return Math.floor(angka)
	}        
        var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
       
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
		const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
		const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
		const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')               		
//━━━━[ Button ]━━━━//

		const sendButton = async (from, context, fortext, but, mek) => {
		buttonMessages = {
		contentText: context,
		footerText: fortext,
		buttons: but,
		headerType: 1
		}
		yoriss.sendMessage(from, buttonMessages, buttonsMessage, {
		quoted: yor
		})
		}
		const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        yoriss.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
        const sendButImage = async (from, context, fortext, img, but, mek) => {
		jadinya = await yoriss.prepareMessage(from, img, image)
		buttonMessagesI = {
		imageMessage: jadinya.message.imageMessage,
		contentText: context,
		footerText: fortext,
		buttons: but,
		headerType: 4
		}
		yoriss.sendMessage(from, buttonMessagesI, buttonsMessage, {
		quoted: yor,
		contexInfo: yor
		})
        }
        const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
        kma = vid1
        mhan = await yoriss.prepareMessage(from, kma, video)
        const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5
        }
        yoriss.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
        var sendButloc = (from, title, text, desc, button, sen, men, file) => {
        return yoriss.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: yor, contextInfo: {"mentionedJid": men ? men : []}})
        }
///Button Location
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return yoriss.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        } 
 ///Button Document
const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await yoriss.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
yoriss.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

       const add = function(from, orangnya){
	   yoriss.groupAdd(from, orangnya)
       }
//━━━━[ Gathering Fake ]━━━━//
const yor = {
	key: { 
	fromMe: false,
	participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {})},
	 message: { 
"extendedTextMessage": {
"text": `*𝗛𝗮𝗶 𝗸𝗮𝗸 ${pushname}*`,
"title": `_${pushname}_`,
'jpegThumbnail': ofrply
},mentionedJid:[sender]}, quoted : mek}

		const reply = (teks) => {
			yoriss.sendMessage(from, teks, text, { thumbnail: gime, sendEphemeral: true, quoted: yor, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: ``,body:"",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://wa.me/6281358965281?text=Assalamualaikum`}}})
		} 
		
        const fakeitem = (teks) => { yoriss.sendMessage(from, teks, text, { quoted: { key:{ fromMe:false, participant:`0@s.whatsapp.net`, ...(from ? { remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync("./database/image/thumb.jpg"),"itemCount":9999999999,"status":"INQUIRY","surface":"CATALOG","message": `${ucapanWaktu} ${pushname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}
		const ftrol = {
		key : {
		participant : '0@s.whatsapp.net'
		},
		message: {
		orderMessage: {
		itemCount : 123,
		status: 1,
		surface : 1,
		message: `${ucapanWaktu} ${pushname}`, 
		orderTitle: `${ucapanWaktu} ${pushname}`,
		thumbnail: thumb, //Gambarnye
		sellerJid: '0@s.whatsapp.net' 
		}
		}
		}
		const ftok = {
		key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
		"productMessage": {
		"product": {
		"productImage":{
		"mimetype": "image/jpeg",
		"jpegThumbnail": thumb //Gambarnye
		},
		"title": `${ucapanWaktu} ${pushname}`, //Kasih namalu 
		"description": `${botname}`, 
		"currencyCode": "USD",
		"priceAmount1000": "2000",
		"retailerId": `${ucapanWaktu} ${pushname}`,
		"productImageCount": 1
		},
		"businessOwnerJid": `0@s.whatsapp.net`
		}
		}
		}
		const floc = {
		key : {
		participant : '0@s.whatsapp.net'
		},
		message: {
		liveLocationMessage: {
		caption: `${ucapanWaktu} ${pushname}`,
		jpegThumbnail: thumb
		}
		}
		}
		const fdoc = {
		key : {
		participant : '0@s.whatsapp.net'
		},
		message: {
		documentMessage: {
		title: `${ucapanWaktu} ${pushname}`, 
		jpegThumbnail: thumb
		}
		}
		}
		const fvid = {
		key: { 
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? 
		{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
		},
		message: { 
		"videoMessage": { 
		"title": `${ucapanWaktu} ${pushname}`,
		"h": `${ucapanWaktu} ${pushname}`,
		'duration': '99999', 
		'caption': `${ucapanWaktu} ${pushname}`,
		'jpegThumbnail': thumb
		}
		}
		}
		const fgi = {
		key: { 
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? 
		{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
		},
		message: { 
		"videoMessage": { 
		"title": `${ucapanWaktu} ${pushname}`,
		"h": `${ucapanWaktu} ${pushname}`,
		'duration': '99999', 
		'gifPlayback': 'true', 
		'caption': `${ucapanWaktu} ${pushname}`,
		'jpegThumbnail': thumb
		}
		}
		}
		const fvoc = {
		key: { 
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? 
		{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
		},
		message: { 
		"audioMessage": {
		"mimetype":"audio/ogg; codecs=opus",
		"seconds": "99999",
		"ptt": "true"
		}
		} 
		}
		const fonceimg = {
		key: {
		fromMe: false,
		participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "status@broadcast" } : {}) },
		message: {
		imageMessage: {
		viewOnce: true
		},
		},
		};
		const foncevid = { 
		key: {fromMe: false, remoteJid: "6281315995629@g.us", participant: '0@s.whatsapp.net'}, 
		message: { 
		videoMessage: { 
		viewOnce: true
		},
		},
		};
        
//━━━━[ Storage ]━━━━//
		if (antibot === true) return
		const katalog = (teks) => {
             res = yoriss.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "© Project Pemuda", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:yor})
             yoriss.relayWAMessage(res)
        }
        
        const hideTag = async function(from, text){
        let anu = await yoriss.groupMetadata(from)
        let members = anu.participants
        let ane = []
        for (let i of members){
        ane.push(i.jid)
        }
        yoriss.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./database/image/thumb.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
        }
        const sendStickerFromUrl = async(to, url) => {
		var names = Date.now() / 10000;
		var download = function (uri, filename, callback) {
		request.head(uri, function (err, res, body) {
		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
		};
		download(url, './stik' + names + '.png', async function () {
		console.log('selesai');
		let filess = './stik' + names + '.png'
		let asw = './stik' + names + '.webp'
		exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
		let media = fs.readFileSync(asw)
		yoriss.sendMessage(to, media, MessageType.sticker,{quoted:mek})
		fs.unlinkSync(filess)
		fs.unlinkSync(asw)
		});
		});
		}
		const sendFileFromUrl = async(link, type, options) => {
        hasil = await getBuffer(link)
	    yoriss.sendMessage(from, hasil, type, options).catch(e => {
	    fetch(link).then((hasil) => {
	    yoriss.sendMessage(from, hasil, type, options).catch(e => {
	    yoriss.sendMessage(from, { url : link }, type, options).catch(e => {
	    reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	    console.log(e)
		})
		})
		})
		})
		}
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           yoriss.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
           })
           }
           const addATM = (sender) => {
        	const objo = {id: sender, uang : 0}
            uang.push(objo)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang, null, 2))
           }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang, null, 2))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        	
 const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        } 
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
                      
           if (budo.startsWith(`>`)){
           	if (!isOwner) return
				const sep = budo.split("\n")
                let exc = budo.replace(sep[0]+"\n", "")
                const print = function(budo){
                    yoriss.sendMessage(from, util.format(budo))
                }
                console.log(exc)
                eval("(async () => {try{"+exc+"}catch(e){yoriss.sendMessage(from,  e.toString())}})()")
			}
			if (budo.startsWith(`$`)){
				if (!isOwner) return
				const sep = budo.split("\n")
                let exc = budo.replace(sep[0]+"\n", "")
                exec(exc, (err, stdout) => {
					if (err) return yoriss.sendMessage(from, `root @DecodeBotz:~ ${err}`, text, { quoted: yor })
					if (stdout) {
						yoriss.sendMessage(from, stdout, text, {quoted:mek})
					}
				})
			}
			if (budo.startsWith(`~`)){
				if (!isOwner) return
				const sep = budo.split("\n")
                let exc = budo.replace(sep[0]+"\n", "termux-")
                exec(exc, (err, stdout) => {
					if (err) return yoriss.sendMessage(from, `root @DecodeBotz:~ ${err}`, text, { quoted: yor })
					if (stdout) {
						yoriss.sendMessage(from, stdout, text, {quoted:mek})
					}
				})
			}
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/	

// AFK
		if (isGroup && !mek.key.fromMe) {
		for (let x of mentionUser) {
		if (afk.checkAfkUser(x, _afk)) {
		const getId = afk.getAfkId(x, _afk)
		const getReason = afk.getAfkReason(getId, _afk)
		const getTime = afk.getAfkTime(getId, _afk)
		const cptl = `*「 AFK MODE 」*\n*Sssttt! ${pushname} Orangnya lagi AFK, jangan diganggu!*\n➸ *Alasan*  : ${getReason}\n➸ *Sejak* : ${getTime}`
		mentions(cptl, x, true)
		}}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
	    const getTime = afk.getAfkTime(sender, _afk)
		const getReason = afk.getAfkReason(sender, _afk)
	    const ittung = ms(await Date.now() - getTime)
		const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		reply(pep)
		_afk.splice(afk.getAfkPosition(sender, _afk), 1)
		fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }		    
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/	        
        const sendKontak = (from, nomor, nama, org = "") => {
        const vcard =
        'BEGIN:VCARD\n' +
        'VERSION:3.0\n' +
        'N:Sy;Bot;;;\n' +
        `FN:${ownername}\n` +
        `item1.TEL;waid=${owner}:${owner}\n` +
        `item1.X-ABLabel:👑 Creator\n` +
        `item2.EMAIL;type=INTERNET:Recode.Botz@gmail.com\n` +
        `item2.X-ABLabel:📧 Email\n` +
        `item3.URL:https://kurang/turu.com\n` +
        `item3.X-ABLabel:⚙️ Channel Owner\n` +
        `item4.ADR:;;🇮🇩 Indonesia;;;;\n` +
        `item4.X-ABADR:ac\n` +
        `item4.X-ABLabel:🌍 Region\n` +
        `item5.X-ABLabel:⚔️ Fake - Botz Owner\n` +
        'END:VCARD';
        yoriss.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: yor})
        }
        		
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       yoriss.groupRemove(from, [i])
        }
        }

       const kickMember = async(id, target = []) => {
           let group = await yoriss.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = yoriss.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await yoriss.groupRemove(to, [i])
        } else {
           await yoriss.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}

if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd ) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    sendButton(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${pushname}`, [{"buttonId": `!tebakgambar`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}],)                                                                         
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Salah!")
                }
            }
 // SIAPA AKU
if (siapakahaku.hasOwnProperty(sender.split('@')[0]) && !isCmd ) {
                jawaban = siapakahaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete siapakahaku[sender.split('@')[0]]
                    sendButton(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${pushname}`, [{"buttonId": `!siapakahaku`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}],)
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/siapakahaku.json", JSON.stringify(siapakahaku))
                } else {
                    reply("Jawaban Salah!")
                }
            }
// TEBAK KALIMAT
if (tebakkalimat.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakkalimat[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                     delete tebakkalimat[sender.split('@')[0]]
                    sendButton(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${pushname}`, [{"buttonId": `!tebakkalimat`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], )
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
                } else {
                    reply("Jawaban Salah!")
                }
            }
// TEBAK KALIMAT
if (tebakkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tebakkata[sender.split('@')[0]]
                    sendButton(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${pushname}`, [{"buttonId": `!tebakkata`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], )
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
                } else {
                    reply("Jawaban Salah!")
                }
            }
// TEBAK LIRIK
if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tebaklirik[sender.split('@')[0]]
                    sendButton(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${pushname}`, [{"buttonId": `!tebaklirik`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], )
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                } else {
                    reply("Jawaban Salah!")
                }
            }
// TEKA TEKI
if (tekateki.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tekateki[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tekateki[sender.split('@')[0]]
                    sendButton(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${pushname}`, [{"buttonId": `!tekateki`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], )
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
                } else {
                    reply("Jawaban Salah!")
                }
            }
//SUSUN KATA
if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete susunkata[sender.split('@')[0]]
                    sendButton(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${pushname}`, [{"buttonId": `!susunkata`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}],)
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                } else {
                    reply("Jawaban Salah!")
                }
            }
// CAK LONTONG
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete caklontong[sender.split('@')[0]]
                    sendButton(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${pushname}`, [{"buttonId": `!caklontong`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : yor})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                } else {
                    reply("Jawaban Salah!")
                }
            }

// TEBAK ANIME
if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                     delete tebakanime[sender.split('@')[0]]
                    sendButton(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${pushname}`, [{"buttonId": `!tebakanime`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : yor})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                } else {
                    reply("Jawaban Salah!")
                }
            }
        if (isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 2) + 10
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }   
    yoriss.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: yoriss.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            yoriss.relayMessage(jid, template.message, { messageId: template.key.id })
    }
			    //AUTO RESPON
      stod = `${sender}`
      for (let i = 0; i < commandsDB.length ; i++) {
      if (budy == commandsDB[i].pesan) {
      yoriss.sendMessage(from, commandsDB[i].balasan, text, {sendEphemeral: true, quoted: yor, contextInfo: { forwardingScore: 600, isForwarded: true, mentionedJid : [stod]}})
      
      
      }
      }                          
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/	
        const daftar1 = `*ꜱᴇʙᴇʟᴜᴍ ᴍᴇɴɢᴀᴋꜱᴇꜱ ʙᴏᴛ ᴠᴇʀɪꜰʏ*\n*ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ ʏᴀᴀ...*`
        const daftar2 = '𝑲𝒍𝒊𝒌 𝑻𝒐𝒎𝒃𝒐𝒍 𝑫𝒊 𝑩𝒂𝒘𝒂𝒉 𝑼𝒏𝒕𝒖𝒌 𝑽𝒆𝒓𝒊𝒇𝒚 𝑲𝒂𝒌'
        const daftar3 = [{buttonId: `!verify`,buttonText: {displayText: `◯ ${pushname} ◯`,},type: 1,},]

let Prem1 = `𝙽𝙾𝚃 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙳𝙴𝚃𝙴𝙲𝚃`
let Prem2 = `*Hai kak @${senderr.split('@')[0]}*\nJika kamu ingin menggunakan fitur ini kamu harus menjadi user premium\nChat owner jika ingin membeli premium`
let Prem3 = [{
buttonId: `${prefix}owner`,
buttonText: {
displayText: ` 𝗢𝘄𝗻𝗲𝗿  `,
},
type: 1,}]
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/	
        var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
        var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎']
        var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']        
        var petnya = ['😾','🐺','🦊','🐶','🐰']
        var makan = ['🌭','🌮','🌯','🍙','🍝','🍕','🍘','🍟','🍞','🍖','🍡']
        var buahan = ['🍇','🍎','🍏','🍐','🍒','🍊','🍋','🍑','🍓'] 
        const levelRole = getLevelingLevel(sender)        
        var role = 'Warrior III'
        if (levelRole <= 2) {
            role = 'Warrior II'
        } else if (levelRole <= 4) {
            role = 'Warrior I'
        } else if (levelRole <= 6) {
            role = 'Elite III'
        } else if (levelRole <= 8) {
            role = 'Elite II'
        } else if (levelRole <= 10) {
            role = 'Elite I'
        } else if (levelRole <= 12) {
            role = 'Master III'
        } else if (levelRole <= 14) {
            role = 'Master II'
        } else if (levelRole <= 16) {
            role = 'Master I'
        } else if (levelRole <= 18) {
            role = 'GrandMaster III'
        } else if (levelRole <= 20) {
            role = 'GrandMaster II'
        } else if (levelRole <= 22) {
            role = 'GrandMaster I'
        } else if (levelRole <= 24) {
            role = 'Epic III'
        } else if (levelRole <= 26) {
            role = 'Epic II'
        } else if (levelRole <= 28) {
            role = 'Epic I'
        } else if (levelRole <= 30) {
            role = 'Legend III'
        } else if (levelRole <= 32) {
            role = 'Legend II'
        } else if (levelRole <= 34) {
            role = 'Legend I'
        } else if (levelRole <= 36) {
            role = 'Mythic'
        } else if (levelRole <= 38) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        }
            if (isGroup) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                var getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                addLevelingLevel(sender, 1)   
                var lvlup = `*➟「 LEVEL UP 」*\n\n*➟ User :* ${pushname}\n*➟ Xp :* ${getLevelingXp(sender)}/${requiredXp}\n*➟ Level :* ${getLevel} > ${getLevelingLevel(sender)}\n*➟ Role :* ${role}\n`
                gggh = `Congrats 🎉`            
		        but = [{ buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
             sendButLocation(from, lvlup, gggh, ofrply, but)
               }
            } catch (err) {
                console.error(err)
            }
        }
if (budy.includes(`Assalamualaikum`)) {
satu = fs.readFileSync('./database/media/waalaikumsalam.mp3');
yoriss.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/						
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
//*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/	       
    if (!isGroup && isCmd) {console.log(color('[ 𝗣𝗲𝘀𝗮𝗻 ]', 'greenyellow'), color(`User Pribadi`, 'greenyellow'))}   
    if (!isGroup && isCmd) {console.log(color(`[`, 'yellow'), color(`${command}`, 'cyan'), color(`]`, 'yellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY'), 'white'),  color(`Dari シ︎`, 'red'), color(`${pushname} `, 'magenta'))}       
//*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/	       
    if (isCmd && isGroup) {console.log(color('[ 𝗣𝗲𝘀𝗮𝗻 ]', 'greenyellow'), color(`Group ${groupName}`,'greenyellow'))}
    if (isCmd && isGroup) {console.log(color(`[`, 'yellow'), color(`${command}`, 'cyan'), color(`]`, 'yellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY'), 'white'),  color(`Dari シ︎`, 'red'), color(`${pushname} `, 'magenta'))}
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/	
	if (!command) {console.log(color('[ 𝗣𝗲𝘀𝗮𝗻 ]', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/	

if (isCmd && !isOwner && msgFilter.isFiltered(from)) {
dellayy = `*_Hii ${pushname} Dont Spam, 5 seconds per command_*`
reply(`${dellayy}`)
}
if (isCmd) msgFilter.addFilter(from)	
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/						                  
	
if (!banChats){
if (!isOwner && !mek.key.fromMe) return
}
if (isCmd && !isUseri) {
		  pendaftar.push(sender)
		  fs.writeFileSync('./database/user/pengguna.json', JSON.stringify(pendaftar, null, 2))
		}
switch (command) {

//━━━━[ All Feature ]━━━━//
case 'verify':             
if (isUser) return reply('Your account is verified')
const serialUser = createSerial(18)
	         try {
ppimg = await yoriss.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'}
veri = sender
_registered.push(sender)
fs.writeFileSync('./database/user/register.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
const anuu =`「 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
━━━━━━━━━━━━━━━━━━━
𝐍𝐚𝐦𝐚 : ${pushname}
𝐍𝐨𝐦𝐨𝐫 : wa.me/${sender.split('@')[0]}
𝐓𝐨𝐭𝐚𝐥 : ${_registered.length} User
𝐒𝐞𝐫𝐢𝐚𝐥 : ${serialUser}
𝐏𝐮𝐤𝐮𝐥 : ${jam}
━━━━━━━━━━━━━━━━━━━
*𝐓𝐞𝐫𝐝𝐚𝐟𝐭𝐚𝐫 𝐃𝐢 Recodeebotz*`
ok = `𝗧𝗮𝗻𝗴𝗴𝗮𝗹 ${Tanggal}`
verifygandz = await getBuffer(`https://hardianto.xyz/api/tools/verification?nama=${serialUser}&namaGb=${encodeURI(pushname)}&pepeGb=https://telegra.ph/file/ea5b177822912bb71c9d1.jpg&sn=${_registered.length}&pepeUser=${encodeURIComponent(ppimg)}&bege=https://megayaa.herokuapp.com/api/akaneko/wallpapers&apikey=hardianto`)

but = [{buttonId: `!menu`,buttonText:{displayText: `Menu`},type:1}]
sendButImage(from, anuu, ok, verifygandz, but, yor)
await sleep(3000)
ygfuu = await getBuffer(ppimg)
reply('*Group bot telah di kirim ke private chat*')
sendButLocation(sender, gcbotwa() , `©  ${ownername}`, ygfuu,  [{"buttonId": `!me`,"buttonText": {"displayText": "𝐒𝐞𝐫𝐢𝐚𝐥"},"type": "RESPONSE"}], {})
break          
          
case 'gcbot': case 'grupbot': case 'groupbot':
try {
ppimg1 = await yoriss.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
ppimg1 = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'}
let gcbot = await getBuffer(ppimg1)
reply('Group bot telah di kirim ke private chat')
sendButLocation(sender, gcbotwa() , `©  ${ownername}`,gcbot,  [{"buttonId": `sewabot`,"buttonText": {"displayText": "grup bot"},"type": "RESPONSE"}], {})
break 
         
case 'creategrup':
			    if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					yoriss.groupCreate(argza[0], anu)
					reply(`Sukes membuat grup:\n${argza}`)
                }
				break
				    
case 'baterai':
exec(`termux-batteri-status`, (error, stdout, stderr) => {
			reply(stdout)})
case 'deviceinfo':
exec(`termux-telephony-deviceinfo`, (error, stdout, stderr) => {
			reply(stdout)})
			break			           

case 'menu':
case 'help':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
timestampe = speed();
latensie = speed() - timestampe
     dtod = `${owner}`
     otod = `${owner}@s.whatsapp.net`
     stod = `${sender}`
     stst = await yoriss.getStatus(`${sender.split('@')[0]}@c.us`)
     stst = stst.status == 401 ? 'unknown' : stst.status
     anu = await fetchJson(`https://megayaa.herokuapp.com/api/randomquote`)  
     num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
menu = `*Hallo ${ucapanWaktu} ${pushname}*
*「T O D A Y」*
*┌───────────────────*
*┊∅ Days:* ${Tanggal} 
*┊∅ Time:* ${jam}
*┗───────────────────*
「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧𝗭 」
*┌───────────────────*
*┊∅ Bot Name:* ${botname}
*┊∅ Mode:* ${banChats ? 'Public' : 'self'}
*┊∅ Platform:* Android
*┊∅ Type:* Node.Js
*┊∅ Prefix:* [ *${prefix}* ]
*┊∅ Battery:* ${baterai}
*┊∅ Total Hit:* ${hit_today.length}
*┊∅ Speed:* ${latensie.toFixed(4)} second
*┊∅ Teregister:* ${_registered.length} user
*┗───────────────────*
*Info No : ${num.line_type} - ${num.country_name} - ${num.carrier}*
━━━━━━━━━━━━━━━━━━━━━
_${anu.result.quotes}_`
sendButDocument(from, `${menu}`, '▱▱▰▰▱▱▰▰▱▱▰▰', fs.readFileSync('./database/media/yoriss design'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./database/image/banner.jpg'), filename:`❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘`}, [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'⎙ LIST MENU'},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'❍ DEVELOPER'},type:1}], {quoted: yor})
buf = fs.readFileSync(`./database/media/wataisi.mp3`)
yoriss.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', ptt: true, quoted: yor
})
break




case 'allmenu':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
try {
              profilePicou = await yoriss.getProfilePicture(sender)
              } catch {
              profilePicou = errorImg
}
teks = `*Hallo ${ucapanWaktu} ${pushname}*
▰▱▰▱▰▱▰▱▰▱▰▱▰▱`

turu = `✧⪼ *_Info menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}runtime_*
*_╠❏ ${prefix}speed_*
*_╠❏ ${prefix}rules_*
*_╠❏ ${prefix}sewacheck_*
*_╠❏ ${prefix}sewa_*
*_╠❏ ${prefix}listsewa_*	
*_╠❏ ${prefix}ssweb Url_*
*_╠❏ ${prefix}grupbot_*
*_╠❏ ${prefix}delete Reply messages_*
*_╠❏ ${prefix}antidelete_*
*_╠❏ ${prefix}tts_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Group menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}antilink on / off_*
*_╠❏ ${prefix}welcome on / off_*
*_╠❏ ${prefix}antivirtex on / off_*
*_╠❏ ${prefix}promote @tag_*
*_╠❏ ${prefix}demote @tag_*
*_╠❏ ${prefix}add 628xxxx_*
*_╠❏ ${prefix}kick reply_*
*_╠❏ ${prefix}setppgroup Reply Image_*
*_╠❏ ${prefix}setdesc Text_*
*_╠❏ ${prefix}setname Text_*
*_╠❏ ${prefix}hidetag Text_*
*_╠❏ ${prefix}linkgroup_*
*_╠❏ ${prefix}listonline_*
*_╠❏ ${prefix}resetlinkgroup_*
*_╠❏ ${prefix}tagall_*
*_╠❏ ${prefix}infogroup_*
*_╠❏ ${prefix}open_*
*_╠❏ ${prefix}close_*
*_╠❏ ${prefix}tagme_*
*_╠❏ ${prefix}leave_*
*_╠❏ ${prefix}getpic @tag_*
*_╠❏ ${prefix}event_*
*_╠❏ ${prefix}afk alasan?_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Download menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}ytmp3 Link_*
*_╠❏ ${prefix}play teks_*
*_╠❏ ${prefix}ytmp4 Link_*
*_╠❏ ${prefix}tiktoknowm Link_*
*_╠❏ ${prefix}Instagram Link_*
*_╠❏ ${prefix}twitter_* 
*_┗━┅──────────┄⭑_*${readmore}
✧⪼ *_Sticker menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}sticker Reply Image_*
*_╠❏ ${prefix}toimg Reply Sticker_*
*_╠❏ ${prefix}tomp4 Reply Sticker_*
*_╠❏ ${prefix}patrick_*   
*_╠❏ ${prefix}anjing_*
*_╠❏ ${prefix}bucinstick_*
*_╠❏ ${prefix}amongus_*
*_╠❏ ${prefix}gawrgura_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Owner menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}broadcast Text_*
*_╠❏ ${prefix}setnamebot Text_*
*_╠❏ ${prefix}setbiobot Text_*
*_╠❏ ${prefix}setppbot Text_*
*_╠❏ ${prefix}addcmd *_reply sticker_*
*_╠❏ ${prefix}listcmd_*
*_╠❏ ${prefix}delcmd_*
*_╠❏ ${prefix}mode_*
*_╠❏ ${prefix}premium_*
*_╠❏ ${prefix}listpremium_*
*_╠❏ ${prefix}premiumcheck_*
*_╠❏ ${prefix}exif nama|author_*
*_╠❏ ${prefix}shutdown_*
*_╠❏ ${prefix}addupdate fiturnya_*
*_╠❏ ${prefix}update_*
*_╠❏ ${prefix}clearall_*
*_╠❏ ${prefix}restart_*
*_╠❏ ${prefix}start_*
*_╠❏ ${prefix}term_*
*_╠❏ ${prefix}creategrup_*
*_╠❏ ${prefix}joingroup_*
*_╠❏ ${prefix}setlolkey Text_*
*_╠❏ ${prefix}addrespon_*
*_╠❏ ${prefix}delrespon_*
*_╠❏ ${prefix}listrespon_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Ephoto 360 menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}balloons-love_*
*_╠❏ ${prefix}3dgalaxy-metal_*
*_╠❏ ${prefix}3dgold_*
*_╠❏ ${prefix}avengers_*
*_╠❏ ${prefix}bear_*
*_╠❏ ${prefix}wolf-logo_*
*_╠❏ ${prefix}wolver_*
*_╠❏ ${prefix}tiger-logo_*
*_╠❏ ${prefix}text-wall_*
*_╠❏ ${prefix}anonymous-neon_*
*_╠❏ ${prefix}angels-wings_*
*_╠❏ ${prefix}bear2_*
*_╠❏ ${prefix}bee_*
*_╠❏ ${prefix}women-day_*
*_╠❏ ${prefix}typography-maker3_*
*_╠❏ ${prefix}tiger_*
*_╠❏ ${prefix}text-rain_*
*_╠❏ ${prefix}text-party_*
*_╠❏ ${prefix}storm-trooper_*
*_╠❏ ${prefix}status-mood_*
*_╠❏ ${prefix}status-mood2_*
*_╠❏ ${prefix}status-mood3_*
*_╠❏ ${prefix}status-mood4_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Random menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}akaneko_*
*_╠❏ ${prefix}ppcouple_*
*_╠❏ ${prefix}wallpaper_*
*_╠❏ ${prefix}cuddle_*
*_╠❏ ${prefix}awoo_*
*_╠❏ ${prefix}waifu_*
*_╠❏ ${prefix}neko_*
*_╠❏ ${prefix}shinobu_*
*_╠❏ ${prefix}megumin_*
*_╠❏ ${prefix}husbu_*
*_╠❏ ${prefix}milf_*
*_╠❏ ${prefix}cosplay_*
*_╠❏ ${prefix}wallml_*
*_╠❏ ${prefix}loli_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Islami menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}alquran_*
*_╠❏ ${prefix}asmaulhusna_*
*_╠❏ ${prefix}alquranaudio_*
*_╠❏ ${prefix}jadwalsholat_*
*_╠❏ ${prefix}kisahnabi_*
*_╠❏ ${prefix}listsurah_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Upsw menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}upswteks teks_*
*_╠❏ ${prefix}upswlokasi teks_*
*_╠❏ ${prefix}upswvideo video_*
*_╠❏ ${prefix}upswimage image_*
*_╠❏ ${prefix}upswstiker stiker_*
*_╠❏ ${prefix}upswvoice voice_*
*_╠❏ ${prefix}upswaudio audio_*
*_╠❏ ${prefix}upswgif gif_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Photo oxy menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}shadow_*
*_╠❏ ${prefix}cup_*
*_╠❏ ${prefix}cup1_* 
*_╠❏ ${prefix}romance_* 
*_╠❏ ${prefix}smoke_* 
*_╠❏ ${prefix}burnpaper_* 
*_╠❏ ${prefix}lovemessage_* 
*_╠❏ ${prefix}undergrass_* 
*_╠❏ ${prefix}love_* 
*_╠❏ ${prefix}coffe_* 
*_╠❏ ${prefix}woodheart_* 
*_╠❏ ${prefix}woodenboard_* 
*_╠❏ ${prefix}summer3d_* 
*_╠❏ ${prefix}wolfmetal_* 
*_╠❏ ${prefix}nature3d_* 
*_╠❏ ${prefix}underwater_* 
*_╠❏ ${prefix}golderrose_* 
*_╠❏ ${prefix}summernature_* 
*_╠❏ ${prefix}letterleaves_* 
*_╠❏ ${prefix}glowingneon_* 
*_╠❏ ${prefix}fallleaves_* 
*_╠❏ ${prefix}flamming_* 
*_╠❏ ${prefix}harrypotter_* 
*_╠❏ ${prefix}carvedwood_* 
*_╠❏ ${prefix}arcade8bit_* 
*_╠❏ ${prefix}battlefield4_* 
*_╠❏ ${prefix}pubg_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Textprome menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}blackpink_* 
*_╠❏ ${prefix}neon_* 
*_╠❏ ${prefix}greenneon_* 
*_╠❏ ${prefix}advanceglow_* 
*_╠❏ ${prefix}futureneon_* 
*_╠❏ ${prefix}sandwriting_* 
*_╠❏ ${prefix}sandsummer_* 
*_╠❏ ${prefix}sandengraved_* 
*_╠❏ ${prefix}metaldark_* 
*_╠❏ ${prefix}neonlight_* 
*_╠❏ ${prefix}holographic_* 
*_╠❏ ${prefix}text1917_* 
*_╠❏ ${prefix}minion_* 
*_╠❏ ${prefix}deluxesilver_* 
*_╠❏ ${prefix}newyearcard_* 
*_╠❏ ${prefix}bloodfrosted_* 
*_╠❏ ${prefix}halloween_* 
*_╠❏ ${prefix}jokerlogo_* 
*_╠❏ ${prefix}fireworksparkle_* 
*_╠❏ ${prefix}natureleaves_* 
*_╠❏ ${prefix}bokeh_* 
*_╠❏ ${prefix}toxic_* 
*_╠❏ ${prefix}strawberry_* 
*_╠❏ ${prefix}box3d_* 
*_╠❏ ${prefix}roadwarning_* 
*_╠❏ ${prefix}breakwall_* 
*_╠❏ ${prefix}icecold_* 
*_╠❏ ${prefix}luxury_* 
*_╠❏ ${prefix}cloud_* 
*_╠❏ ${prefix}summersand_* 
*_╠❏ ${prefix}horrorblood_* 
*_╠❏ ${prefix}thunder_* 
*_╠❏ ${prefix}pornhub_* 
*_╠❏ ${prefix}glitch_*  
*_╠❏ ${prefix}avenger_*  
*_╠❏ ${prefix}space_*  
*_╠❏ ${prefix}ninjalogo_*  
*_╠❏ ${prefix}marvelstudio_*  
*_╠❏ ${prefix}lionlogo_*  
*_╠❏ ${prefix}wolflogo_*  
*_╠❏ ${prefix}steel3d_*  
*_╠❏ ${prefix}wallgravity_*  
*_┗━┅──────────┄⭑_*
✧⪼ *_Asupan menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}asupanukhti_*
*_╠❏ ${prefix}asupanbocil_*
*_╠❏ ${prefix}asupanghea_*
*_╠❏ ${prefix}asupanrika_*
*_╠❏ ${prefix}asupansantuy_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Nsfw menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}nsfw 0/1_*
*_╠❏ ${prefix}ass_*
*_╠❏ ${prefix}blowjob_*
*_╠❏ ${prefix}blowjob2_*
*_╠❏ ${prefix}cuckold_*
*_╠❏ ${prefix}cum_*
*_╠❏ ${prefix}bdsm_*
*_╠❏ ${prefix}ero_*
*_╠❏ ${prefix}femdom_*
*_╠❏ ${prefix}foot_*
*_╠❏ ${prefix}gangbang_*
*_╠❏ ${prefix}glases_*
*_╠❏ ${prefix}hentai_*
*_╠❏ ${prefix}jahy_*
*_╠❏ ${prefix}masturbation_*
*_╠❏ ${prefix}neko_*
*_╠❏ ${prefix}orgy_*
*_╠❏ ${prefix}panties_*
*_╠❏ ${prefix}pussy_*
*_╠❏ ${prefix}yuri_*
*_╠❏ ${prefix}thighs_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Marking menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}quotemaker_*
*_╠❏ ${prefix}quote-maker_*
*_╠❏ ${prefix}quotemaker2_*
*_╠❏ ${prefix}quotemaker3_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Other menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}gimage query_*
*_╠❏ ${prefix}pinterest query_*
*_╠❏ ${prefix}google video_*
*_╠❏ ${prefix}brainly query_*
*_╠❏ ${prefix}ytsearch query_*
*_╠❏ ${prefix}sfile query_*
*_╠❏ ${prefix}rexdl query_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Converter menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}stickerwm_*
*_╠❏ ${prefix}togif_*
*_╠❏ ${prefix}tomp3_*
*_╠❏ ${prefix}tovn_*
*_╠❏ ${prefix}slow_*
*_╠❏ ${prefix}fast_*
*_╠❏ ${prefix}reverse_*
*_╠❏ ${prefix}tourl_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Store menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}buyglimit_*
*_╠❏ ${prefix}buylimit_*
*_╠❏ ${prefix}dompet_*
*_╠❏ ${prefix}transfer_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Tools menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}levelingbg_*
*_╠❏ ${prefix}premium_*
*_╠❏ ${prefix}jadibot_*
*_╠❏ ${prefix}stopjadibot_*
*_╠❏ ${prefix}listbot_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Teks menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}quotes_*     
*_╠❏ ${prefix}quotesdilan_*
*_╠❏ ${prefix}faktaunik_*
*_╠❏ ${prefix}katabijak_*
*_╠❏ ${prefix}pantun_*
*_╠❏ ${prefix}bucin_*
*_╠❏ ${prefix}quotesanime_*
*_┗━┅──────────┄⭑_*${readmore}
✧⪼ *_Games menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}caklontong_*
*_╠❏ ${prefix}susunkata_*
*_╠❏ ${prefix}tekateki_*
*_╠❏ ${prefix}tebaklirik_*
*_╠❏ ${prefix}tebakkata_*
*_╠❏ ${prefix}tebakkalimat_*
*_╠❏ ${prefix}tebakgambar_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Rpg Features_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}joinrpg_*
*_╠❏ ${prefix}mining_*
*_╠❏ ${prefix}luckyday_*
*_╠❏ ${prefix}mancing_*
*_╠❏ ${prefix}nventori_*
*_╠❏ ${prefix}adventure_*
*_╠❏ ${prefix}sellikan_*
*_╠❏ ${prefix}sellbesi_*
*_╠❏ ${prefix}sellemas_*
*_╠❏ ${prefix}selldiamond_*
*_╠❏ ${prefix}killslime_*
*_╠❏ ${prefix}killgoblin_*
*_╠❏ ${prefix}killdevil_*
*_╠❏ ${prefix}killbehemoth_*
*_╠❏ ${prefix}killdemond_*
*_╠❏ ${prefix}killdemondking_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Fun menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}suit_*
*_╠❏ ${prefix}beban_*
*_╠❏ ${prefix}babi_*
*_╠❏ ${prefix}ganteng_*
*_╠❏ ${prefix}cantik_*
*_╠❏ ${prefix}jadian_*
*_╠❏ ${prefix}kapankah_*
*_╠❏ ${prefix}bisakah_*
*_╠❏ ${prefix}cekwatak_*
*_╠❏ ${prefix}cekcantik_*
*_╠❏ ${prefix}cekganteng_*
*_╠❏ ${prefix}rate_*
*_╠❏ ${prefix}apakah_*
*_╠❏ ${prefix}slot_*
*_╠❏ ${prefix}dare_*
*_╠❏ ${prefix}truth_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Storage menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}listvn_*
*_╠❏ ${prefix}liststicker_*
*_╠❏ ${prefix}listimg_*
*_╠❏ ${prefix}addvn nama_*
*_╠❏ ${prefix}addsticker nama_*
*_╠❏ ${prefix}addimage nama_*
*_╠❏ ${prefix}getvn data_*
*_╠❏ ${prefix}getsticker data_*
*_╠❏ ${prefix}getimage data_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Nulis menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}nuliskiri_*
*_╠❏ ${prefix}nuliskanan_* 
*_╠❏ ${prefix}foliokiri_*
*_╠❏ ${prefix}foliokanan_*
*_┗━┅──────────┄⭑_*
✧⪼ *_Image menu_*
*_┏━┅────▭───┄⭑◯_*
*_╠❏ ${prefix}indonesia_*
*_╠❏ ${prefix}korea_*
*_╠❏ ${prefix}malaysia_*
*_╠❏ ${prefix}thailand_*
*_╠❏ ${prefix}vietnam_*
*_╠❏ ${prefix}cecan_*
*_╠❏ ${prefix}chinese_*
*_╠❏ ${prefix}japan_*
*_┗━┅──────────┄⭑_*
 
*〔 ⌯ ${botname}⌯ 〕*
`
buffer = await getBuffer(`https://hardianto.xyz/api/welcome4?profile=${encodeURIComponent(profilePicou)}&name=${encodeURIComponent(pushname)}`)
buttons = [
{buttonId:`${prefix}allmenu`, buttonText: {displayText: '</BACK MENU'}, type: 1}
]
sendButImage(from, teks, turu, buffer, buttons, yor)
break

case 'hit':
reply(`*_Pemakain total ${hit_today.length}_*`)
break
 
case 'setlolkey':
if (args.length < 1) return
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
lolkey = args.join(" ")
setting.lolkey = lolkey
fs.writeFileSync('./database/setting.json', JSON.stringify(setting, null, '\t'))
reply(`Prefix berhasil di ubah menjadi : ${lolkey}`)
break
				    case 'meme':
					meme = await fetchJson('https://kagchi-api.glitch.me/meme/memes', { method: 'get' })
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
.catch(e =>{
reply('Sepertinya server sedang eror ')})					
					yoriss.sendMessage(from, buffer, image, {quoted: yor, caption: '.......'})
					
					break
										
case 'sc':
case 'infosc':
case 'info':
scnya = `┏━➤ 「 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 」
✧⪼ 𝐍𝐚𝐦𝐚 : ${botname}
✧⪼ 𝐎𝐰𝐧𝐞𝐫 : ${ownername}
✧⪼ 𝐏𝐫𝐞𝐟𝐢𝐱 : 「 𝐌𝐮𝐥𝐭𝐢 𝐏𝐫𝐞𝐟𝐢𝐱 」
✧⪼ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : 𝐀𝐧𝐝𝐫𝐨𝐢𝐝 11
✧⪼ 𝐋𝐢𝐛 : 𝐁𝐚𝐢𝐥𝐞𝐲𝐬
✧⪼ 𝐓𝐲𝐩𝐞 : 𝐍𝐨𝐝𝐞𝐉𝐒
✧⪼ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
┗━━━━━━━━━━━━━
━➤ 「 𝙄𝙉𝙁𝙊 𝘿𝙀𝙑 」

✍️ 𝑆𝑐𝑟𝑖𝑝𝑡 𝑀𝑎𝑑𝑒 𝑖𝑛 𝐵𝑦 𝒀𝒐𝒓𝒊𝒔𝒔 𝑫𝒆𝒄𝒐𝒅𝒆
🌟 𝑉𝑒𝑟𝑠𝑖𝑜𝑛 : 7.0
📈 𝐿𝑎𝑠𝑡 𝑈𝑝𝑑𝑎𝑡𝑒 : 29-𝐷𝑒𝑠-2022

1, 📦 𝐺𝑟𝑢𝑝:
https://chat.whatsapp.com/I0Nwc0jVBbFLbCm1otsQhy

2, 📦 𝐺𝑟𝑢𝑝:
https://chat.whatsapp.com/GBL7NI6vti9LVXhRJ9pojR

`
buttons = [
{buttonId:`${prefix}allmenu`, buttonText: {displayText: '</BACK MENU'}, type: 1}
]
const info = {
    contentText: `${scnya}`,
    footerText: ``,
    buttons: buttons,
    headerType: 1
}
await yoriss.sendMessage(from, info, MessageType.buttonsMessage, {quoted: yor})
break
//━━━━[ Feature Group ]━━━━//

    case 'welcome':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

    if (!isGroup) return reply(mess.only.group)
          pp = 'on or off?'
          but = [
           { buttonId: `!wel on`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!wel off`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'Welcome', but)
          break                           
                                                                                 
case 'wel':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})   
          if (!isGroup) return reply(mess.only.group)
          if (!isOwner && !isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
          if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
          if ((args[0]) === 'on') {
          if (isWelkom) return reply('welcome sudah aktif')
          _welkom.push(from)
          fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welkom, null, 3))
          reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
          } else if ((args[0]) === 'off') {
          if (!isWelkom) return reply('welcome sudah off sebelumnya')
          _welkom.splice(from, 1)
          fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welkom, null, 3))
          reply(`\`\`\`Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
          } else {
          reply('on untuk mengaktifkan, off untuk menonaktifkan')
          }
          break
          
case 'antilink':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!q) return reply(`Type :\n${prefix}antilink on to enable\n${prefix}antilink off to disable`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return reply('```Antilink is enable !!```')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Successfully enable the antilink feature in the group\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Successfully disable the antilink feature in the group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('```on to enable, off to disable```')
}
break
case 'antivirtex':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (!q) return reply(`Type :\n${prefix}antivirtex on to enable\n${prefix}antivirtex off to disable`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return reply('```Antivirtex is enable !!```')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Successfully enable the antivirtex feature in the group\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antivirtex.indexOf(from)
_antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Successfully disable the antilink feature in the group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('```on to enable, off to disable```')
}
break
case 'antibug':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
       if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
          if (args[0] === '1') {
          if (bugc === true) return
          bugc = true
          reply('Berhasil menyalakan antibug')
          } else if (args[0] === '0') {
          if (bugc === false) return
          bugc = false
          reply('Berhasil mematikan antibug')
          } else {
          reply('Pilih 1 atau 0')
          }
          break
case 'groupopen':
case 'open':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bot)
reply(`\`\`\`Successful opening group\`\`\` *${groupMetadata.subject}*`)
yoriss.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'groupclose':
case 'close':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bot)
reply(`\`\`\`Successfully closing the group\`\`\` *${groupMetadata.subject}*`)
yoriss.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgroup':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bot)
linkgc = await yoriss.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
yoriss.sendMessage(from, yeh, text, { quoted: yor })
break
case 'promote' :
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag the target you want to be an admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Order received, you become admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
yoriss.groupMakeAdmin(from, mentioned)
} else {
mentions(`Order received, @${mentioned[0].split('@')[0]} You become admin Di Group *${groupMetadata.subject}*`, mentioned, true)
yoriss.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bot)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag the target you want to not be an admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Order received, you are not an admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
yoriss.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Order received, Lower : @${mentioned[0].split('@')[0]} Become a member`, mentioned, true)
yoriss.groupDemoteAdmin(from, mentioned)
}
break


      case 'add': 
             if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
             if (isBanned) return reply(mess.banned)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             yoriss.groupAdd(from, [entah])
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             yoriss.groupAdd(from, [entah])
}
             break

case 'kick': 
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
             if (isBanned) return reply(mess.banned)
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             break
             
case 'tagall':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins && !isOwner ) return reply(mess.only.bot)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `➟ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break

case 'tagall2':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins && !isOwner) return reply(mess.only.bot)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `@${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break

case 'tagall3':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins && !isOwner) return reply(mess.only.bot)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break

case 'setname':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bot)
yoriss.groupUpdateSubject(from, `${body.slice(9)}`)
yoriss.sendMessage(from, `\`\`\`Success in Changing the Group Name to\`\`\` *${body.slice(9)}*`, text, { quoted: yor })
break
case 'setdesc':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bot)
yoriss.groupUpdateDescription(from, `${body.slice(9)}`)
yoriss.sendMessage(from, `\`\`\`Successfully Changed Group Description\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: yor })
break
case 'setppgrup':
case 'setpp':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(`Bot Harus Admin dong`)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await yoriss.downloadMediaMessage(encmedia)
yoriss.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
break

       case 'afk':  
          if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              if (isBanned) return reply(mess.banned)
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              break
case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':
            if(!c) return reply('cari group apa?')
            hx.linkwa(c)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            await limitAdd(sender, limit)
			break
			              
case 'hidetag':
case '⚠️':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogroup':
case 'groupinfo':
case 'groupinfo':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isGroup) return reply(mess.only.group)
try {
var pic = await yoriss.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${from}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Group :* @${groupMetadata.owner.split('@')[0]}\n*Number of admins :* ${groupAdmins.length}\n*Number of participants :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Enable' : 'Disable'}\n*AntiLink :* ${isAntiLink ? 'Enable' : 'Disable'}\n*Desc :* \n\n${groupMetadata.desc}`
yoriss.sendMessage(from, await getBuffer(pic), image, {quoted: yor, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgroup':
case 'revoke':
case 'resetlink':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bot)
json = ['action', 'inviteReset', from]
yoriss.query({json, expect200: true})
reply('Successfully reset group link')
break
case 'online':
case 'listonline':
case 'here':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})          
if (!isGroup) return reply(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(yoriss.chats.get(ido).presences), yoriss.user.jid]
yoriss.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fkon, contextInfo: { mentionedJid: online }})
} catch (e) {
reply(`${e}`)
}
break
case 'tagme':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isGroup) return reply(mess.only.group)
mentions(`Tag : @${sender.split("@")[0]}`, [sender], true)
break
case 'leave':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
setTimeout( () => {
yoriss.groupLeave(from) 
}, 2000)
setTimeout( () => {
reply('Byee... , the bot will leave the group')
}, 0)
break
         case 'getpict':
         case 'getpic':
         case 'getpp':
         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
         if (!isGroup) return reply(mess.only.group)
         mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
         pictt = await yoriss.getProfilePicture(mentioned)
         pict = await getBuffer(pictt)
         yoriss.sendMessage(from, pict, image, {quoted: yor})
         break
            
case 'antidelete':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

    if (!isGroup) return reply(mess.only.group)
    if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
          pp = 'on / off?'
          but = [
           { buttonId: `!deli on`, buttonText: { displayText: 'on' }, type: 1 },
           { buttonId: `!deli off`, buttonText: { displayText: 'off' }, type: 1 }]
          sendButton(from, pp, 'antidelete on of', but, )
          break

case 'tts':
					if (args.length < 1) return yoriss.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
				   const gtts = require('./database/lib/gtts')(args[0])
					if (args.length < 2) return yoriss.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('Teks nya terlalu panjang kak')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(dla.stikga())
								yoriss.sendMessage(from, buff, audio, {duration: 234, ptt: true, quoted: mek })
								fs.unlinkSync(rano)
							})
						})
					break
					                    
case 'deli':
if (args[0] === "on") {
if(antidelete)return reply('antidelete sudah un sebelumnya')
antidelete = true
reply(`sukses antidelete on`)
} else if (args[0] === "off") {
if(!antidelete)return reply('antidelete sudah off sebelumnya')
antidelete = false
reply(`sukses antidelete off`)
} else {
          reply('on untuk mengaktifkan, off untuk menonaktifkan')
          }
break         

//━━━━[ Feature Downloader ]━━━━//

case 'play3':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('eror')
teks = args.join(' ')
res = await y2mateA(teks).catch(e => {
lreply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: yor, mimetype: 'audio/mp3', filename: res[0].output})
limitAdd(sender, limit)
break

case 'play4':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('erorr')
teks = args.join(' ')
reply(mess.wait)
res = await y2mateV(teks).catch(e => {
reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})            
sendFileFromUrl(res[0].link, video, {quoted: yor, mimetype: 'video/mp4', filename: res[0].output})
limitAdd(sender, limit)
break

case 'ig':
case 'igdl':
case 'instagram':
//if (!isUser) return sendButton(from, daftar1, daftar2, daftar3)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!c) return reply('Link Nya Mana?')
var { igDownloader } = require('./database/lib/igdown')
res = await igDownloader(`${c}`).catch(e => {
reply('*Sepertinya server sedang eror*')})
ig = await getBuffer(res.result.link)
yoriss.sendMessage(from, ig, video, {quoted: mek, mimetype: 'video/mp4', caption : 'Done bro'})
limitAdd(sender, limit)
break
                    
case 'tiktoknowm':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply('Link Nya Mana?')
anu = await fetchJson(`https://megayaa.herokuapp.com/api/tiktod/?url=${q}`).catch(e =>{
reply('*Sepertinya server sedang eror*')})
tiktok = await getBuffer(anu.result.nowatermark)
yoriss.sendMessage(from, tiktok, video, {quoted: yor, mimetype: 'video/mp4', caption : 'Done bro'})
limitAdd(sender, limit)
break

case 'lyrics':
reply(mess.wait)
if (args.length < 1) return reply('What is the name of the song?')
teks = args.join(' ')
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break

case 'ytmp4':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('erorr')
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `*YOUTUBE MP4 🎥*

*Data Berhasil Didapatkan !!*
⌖ _Title : ${res[0].judul}_
⌖ _Ext : MP4_
⌖ _Size : ${res[0].size}_

\`\`\`Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit\`\`\``

sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: yor}).then((lalu) => {
sendFileFromUrl(res[0].link, video, {quoted: yor, mimetype: 'video/mp4', filename: res[0].output})
})
limitAdd(sender, limit)
break
            
case 'ytmp3':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if (args.length < 1) return reply('Link Nya Mana ?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
result = `*YOUTUBE MP3 🎵*
*Data Berhasil Didapatkan !!*
⌖ _Title : ${res[0].judul}_
⌖ _Ext : MP3_
⌖ _Size : ${res[0].size}_

\`\`\`Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit\`\`\``

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: yor}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: yor, mimetype: 'audio/mp3', filename: res[0].output})
})
limitAdd(sender, limit)
break
//
case 'xvidos':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply('Link Nya Mana ?')
deffoll = args.join(' ')
memei = await getBuffer(`${deffoll}`, { method: 'get' })
vidlol = await getBuffer(memei.result.image)
yoriss.sendMessage(from, vidlol, video, {quoted: yor, mimetype: 'video/mp4', caption : 'Done bro'})
.catch(e => {
reply('[❗] Error Gagal Dalam Memasuki Web')})
limitAdd(sender, limit)
break

//━━━━[ Feature Sticker ]━━━━//
	case 'sticker': case 'stikerin':
	case 'stiker': case 's':{
	if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
	if (isMedia && !mek.message.videoMessage || isQuotedImage) {
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	const media = await yoriss.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
	exif.create('Created By', 'RecodeBotz', `stickwm_${sender}`)
	await ffmpeg(`./${media}`)
	.input(media)
	.on('start', function (cmd) {
	console.log(`Started : ${cmd}`)
	})
	.on('error', function (err) {
	console.log(`Error : ${err}`)
	fs.unlinkSync(media)
	})
	.on('end', async function () {
	console.log('Finish')
    exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
	if (error) return reply(lang.tryAgain())
	await yoriss.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: yor})
	fs.unlinkSync(media)	
	fs.unlinkSync(`./sticker/${sender}.webp`)	
    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
	})
	})
    .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
	.toFormat('webp')
	.save(`./sticker/${sender}.webp`)
	} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
	const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	const media = await yoriss.downloadAndSaveMediaMessage(encmedia)
	exif.create('Created By', 'RecodeBotz', `stickwm_${sender}`)
                    //    ran = getRandom('.webp')
	await ffmpeg(`./${media}`)
	.inputFormat(media.split('.')[1])
	.on('start', function (cmd) {
	console.log(`Started : ${cmd}`)
	})
	.on('error', function (err) {
	console.log(`Error : ${err}`)
	fs.unlinkSync(media)
	tipe = media.endsWith('.mp4') ? 'video' : 'gif'
	reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
	})
	.on('end', async function () {
	console.log('Finish')
	exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
	if (error) return reply(lang.tryAgain())
	await yoriss.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: yor})
	fs.unlinkSync(media)	
	fs.unlinkSync(`./sticker/${sender}.webp`)	
	fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
	})
	})
	.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
	.toFormat('webp')
	.save(`./sticker/${sender}.webp`)
	} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	const media = await yoriss.downloadAndSaveMediaMessage(encmedia)
	ranw = getRandom('.webp')
	ranp = getRandom('.png')
	reply(mess.wait)
	keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
	await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
	fs.unlinkSync(media)
	let bufferir9vn5 = Buffer.from(res.base64img, 'base64')
	fs.writeFileSync(ranp, bufferir9vn5, (err) => {
	if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
	})
	exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
	fs.unlinkSync(ranp)
	if (err) return reply(lang.tryAgain())
	yoriss.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: yor })
	fs.unlinkSync(ranw)
	})
	})
	} else {
	reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\nDurasi sticker video 1-9 detik...`)
	}
	await limitAdd(sender, limit)
	}
	break

	case 'attp':
	if (isBanned) return reply('banned')
	if(!q) return reply('Teks?')
	nyz200 = await getBuffer(`https://myselfff.herokuapp.com/docs/random/${command}?query=${q}`)
	.catch(e =>{
	reply('Reply again')})			
	yoriss.sendMessage(from, nyz200, sticker, { quoted: yor})
	break	
			 case 'artinama':
			if (args.length < 1) return reply('teks')
		    nyz6 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/artinama?query=${q}`)
		    nyz7 = `[ *ARTI NAMA* ]\n`,
		    nyz7 += `=> *ARTINAMA* : ${nyz6.result.list}`
		    reply(nyz7)	
		    break

            case 'grubwa':
            if (isBanned) return reply(banned)  	
			if (args.length < 1) return reply('*_Teks?_*')
			nyz49 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/grubwa?query=${q}`)
			nyz50 = `[ *GRUB WA* ]\n`,
			nyz50 += `=> *NAMA* : ${nyz49.result.judul}\n`,
			nyz50 += `=> *LINK* : ${nyz49.result.link}\n`
			reply(nyz50)
			break
			
			case 'ytsearch':
            if (isBanned) return reply(banned) 
			if (args.length < 1) return reply('*_Teks?_*')
			nyz76 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/ytsearch?query=${q}`)
			nyz77 = nyz76.result
			nyz78 = `[ *YTSEARCH* ]\n`,
			nyz78 += `=> *TITLE* : ${nyz77.title}\n`,
			nyz78 += `=> *ID* : ${nyz77.id}\n`,
			nyz78 += `=> *TYPE* : ${nyz77.type}\n`,
			nyz78 += `=> *VIEWS* : ${nyz77.views}\n`,
			nyz78 += `=> *URL* : ${nyz77.url}\n`,
			nyz78 += `=> *DESC* : ${nyz77.desc}\n`
			reply(nyz78)
			break
			case 'rexdl':
            if (isBanned) return reply(banned) 
			if (args.length < 1) return reply('*_Teks?_*')
			nyz79 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/rexdl?query=${q}`)
			nyz80 = nyz79.result
			nyz81 = `[ *REXDL* ]\n`,
			nyz81 += `=> *TITLE* : ${nyz80.title}\n`,
			nyz81 += `=> *URL* : ${nyz80.url}\n`, 
			nyz81 += `=> *ON* : ${nyz80.on}\n`,
			nyz81 += `=> *DESC* : ${nyz80.desc}\n` 
			reply(nyz81)
			break			 
			case 'sfile':
            if (isBanned) return reply(banned)
			if (args.length < 1) return reply('*_Teks?_*')
			nyz85 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/sfile?query=${aq}`)
			nyz86 = nyz85.result
			nyz87 = `[ *SFILE* ]\n`,
			nyz87 += `=> *TITLE* : ${nyz86.title}\n`,
			nyz87 += `=> *SIZE* : ${nyz86.size}\n`,
			nyz87 += `=> *URL* : ${nyz86.url}\n`
			reply(nyz87)
			break			 
					    																				
	case 'stickerwm':
	case 'swm':
	if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})					
	if (isMedia && !mek.message.videoMessage || isQuotedImage) {
	ppp = `${args.join(' ')}`
	const encmedia9191 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	const media = await yoriss.downloadAndSaveMediaMessage(encmedia9191, `./sticker/${sender}`)
	const packname1 = ppp.split('|')[0]
	const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply('*Upss Emrorr*')
	})
	.on('end', function () {
	console.log('Finish')
	exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
    if (error) return reply('*Upss Emrorr*')
											yoriss.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: yor})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Send a picture or reply to an image with a caption *${prefix}stickerwm nama|author*`)
							const encmediaokekak = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await yoriss.downloadAndSaveMediaMessage(encmediaokekak, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply('*Upss Emrorr*')
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply('*Upss Emrorr*')
											yoriss.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: yor})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Send picture/video with caption ${prefix}stickerwm name|author or image/video tags that have been sent\nNote : Maximum video duration is 10 seconds`)
						}
						break
							
case 'toimg':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isQuotedSticker) return reply('reply sticker')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await yoriss.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Failed, when converting sticker to image')
buffer = fs.readFileSync(ran)
yoriss.sendMessage(from, buffer, image, {quoted: yor, caption: 'here'})
fs.unlinkSync(ran)
})
break
		    case 'tomp4':
		    	if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
		            reply('prosess')
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            let owoogi = await yoriss.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owoogi).then(res=>{
		            sendMediaURL(from,res.result,'Done')
		            })
		            }else {
		            reply('reply stiker')
		            }
		            fs.unlinkSync(owoogi)
					break 
			case 'togif':
			  if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		           let c = await yoriss.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(c).then(async res=>{
					let ksksn = await getBuffer(res.result)
		            yoriss.sendMessage(from, ksksn, MessageType.video, {mimetype: 'video/gif', gifPlayback: true, caption: 'success', quoted: yor })
		            })
		            }else {
		            reply('Reply stiker')
		            }
		            fs.unlinkSync(c)
		            await limitAdd(sender, limit)
					break     
//»»»Converter 𝘔𝘦𝘯𝘶	 	

        case 'tomp3':
          if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              if (isBanned) return reply(mess.banned)
               if (isQuotedVideo || isQuotedAudio){
               reply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               media = await yoriss.downloadAndSaveMediaMessage(encmedia)
               ran = getRandom('.mp3')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return reply(`Err: ${err}`)
               buffer453 = fs.readFileSync(ran)
               yoriss.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: yor })
               fs.unlinkSync(ran)
})
               } else {
               reply(mess.wrongFormat)
}
               break      

    case 'tovn':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
           
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedAudio) return reply('Reply Audionya')
          reply(mess.wait)
	      encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await yoriss.downloadAndSaveMediaMessage(encmedia)
		  ran = getRandom('.mp3')
		  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		  fs.unlinkSync(media)
		  if (err) return reply('Gagal mengkonversi audio ke ptt')
		  topt = fs.readFileSync(ran)
		  yoriss.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: yor, ptt:true})
		  limitAdd(sender, limit)
		  })
		  break	
		  
		         case 'tourl':
          if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              if (isBanned) return reply(mess.banned)
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await yoriss.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
      case "fast":
 if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

        if (!isQuotedVideo) return reply("Reply video!");
        reply(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await yoriss.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return reply(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            yoriss.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: yor,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "slow":
  if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

        if (!isQuotedVideo) return reply("Reply video!");
        reply(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await yoriss.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return reply(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            yoriss.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: yor,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "reverse":
  if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

        if (!isQuotedVideo) return reply("Reply the video!");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await yoriss.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return reply(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          yoriss.sendMessage(from, buffer453, video, {
            mimetype: "video/mp4",
            quoted: yor,
          });
          fs.unlinkSync(ran);
        });
        break;
                       										
//━━━━[ Feature Owner ]━━━━//

  case 'bc': case 'broadcast':
    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
    if (args.length < 1) return reply('teks?')
    anu100 = await yoriss.chats.all()
    if (isMedia && !yoriss.message.videoMessage || isQuotedImage) {
    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(yoriss).replace('quotedM','m')).message.extendedTextMessage.contextInfo : yoriss
    bc100 = await yoriss.downloadMediaMessage(encmedia)
    for (let _ of anu100) {
    yoriss.sendMessage(_.jid, bc100, image, {quoted: yor, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
    }
    reply('Suksess broadcast')
    } else {
    for (let _ of anu100) {
    yoriss.sendMessage(_.jid, 
    {"contentText": `*「 broadcast bot 」*\n\n${body.slice(4)}`,
    "footerText": `${Tanggal}`, 
    "buttons": [
    {"buttonId": `!menu`,
    "buttonText": {"displayText": "MENU 🌱"
    },"type": "RESPONSE"}
    ], "headerType": 'LOCATION',
    locationMessage: { degreesLatitude: '',
    degreesLongitude: '',
    jpegThumbnail: fakeimage,
    }}, MessageType.buttonsMessage )
    }
    reply('Suksess broadcast')
    }
  break

case 'clearall':{
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isBanned) return reply(mess.banned)
if (!isOwner) return reply(mess.only.owner)
anu = await yoriss.chats.all()
yoriss.setMaxListeners(10)
yoriss.modifyChat(from, 'delete', {includeStarred: false})
reply('Sukses delete all chat :)')}
break

case 'setnamebot':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Text?')
namebot = body.slice(11)
yoriss.updateProfileName(namebot)
reply(`Success in changing the name to *${body.slice(11)}*`)
break
case 'setbiobot':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('text?')
bio = body.slice(10)
yoriss.setStatus(`${bio}`)
reply(`Success changing bio to *${body.slice(10)}*`)
break
case 'setppbot':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isQuotedImage) return reply('Reply imagenya!')
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediau = await yoriss.downloadAndSaveMediaMessage(enmediau)
await yoriss.updateProfilePicture(botNumber, mediau)
reply('_Successfully changing bot profile photo')
break

//━━━━[ Feature Other ]━━━━//

case "runtime":
case "test":
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break;
case 'ping':
case 'speed':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
timestampe = speed();
latensie = speed() - timestampe
reply(`「 *𝙎𝙋𝙀𝙀𝘿* 」\nRespond in ${latensie.toFixed(4)} Second 💬`)
break
case 'owner':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isBanned) return reply(mess.banned)
sendKontak(from, `${owner}`)
await sleep(100)
haibg =`*ɪᴛᴜ ᴋᴀᴋ ɴᴏᴍᴏʀ ᴏᴡɴᴇʀ ᴋᴜ ᴊᴀɴɢᴀɴ*\n                      *ᴊᴀʜɪʟ ʏᴀᴀ*`
but = [{ buttonId: `!owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 }]
sendButton(from, haibg, '', but)
break
case 'ssweb':
case 'ss':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (args.length < 1) return reply(`Where's the url bro?`)
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buff = await getBuffer(anu.screenshot)
yoriss.sendMessage(from, buff, image, {quoted: yor, caption : teks})
break
case 'd':
case 'del':
case 'delete':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
yoriss.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break

case 'rules':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
tuh = fs.readFileSync(`./database/image/thumbnail_1.jpg`)
nehh = `*PERATURAN BOT*

1. DILARANG TELFON BOT!!
2. DILARANG SPAM BOT
3. DILARANG BERKATA KASAR
4. DILARANG SPAM VIRTEX
5. DILARANG TELEFON OWNER
6. DILARANG SPAM GROUP
7. DILARANG SPAM ADMIN
8. DILARANG BERKATA KASAR DI GC

!! ️JIKA KALIAN MELANGGAR.. AKAN DI BLOCK + BANNED!!

──「 *${botname}* 」──`

but = [
{ buttonId: `${prefix}runtime`, buttonText: { displayText: '𝙍𝙐𝙉𝙏𝙄𝙈𝙀' }, type: 1 }, 
{ buttonId: `${prefix}speed`, buttonText: { displayText: '𝙎𝙋𝙀𝙀𝘿' }, type: 1 }]
sendButLocation(from, nehh, `𝗧𝗮𝗻𝗴𝗴𝗮𝗹 ${Tanggal}`, tuh, but, mek)   
break

    case 'play':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
          reply('Bentar Om lagi Nyari')
          let yut = await yts(v)
          yta(yut.videos[0].url)             
          .then(async(res) => {
          var { thumb, title, filesizeF, filesize } = res
          var capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 ??𝗟𝗔𝗬🍁\n•💬 Judul : ${yut.all[0].title}\n•🎥 ID Video : ${yut.all[0].videoId}\n•⏰️ Diupload Pada : ${yut.all[0].ago}\n•👁️️ Views : ${yut.all[0].views}\n•▶️ Durasi : ${yut.all[0].timestamp}\n•📍 Channel : ${yut.all[0].author.name}\n•🔗 Link Channel : ${yut.all[0].author.url}\n•⚡ Link Video : ${yut.videos[0].url}`
          ya = await getBuffer(thumb)
          py =await yoriss.prepareMessage(from, ya, image)
          sendButloc(from, capti,'',`*select the type you want to download*`,[{buttonId: `${prefix}play3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1},
          {buttonId: `${prefix}play4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}],null,null,ya)
          })
          limitAdd(sender, limit)         
          break
case 'addrespon':{
          if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
          if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input1 = body.slice(11)
          if (!input1.includes('|')) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input = input1.split("|")
          if (checkCommands(input[0], commandsDB) === true) return reply(`Command tersebut sudah ada`)
          addCommands(input[0], input[1], sender, commandsDB) 
          reply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
          }
      break
      case 'dellrespon':
      case 'delrespon':{
          if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
            if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
          if (!checkCommands(body.slice(11), commandsDB)) return reply(`Key tersebut tidak ada di database`)
          deleteCommands(body.slice(11), commandsDB)
          reply(`Berhasil menghapus respon dengan key ${body.slice(11)}`)
          }
      break
        case 'listrespon':{
          let txt = `List Respon\nTotal : ${commandsDB.length}\n\n`
          for (let i = 0; i < commandsDB.length; i++){
          txt += `❏ Key : ${commandsDB[i].pesan}\n`
          }
          reply(txt)
          }
        break

//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×			
case 'fire':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isOwner && !isPremium) return sendButton(from, Prem1, Prem2, Prem3)
 
  if (args.length < 1) return reply('Link Nya Mana? ')
  if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Ups Erorr')
  teks = args.join(' ')
  res = await mediafireDl(teks)
  result = `Media Fire Downloader
  Tunggu Proses Mengirim Media......`
  reply(result)
  sendFileFromUrl(res[0].link, document, { mimetype: res[0].mime, filename: res[0].nama, quoted: yor })
  break
//====================================================================
case 'fire1':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isOwner && !isPremium) return sendButton(from, Prem1, Prem2, Prem3) 
 
  if (args.length < 1) return reply('Link Nya Mana? ')
  if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Ups Erorr')
  teks = args.join(' ')
  res = await mediafireDl(teks)
  result = `Media Fire Downloader
  Tunggu Proses Mengirim Media......`
  reply(result)
  sendFileFromUrl(res[0].link, video, { quoted: yor, mimetype: 'video/mp4', filename: res[0].output })
  break
//====================================================================
case 'fire2':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isOwner && !isPremium) return sendButton(from, Prem1, Prem2, Prem3)
 
  if (args.length < 1) return reply('Link Nya Mana? ')
  if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Ups Erorr')
  teks = args.join(' ')
  res = await mediafireDl(teks)
  result = `Media Fire Downloader
  Tunggu Proses Mengirim Media......`
  reply(result)
  sendFileFromUrl(res[0].link, audio, { quoted: yor, mimetype: 'video/mp3', filename: res[0].output })
  break
//====================================================================
          
        case 'mediafire':
    if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

          if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              if (isBanned) return reply(mess.banned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (args.length < 1) return reply('Link Nya Mana? ')
  if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Ups Erorr')
  reply(mess.wait)
  teks = args.join(' ')
  res = await mediafireDl(teks)
  result = `Media Fire Downloader

*${res[0].nama}*

➤ Ukuran : ${res[0].size}
➤ Link : ${res[0].link}

Tunggu Proses Mengirim Media......`
  sendButMessage(from, result, `𝚖𝚊𝚞 𝚍𝚒𝚔𝚒𝚛𝚒𝚖 𝚕𝚎𝚠𝚊𝚝 𝚊𝚙𝚊 𝚔𝚊𝚔\n𝙷𝚊𝚛𝚊𝚙 𝚖𝚎𝚖𝚒𝚕𝚒𝚑 𝚏𝚘𝚛𝚖𝚊𝚝 𝚜𝚎𝚜𝚞𝚊𝚒 𝚕𝚒𝚗𝚔 𝚢𝚐 𝚖𝚊𝚞 𝚍𝚒 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍`, [
    {
buttonId: `${prefix}fire ${teks}`,
buttonText: {
  displayText: `𝘋𝘰𝘤𝘶𝘮𝘦𝘯𝘵`,
},
type: 1,
    },
    {
buttonId: `${prefix}fire1 ${teks}`,
buttonText: {
  displayText: `𝘝𝘪𝘥𝘦𝘰`,
},
type: 1,
    },
    {
buttonId: `${prefix}fire2 ${teks}`,
buttonText: {
  displayText: `𝘈𝘶𝘥𝘪𝘰`,
},
type: 1,
    },
  ]);
  limitAdd(sender, limit) 
  break;
  
case 'mode':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
buttonss = [{buttonId: `!public`, buttonText: {displayText: 'PUBLIC 👥'}, type: 1},{buttonId: `!self`, buttonText: {displayText: 'SELF 👤'}, type: 1}]
const buMess = {
    contentText: "SELF/PUBLIC",
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": botname , 'jpegThumbnail': fs.readFileSync(`database/image/banner.jpg`)}}}}
await yoriss.sendMessage(from, buMess,  MessageType.buttonsMessage, anu,{quoted: yor})
break
case 'self':
			if (!isOwner && !mek.key.fromMe) return reply('*lu siapa?,*')
            if(!banChats)return reply('_*Fitur sudah diaktifkan sebelumnya_*')			
			banChats = false
			return reply(`
*「 MODE SELF 」*
sukses ke Mode self
sekarang hanya nomor bot
dan owner yang bisa menggunakan
fitur.`, text)
			break
			case 'public':
			if (!isOwner && !mek.key.fromMe) return reply('*lu siapa?,*')
			if (banChats)return reply('_*Fitur sudah diaktifkan sebelumnya_*')
			banChats = true
			return reply(`
*「 MODE PUBLIC 」*
sukses ke Mode Public 
semua user dan admin
bisa menggunakan bot.`, text)
			break
                						
//buy limit		
		case 'dompet':
		if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
		const kantong = checkATMuser(sender)
		reply(` *「 ATM USER 」* \n🧲 *Nama* : ${pushname}\n🆔 *Nomer* : ${senderr.split("@")[0]}\n🎒 *Uang* : $${kantong}\n`)
		break                			
		case 'transfer':
		if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
		if (!q.includes(' ')) return  reply(`*Contoh ${prefix}transfer @tag* 1000`)
		var tujuan = q.substring(0, q.indexOf(' ') - 1)
		var jumblah = q.substring(q.lastIndexOf(' ') + 1)
		
		if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
		if (jumblah < 100 ) return reply(`Minimal Transfer 100`)
		if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
		var tujuantf = `${tujuan.replace("@", '')}`
		fee = 0.005 *  jumblah
 		hasiltf = jumblah + fee
		addKoinUser(`${tujuantf}@s.whatsapp.net`, hasiltf)
		confirmATM(sender, hasiltf)
 		reply(`*「 SUKSES  」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : 30*jumblah`)
		break
		
case 'limit': case 'ceklimit': case 'balance': case 'glimit':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
reply(`💳 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitCount, limit)} / ${limitCount}`}
🏧 Limit Game : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
🏦 Balance : $${getBalance(sender, balance)}
Kamu Dapat Membeli Limit Dengan ${prefix}Buylimit *Nominal* Dan ${prefix}Buyglimit *Nominal* Untuk Membeli Game Limit
*Example :*
${prefix}buylimit 10
${prefix}buyglimit 10
NOTE : 
- Harga Limit Perlimit adalah $100 balance`)
break
case 'buylimit':{
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
let ane = Number(nebal(q) * 100)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(q), limit)
reply(`Pembeliaan limit sebanyak ${q} berhasil

*🏧 Sisa Balance : $${getBalance(sender, balance)}*
*🏦 Sisa Limit : ${getLimit(sender, limitCount, limit)} / ${limitCount}*`)
}
break
case 'buyglimit':{
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!q)return reply(`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
const koinPerlimit = 100
const total = koinPerlimit * q
if (getBalance(sender,balance) <= total) return reply(`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
kurangBalance(sender, total, balance)
givegame(sender, q, glimit)
reply(`Pembeliaan game limit sebanyak ${q} berhasil

*💳 Sisa Balance : $${getBalance(sender, balance)}*
*💷 Sisa Game Limit : ${cekGLimit(sender, gcount, glimit)} / ${gcount}*`)
}
break
	case 'me': case 'myinfo': case 'profile': case 'profil':{
	if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
		let bio_nya = await yoriss.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
		try {
					pp_userb = await yoriss.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
const userRank = Ranking.getUserRank(sender, _level);
const currentLevel = getLevelingLevel(sender);
var reqXp  = 3000 * (Math.pow(2, getLevelingLevel(sender)) - 1);				
			let pp_userz = await getBuffer(pp_userb)
let cek = ms( await premium.getPremiumExpired(sender, premium) - Date.now())
let userProcfile = `「 *USER INFO* 」

📛 Nama : ${pushname}
💋 Bio : ${bio_user}
🔗 Tag : @${sender.split("@")[0]}
💥 Api : wa.me/${sender.split("@")[0]}

💹 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitCount, limit)} / ${limitCount}`}
💳 Game Limit : ${isOwner ? 'Unlimited' : cekGLimit(sender, gcount, glimit)} / ${gcount}
💷 Balance : $${getBalance(sender, balance)}
👛 Dompet : ${checkATMuser(sender)}
💱 Role : ${role}
🏧 Level : ${getLevelingLevel(sender)}
🏦 Xp : ${getLevelingXp(sender)}/${reqXp}

💌 Status : ${isPremium? `Premium User` : `Free user`}
⏰ Expired Prem : ${isPremium ? 'Unlimited Premium' : ` ${cek.getDay} d, ${cek.hours} h, ${cek.minutes} m, ${cek.seconds} s`}
👨‍ Register : ${isUser? `Done`:`Belum Daftar`}
🚫 Baned : ${isBanned?`True`:`False`}`
let papakpo = [{
										"buttonId": `!inventori`,
										"buttonText": {
											"displayText": "INVENTORY"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `!sewabot`,
										"buttonText": {
											"displayText": "SEWA"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, userProcfile , `© ${ownername}`,pp_userz, papakpo, {contextInfo: { mentionedJid: [sender]}})
}
break
    case 'joinrpg':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

          if (!isGroup) return reply(mess.only.group)
          var lovel = Math.ceil(Math.random() * 10);  
          addLevelingXp(sender, lovel) 
		  if (isPetualang) return reply('Kamu sudah menjadi petualang')
	   	  _petualang.push(sender)
		  fs.writeFileSync('./database/rpg/_petualang.json', JSON.stringify(_petualang))
		  capt = `🎉Selamat ${pushname}🎊\nKamu terdaftar sebagai petualang!`
		  yoriss.sendMessage(from, capt, text, {quoted: yor})		
		  addInventori(sender)
	      addLevelingId(sender)
		  break
		  
case 'inventori':
case 'myinventori':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
          if (!isGroup) return reply(mess.only.group)
         if (!isPetualang) return reply(mess.only.player)
          var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
          done = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n • Nama : ${pushname}\n • Rank : ${role}\n • Status : ${elit}\n • Xp : ${getLevelingXp(sender)}/${reqXp}\n • Level : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n • Emas : ${getEmas(sender)}🪙\n • Uang : $${(getBalance(sender, balance))}💰\n • Besi : ${getBesi(sender)}⛓️\n • Berlian : ${getDm(sender)}💎\n • Ikan : ${getFish(sender)}🎣`)
          but = [{ buttonId: `${prefix}adventure`, buttonText: { displayText: 'Adventure' }, type: 1 }]
          sendButton(from, done, 'Inventori User', but)
          break
case 'mancing':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)  
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)	
          ikannya = ikan[Math.floor(Math.random() * ikan.length)]
	      xp = Math.ceil(Math.random() * 100)          
	      coin = randomNomor(50)	    
	      ditangkap = Math.ceil(Math.random() * 50)
	      cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
	      setTimeout( () => {
	      caption = monospace(`「 Memancing 」\n\n • Tangkapan : ${ikannya}\n • Total Dapat : ${ditangkap} Ikan\n • MONEY : $${coin}\n • EXP : ${xp}Xp`)
          but = [
          { buttonId: `${prefix}mancing`, buttonText: { displayText: 'Mancing lagi' }, type: 1 },
          { buttonId: `${prefix}myinventori`, buttonText: { displayText: 'Cek Inventori' }, type: 1 }
           ]
          sendButLocation(from, caption, 'Memancing', cing, but, {quoted: yor})      
          }, 6000)
          setTimeout( () => {
		  yoriss.sendMessage(from, 'Berhasil Mendapatkan Ikan. . .', text) 
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  yoriss.sendMessage(from, '🎣Meanarik kail. . .', text) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  yoriss.sendMessage(from, '🎣Mulai memancing. . .', text) 
		  }, 1500) // 1000 = 1s,
		  addFish(sender, ditangkap)
		  addLevelingXp(sender, xp)
		  addBalance(sender, coin, balance) 
          gameAdd(sender, glimit)        
	      break 

case 'sellikan':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
         if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 5 * jmlh
          if (getFish(sender) < jmlh) return reply(`Ikan Kamu Tidak Cukup`)
          sellFish(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Ikan : 5\n • Status : Sukses\n • Sisa Ikan : ${getFish(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButton(from, capti, 'sellikan', but)          
          break
    case 'sellbesi':
   if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
  
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 10 * jmlh
          if (getBesi(sender) < jmlh) return reply(`Besi Kamu Tidak Cukup`)
          sellBesi(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Besi : 10\n • Status : Sukses\n • Sisa Besi : ${getBesi(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButton(from, capti, 'sellikan', but)                    
          break          
    case 'sellemas':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 25 * jmlh
          if (getEmas(sender) < jmlh) return reply(`Emas Kamu Tidak Cukup`)
          sellEmas(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Emas : 25\n • Status : Sukses\n • Sisa Emas : ${getEmas(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButton(from, capti, 'sellikan', but)                    
          break 
    case 'selldiamond':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          ttl = body.slice(13)
          var etoo = 75 * ttl
          if (getDm(sender) < ttl) return reply(`Besi Kamu Tidak Cukup`)
          sellDm(sender, ttl)
          addBalance(sender, etoo, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Dm : 75\n • Status : Sukses\n • Sisa Diamond : ${getDm(sender)}\n • Hasil Penjualan : $${etoo}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButton(from, capti, 'sellikan', but)                    
          break                                

case 'adventure':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)   
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
         // if (isHealt(sender)) return reply('Healt')
          ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
	      const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
          const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
          anu = fs.readFileSync('./database/lib/rpg/dungeon.js');
          const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
          jsonData = JSON.parse(anu);
	      randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
	      hasm = await getBuffer(randKey.result)  
	      const adven = Math.ceil(Math.random() * 1000)          
	      const money = Math.ceil(Math.random() * 300)					      	      
	      setTimeout( () => {		
          caption = monospace(`「 DEATH 」\n\n • Tempat  ${ad}\n • MONEY : $${money}\n • EXP : ${adven}Xp`)
          but = [
          { buttonId: `${prefix}myinventori`, buttonText: { displayText: 'Inventori' }, type: 1 }]
          sendButLocation(from, caption, 'Memancing', hasm, but, {quoted: yor})   
          }, 7000)
          setTimeout( () => {
		  yoriss.sendMessage(from, `Awass`, text) 
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  yoriss.sendMessage(from, `Tiba tiba ada ${sesuatu}`, text) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  yoriss.sendMessage(from, `${pushname} sedang bertualang`, text) 
		  }, 1500) // 1000 = 1s,
		  addLevelingXp(sender, adven)
		  addBalance(sender, money, balance) 
          gameAdd(sender, glimit)        
          break
   	case 'mining':
   	  if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
  
 	      if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)     
   	      if (!isGroup) return reply(mess.only.group)                         
          if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)                              
          if (!isPetualang) return reply(mess.only.player)
          pp = randomNomor(75)
          emas = randomNomor(15)
          dm = randomNomor(3)
          besi = randomNomor(50)
          done = monospace(`Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`)
          addBalance(sender, pp, balance)          
          addBesi(sender, besi)
          addEmas(sender, emas)
          addDm(sender, dm)
          mining = ('Waitt sedang menguli . . .')
		  setTimeout( () => {		//case by pebri
		  but = [{ buttonId: `${prefix}mining`, buttonText: { displayText: 'Mining again' }, type: 1 }]
          sendButton(from, done, 'Mining', but)
		  }, 9000) // 1000 = 1s,
		  setTimeout( () => {
		  yoriss.sendMessage(from, '🚧 selesai menguli. . .🪙👷', text) 
		  }, 7000) // 1000 = 1s,
	      setTimeout( () => {
		  yoriss.sendMessage(from, '🚧 menemukan emas. . .⚒️🏔️️️', text) 
		  }, 4000) // 1000 = 1s,
		  setTimeout( () => {
		  yoriss.sendMessage(from, '🚧 mulai menambang. . .⚒️🏔️️', text) 
		  }, 1500) // 1000 = 1s,
		  setTimeout( () => {
		  yoriss.sendMessage(from, mining, text, {quoted: yor}) 
		  }, 0) // 1000 = 1s,
	      break	  
	      
case 'slime': case 'killslime':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
   	      if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  //if (isPetualang) return reply('Kamu sudah menjadi petualang') 
          ez = Math.ceil(Math.random() * 400)
          pp = randomNomor(75)
          emas = randomNomor(15)
          duit = randomNomor(400)
          dm = randomNomor(32)
          besi = randomNomor(50)
          ppi = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗦𝗹𝗶𝗺𝗲️\n\n🎁 Hadiah Membunuh Slime\n • Uang : $${duit}\n • Besi : ${besi}\n • Emas : ${emas}\n • Diamond : ${dm}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          addBalance(sender, pp, balance) 
          addLevelingXp(sender, ez)         
          addBesi(sender, besi)
          addEmas(sender, emas)
          addDm(sender, dm)
		  but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, ppi, 'Rpg Game@^1.2.3', slime, but, {quoted: yor}) 
	      gameAdd(sender, glimit) 
	      break	  

    case 'goblin': case 'killgoblin':
      if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

           if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 500)
          addLevelingXp(sender, ez)
          att = randomNomor(65)
          btt = randomNomor(500)
          ctt = randomNomor(90)
          dtt = randomNomor(5)
          addLevelingXp(sender, ez)
          addBalance(sender, btt, balance)
          addEmas(sender, att)          
          addBesi(sender, ctt)
          addDm(sender, dtt)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗚𝗼𝗯𝗹𝗶𝗻\n\n🎁 Hadiah Membunuh Goblin\n • Uang : $${btt}\n • Besi : ${ctt}\n • Emas : ${att}\n • Diamond : ${dtt}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', goblin, but, {quoted: yor})                  
          gameAdd(sender, glimit) 
          break                      
          
     case 'devil': case 'killdevil':
      if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

           if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 700)
          pp = randomNomor(75)
          emas = randomNomor(155)
          duit = randomNomor(190)
          dm = randomNomor(232)
          besi = randomNomor(250)
          ppi = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝘃𝗶𝗹️\n\n🎁 Hadiah Membunuh Devil\n • Uang : $${duit}\n • Besi : ${50}\n • Emas : ${emas}\n • Diamond : ${32}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          addBalance(sender, pp, balance) 
          addLevelingXp(sender, ez)         
          addBesi(sender, besi)
          addEmas(sender, emas)
          addDm(sender, dm)
		  but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, ppi, 'Rpg Game@^1.2.3', devil, but, {quoted: yor}) 
	      gameAdd(sender, glimit) 
	      break	  
         
    case 'behemoth': case 'killbehemoth':
      if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

           if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 700)
          pp = randomNomor(75)
          emas = randomNomor(155)
          duit = randomNomor(190)
          dm = randomNomor(32)
          besi = randomNomor(50)
          ppi = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗕𝗲𝗵𝗲𝗺𝗼𝘁𝗵️\n\n🎁 Hadiah Membunuh Behemoth\n • Uang : $${duit}\n • Besi : ${besi}\n • Emas : ${emas}\n • Diamond : ${dm}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          addBalance(sender, pp, balance) 
          addLevelingXp(sender, ez)         
          addBesi(sender, besi)
          addEmas(sender, emas)
          addDm(sender, dm)
		  but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, ppi, 'Rpg Game@^1.2.3', behemoth, but, {quoted: yor}) 
	      gameAdd(sender, glimit) 
	      break	  
	                    
    case 'demon': case 'killdemond': 
      if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

           if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
		  if (!isPremium) return reply('Upss sepertinya kakak bukan petualang pro!\nchat ownet untuk menjadi petualang pro')
          ez = Math.ceil(Math.random() * 850)
          addLevelingXp(sender, ez)
          aio = randomNomor(90)
          bio = randomNomor(900)
          cio = randomNomor(120)
          dio = randomNomor(10)
          addLevelingXp(sender, ez)
          addBalance(sender, bio, balance)
          addEmas(sender, aio)          
          addBesi(sender, cio)
          addDm(sender, dio)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻️\n\n🎁 Hadiah Membunuh Demond\n • Uang : $${bio}\n • Besi : ${cio}\n • Emas : ${aio}\n • Diamond : ${dio}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', demon, but, {quoted: yor})                  
          gameAdd(sender, glimit) 
          break  
    case 'demonking': case 'killdemondking':
      if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

           if (isBanned) return reply(mess.ban)
	      if (!isGroup) return reply(mess.only.group)    
          if (!isOwner) return reply ('Hanya Untuk GM')    
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 750)
          aio = randomNomor(90)
          bio = randomNomor(900)
          cio = randomNomor(120)
          dio = randomNomor(10)
          addLevelingXp(sender, ez)
          addBalance(sender, bio, balance)
          addEmas(sender, aio)          
          addBesi(sender, cio)
          addDm(sender, dio)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻𝗞𝗶𝗻𝗴\n\n🎁 Hadiah Membunuh DemonKing\n • Uang : $${bio}\n • Besi : ${aio}\n • Emas : ${cio}\n • Diamond : ${dio}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', demonking, but, {quoted: yor})                  
          gameAdd(sender, glimit) 
          break 
   case 'luckyday':  case 'luckytime':
   if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
		  //if (!isPetualang) return reply('Kamu sudah menjadi petualang')
          if (isPremium) {
          ez = Math.ceil(Math.random() * 750)
          aio = randomNomor(90)
          bio = randomNomor(900)
          cio = randomNomor(120)
          dio = randomNomor(10)
          addLevelingXp(sender, ez)
          addBalance(sender, bio, balance)
          addEmas(sender, aio)          
          addBesi(sender, cio)          
          za = monospace(`🎰 LuckyTime\n• Uang : $${bio}\n• Emas : ${cio}\n• Besi : ${aio}\n• Xp : ${ez}`)
          but = [{ buttonId: '!luckytime', buttonText: { displayText: 'LuckyTime Again' }, type: 1 }]
          sendButton(from, za, '@LuckyTime', but, mek)   
          }else{
          ez = Math.ceil(Math.random() * 750)
          aio = randomNomor(90)
          bio = randomNomor(900)
          cio = randomNomor(120)
          dio = randomNomor(10)
          addLevelingXp(sender, ez)
          addBalance(sender, bio, balance)
          addEmas(sender, aio)          
          addBesi(sender, cio)        
          za = monospace(`🎰 LuckyTime\n• Uang : $${bio}\n• Emas : ${cio}\n• Besi : ${aio}\n• Xp : ${ez}`)
          but = [{ buttonId: '!luckytime', buttonText: { displayText: 'LuckyTime Again' }, type: 1 }]
          sendButton(from, za, '@LuckyTime', but, mek)          
          }  
          gameAdd(sender, glimit)  
          break	      
                   
case 'event':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)      
          pp = 'on or off?'
          but = [
           { buttonId: `!epen 1`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!epen 0`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'Event Group', but,)
          break 	
    case 'epen':
            if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

           if (isBanned) return reply(mess.ban)
		  if (!isGroup) return reply(mess.only.group)
	      if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		  if (args.length < 1) return reply('Boo :𝘃')
		  if (Number(args[0]) === 1) {
		  if (isEventon) return reply('*SUDAH AKTIF* !!!')
		  event.push(from)
		  fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
		  reply('*❬ SUKSES ❭ MENGAKTIFKAN EVENT DI GRUB INI*')
		  } else if (Number(args[0]) === 0) {
		  event.splice(from, 1)
		  fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
		  reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
		  } else {
		  reply('eeee')
		  }										
		  break  
case 'levelup':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
const userRank = Ranking.getUserRank(sender, _level);
const currentLevel = getLevelingLevel(sender);
var requiredXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1);
var lovel = Math.ceil(Math.random() * 100);  
addLevelingXp(sender, lovel);
              try {
              profilePic = await yoriss.getProfilePicture(sender)
              } catch {
              profilePic = errorImg
}
teks = `◦❍ 𝗫𝗣 : ${getLevelingXp(sender)} / ${requiredXp}\n◦❍ 𝗥𝗼𝗹𝗲 : ${role}\n◦❍ 𝗟𝗲𝘃𝗲𝗹 : ${getLevelingLevel(sender)} \ 𝗥𝗮𝗻𝗸 : ${Number(userRank)}`
buffer = await getBuffer(`https://hardianto.xyz/api/rankcard?profile=${encodeURIComponent(profilePic)}&name=${encodeURIComponent(pushname)}&bg=https://telegra.ph/file/33f2bac2e9e832cbf21da.jpg&needxp=${requiredXp}&curxp=${getLevelingXp(sender)}&level=${getLevelingLevel(sender)} \ Rank ${Number(userRank)}&logorank=https://i.ibb.co/Wn9cvnv/FABLED.png`)
//buffer = await getBuffer(`https://api.lolhuman.xyz/api/rank?apikey=${lolkey}&img=${profilePic}&background=https://telegra.ph/file/2de7316f0982dd18d306a.jpg&username=${pushname}&level=${getLevelingLevel(sender)}&ranking=${Number(userRank)}&currxp=${getLevelingXp(sender)}&xpneed=${requiredXp}`)
trans = 'Note : Kumpulin Xp Jika Ingin Menaikkan Level'
but = [{ buttonId: `${prefix}levelup`, buttonText: { displayText: 'Level Up' }, type: 1 }]
sendButImage(from, teks, trans, buffer, but)
.catch(e =>{
reply(`◦❍ 𝗫𝗣 : ${getLevelingXp(sender)} / ${requiredXp}\n◦❍ 𝗥𝗼𝗹𝗲 : ${role}\n◦❍ 𝗟𝗲𝘃𝗲𝗹 : ${getLevelingLevel(sender)} / 𝗥𝗮𝗻𝗸 : ${Number(userRank)}\nNote : Kumpulin Xp Jika Ingin Menaikkan Level`)})
break
case 'leaderboard':
case 'lb':
if (!isUser) return sendButMessage(from, daftar1, daftar2, daftar3 )
if (!isGroup) return reply(mes.only.grup)
		  _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
		  let leaderboardlvl = '𝗧𝗢𝗣 𝗟𝗘𝗔𝗗𝗘𝗥𝗕𝗢𝗔𝗥𝗗\n\n'
		  let nom = 0
		  try {
		  for (let i = 0; i < 25; i++) {
		  nom++
		  leaderboardlvl += `*[Level: ${_level[i].level}]* ━ *[XP: ${_level[i].xp}]*\n____________________________\n*${nom}*. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n━━━━━━━━━━━━━━━━━\n`
		  }
		  await reply(leaderboardlvl)} 
		  catch (err) {
		  console.error(err)
await reply(`minimal 10 user untuk bisa mengakses database`)}                
break
//Ephoto 360 menu
case 'balloons-love':
case '3dgalaxy-metal':
case '3dgold':
case 'avengers':
case 'bear':
case 'wolf-logo':
case 'wolver':
case 'tiger-logo':
case 'text-wall':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} FAKE BOTZ`)
txt1 = args[0]
txt2 = args[1] 
teks = `◌  ⃝✧⪼nih kak ${pushname} dah jadi.`
buffer = await getBuffer(`https://api.violetics.pw/api/ephoto360/${command}?apikey=beta&text=${txt1}&text2=${txt2}`)
trans = `✧${jam}◌${Tanggal}⪼`
but = [{ buttonId: `${prefix}frome`, buttonText: { displayText: `${command}` }, type: 1 }]
sendButImage(from, teks, trans, buffer, but)
.catch(e =>{
reply('Sepertinya server sedang eror ')})
limitAdd(sender, limit)
break 

case 'anonymous-neon':
case 'anonymous-neon':
case 'anonymous-neon':
case 'angels-wings':
case 'bear2':
case 'bee':
case 'women-day':
case 'typography-maker3':
case 'tiger':
case 'text-rain':
case 'text-party':
case 'storm-trooper':
case 'status-mood':
case 'status-mood2':
case 'status-mood3':
case 'status-mood4':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} FAKE BOTZ`)
txt1 = args.join(' ')
teks = `◌  ⃝✧⪼nih kak ${pushname} dah jadi.`
buffer = await getBuffer(`https://api.violetics.pw/api/ephoto360/${command}?apikey=beta&text=${txt1}`)
trans = `✧${jam}◌${Tanggal}⪼`
but = [{ buttonId: `${prefix}frome`, buttonText: { displayText: `${command}` }, type: 1 }]
sendButImage(from, teks, trans, buffer, but)
limitAdd(sender, limit)
.catch(e =>{
reply('Sepertinya server sedang eror')})
break 

case 'get':
reply (`*_${getLimit(sender, limitCount, limit)}_*`)

case 'happymod':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} FAKE BOTZ`)
ini_txt = args.join(" ")
apk = await fetchJson(`https://api.violetics.pw/api/apk/happymod?apikey=beta&apps=${ini_txt}`)
teks = `◌  ⃝✧⪼nih kak ${pushname} dah jadi.`                           
buffer = await getBuffer(apk.thumbnail.length)                                    
trans = `✧${jam}◌${Tanggal}⪼`
but = [{ buttonId: `${prefix}frome`, buttonText: { displayText: `${command}` }, type: 1 }]
sendButImage(from, teks, trans, buffer, but)
.catch(e =>{
reply('Sepertinya server api.lolhuman.xyz sedang eror / rest apikey habiss:) ')})
limitAdd(sender, limit)
break
break
//»»»Photo Oxy        
    case 'shadow':  case 'cup':
    case 'cup1':     case 'romance':
    case 'smoke':   case 'burnpaper':
    case 'lovemessage': case 'undergrass':
    case 'love':      case 'coffe':
    case 'woodheart': case 'woodenboard':
    case 'summer3d': case 'wolfmetal':
    case 'nature3d':   case 'underwater':
    case 'golderrose': case 'summernature':
    case 'letterleaves': case 'glowingneon':
    case 'fallleaves':   case 'flamming':
    case 'harrypotter': case 'carvedwood':                  
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} FAKE BOTZ`)
ini_txt = args.join(" ")
teks = `◌  ⃝✧⪼nih kak ${pushname} dah jadi.`                           
buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`)                                    
trans = `✧${jam}◌${Tanggal}⪼`
but = [{ buttonId: `${prefix}frome`, buttonText: { displayText: `${command}` }, type: 1 }]
sendButImage(from, teks, trans, buffer, but)
.catch(e =>{
reply('Sepertinya server api.lolhuman.xyz sedang eror / rest apikey habiss:) ')})
limitAdd(sender, limit)
break
case 'arcade8bit':
case 'battlefield4':
case 'pubg':                                             
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} FAKE BOTZ`)
txt1 = args[0]
txt2 = args[1] 
teks = `◌  ⃝✧⪼nih kak ${pushname} dah jadi.`
buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
trans = `✧${jam}◌${Tanggal}⪼`
but = [{ buttonId: `${prefix}frome`, buttonText: { displayText: `${command}` }, type: 1 }]
sendButImage(from, teks, trans, buffer, but)
.catch(e =>{
reply('Sepertinya server api.lolhuman.xyz sedang eror / rest apikey habiss:) ')})
break
  //   // Textprome //
    case 'blackpink':      case 'neon':
    case 'greenneon':     case 'advanceglow':
    case 'futureneon':    case 'sandwriting':
    case 'sandsummer':  case 'sandengraved':
    case 'metaldark':     case 'neonlight':
    case 'holographic':   case 'text1917':
    case 'minion':        case 'deluxesilver':
    case 'newyearcard':  case 'bloodfrosted':
    case 'halloween':     case 'jokerlogo':
    case 'fireworksparkle':case 'natureleaves':
    case 'bokeh':         case 'toxic':
    case 'strawberry':    case 'box3d':
    case 'roadwarning':  case 'breakwall':
    case 'icecold':        case 'luxury':
    case 'cloud':          case 'summersand':
    case 'horrorblood':   case 'thunder':    
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} FAKE BOTZ`)
ini_txt = args.join(" ")
teks = `◌  ⃝✧⪼nih kak ${pushname} dah jadi.`                           
buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
trans = `✧${jam}◌${Tanggal}⪼`
but = [{ buttonId: `${prefix}frome`, buttonText: { displayText: `${command}` }, type: 1 }]
sendButImage(from, teks, trans, buffer, but)
.catch(e =>{
reply('Sepertinya server api.lolhuman.xyz sedang eror / rest apikey habiss:) ')})
limitAdd(sender, limit)
break

    case 'pornhub':      case 'glitch':
    case 'avenger':      case 'space':
    case 'ninjalogo':     case 'marvelstudio':
    case 'lionlogo':      case 'wolflogo':
    case 'steel3d':       case 'wallgravity':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} FAKE BOTZ`)
txt1 = args[0]
txt2 = args[1] 
teks = `◌  ⃝✧⪼nih kak ${pushname} dah jadi.`
buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
trans = `✧${jam}◌${Tanggal}⪼`
but = [{ buttonId: `${prefix}frome`, buttonText: { displayText: `${command}` }, type: 1 }]
sendButImage(from, teks, trans, buffer, but)
.catch(e =>{
reply('Sepertinya server api.lolhuman.xyz sedang eror / rest apikey habiss:) ')})
limitAdd(sender, limit)
break

case 'ppcouple':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
teks = `◌  ⃝✧⪼ Cowoknya.....`
teks2 = `◌  ⃝✧⪼ Ceweknya.....`
anu = await fetchJson (`https://api.zacros.my.id/randomimg/ppcouple`)
buffer = await getBuffer(anu.male)
buffer2 = await getBuffer(anu.female)
trans = `✧${jam}◌${Tanggal}⪼`
but = [{ buttonId: `${prefix}frome`, buttonText: { displayText: `${command}` }, type: 1 }]
sendButImage(from, teks, trans, buffer, but)
.catch(e =>{
reply('Sepertinya server sedang eror')})
await sleep(5000)
but = [{ buttonId: `${prefix}frome`, buttonText: { displayText: `${command}` }, type: 1 }]
sendButImage(from, teks2, trans, buffer2, but)
.catch(e =>{
reply('Sepertinya server sedang eror')})
limitAdd(sender, limit)
reply(`_*Limit terpakai 1*`)
break 
//sewa					  
	case 'sewacheck':
	case 'ceksewa':
	if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
	if (!isGroup) return reply(mess.only.grup)
	if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
	let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
	let premiumnya = `*「 SEWA EXPIRED 」*\n\n📛 *ID*: ${from}\n⏰ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
	reply(premiumnya)
	break

	case 'sewa':
	if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
	if (!isGroup)return reply(mess.only.grup)
	if (!mek.key.fromMe && !isOwner ) return reply(mess.only.owner)
	if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
	if (args[0] === 'add'){
	_sewa.addSewaGroup(from, args[1], sewa)
	reply(lang.success())
	} else if (args[0] === 'del'){
	sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
	fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
	reply(lang.success())
	} else {
	reply(`Example : *${prefix}sewa* add/del waktu`)
	}
	break
	
	case 'sewalist': 
	case 'listsewa':
	if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
	let txtnyee = `*「 LIST SEWA」*\nJumlah : ${sewa.length}\n\n`
	for (let i of sewa){
	let cekvipp = ms(i.expired - Date.now())
	txtnyee += `🆔 *ID :* ${i.id} \n⏰ *Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
	}
	reply(txtnyee)
	break
				case 'belipremium': case 'buypremium': case 'sewabot': case 'goprem':
							let sewalak = await getBuffer('https://telegra.ph/file/5e96a14f1ebaee0df2e24.jpg')
							sendButLocation(from, pc_sewa() , `©  ${ownername}`,sewalak,  [{"buttonId": `payment`,"buttonText": {"displayText": "PAYMENT"},"type": "RESPONSE"}], {})
							break

case 'wallpaper':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)							
          buffer = await getBuffer (`https://megayaa.herokuapp.com/api/random/wallpaper`).catch(e =>{
          reply('Sepertinya server sedang eror')})
    	  var bb = await yoriss.prepareMessage(from, buffer, image,)
          var buttonnsss = [{buttonId:`${prefix + command}`,buttonText: {displayText: '⚠️ 𝗡𝗘𝗫𝗧️'}, type: 1}]
          var ButtonssMessages = {
          contentText: ` ${command} Success By : ${botname} `,
          buttons: buttonnsss,
          footerText: `*Klik Next Untuk Melanjutkan*`,
          headerType: 4,
          imageMessage: bb.message.imageMessage
          }
          await yoriss.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : mek})
          limitAdd(sender, limit)
          break
          case 'akaneko':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)							
          buffer = await getBuffer (`https://megayaa.herokuapp.com/api/akaneko/neko`).catch(e =>{
          reply('Sepertinya server sedang eror')})
    	  var bb = await yoriss.prepareMessage(from, buffer, image,)
          var buttonnsss = [{buttonId:`${prefix + command}`,buttonText: {displayText: '⚠️ 𝗡𝗘𝗫𝗧️'}, type: 1}]
          var ButtonssMessages = {
          contentText: ` ${command} Success By : ${botname} `,
          buttons: buttonnsss,
          footerText: `*Klik Next Untuk Melanjutkan*`,
          headerType: 4,
          imageMessage: bb.message.imageMessage
          }
          await yoriss.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : mek})
          limitAdd(sender, limit)
          break

          case 'cuddle': case 'awoo': case 'waifu':         
          case 'neko': case 'shinobu': case 'megumin':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)							
          anu = await fetchJson(`https://api.waifu.pics/sfw/${command}`).catch(e =>{
          reply('Sepertinya server sedang eror')})
          buffer = await getBuffer (anu.url)
    	  var bb = await yoriss.prepareMessage(from, buffer, image,)
          var buttonnsss = [{buttonId:`${prefix + command}`,buttonText: {displayText: '⚠️ 𝗡𝗘𝗫𝗧️'}, type: 1}]
          var ButtonssMessages = {
          contentText: ` ${command} Success By : ${botname} `,
          buttons: buttonnsss,
          footerText: `*Klik Next Untuk Melanjutkan*`,
          headerType: 4,
          imageMessage: bb.message.imageMessage
          }
          await yoriss.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : mek})
          limitAdd(sender, limit)
          break 

case 'husbu': case 'milf': case 'cosplay': case 'wallml': case 'loli':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
          let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
    	  var bb = await yoriss.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
          var buttonnsss = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]
          var ButtonssMessages = {
          contentText: `*Antum Birahi Dengan ${command}!Tobat Brother*`,
          buttons: buttonnsss,
          footerText: `Klik Next Untuk Melanjutkan`,
          headerType: 4,
          imageMessage: bb.message.imageMessage
          }
          await yoriss.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : mek})
          fs.unlinkSync(`./${sender}.jpeg`)
          limitAdd(sender, limit)
          break
       
    case "twitter":
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})          
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
           if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
           return reply(mess.error.url);
           if (!c) return fakegroup("Linknya?");
           teka = args[0];
           var res = await hx.twitter(`${teka}`);
           ren = `${g.HD}`;
           sendMediaURL(from, ren, "Nih kak video nya!!");
           limitAdd(sender, limit)
           break;
                                                                           
//_Nsfw Features_
case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot': 
case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm': 
case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri':	 			
if (!isNsfw && !isOwner) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
if (isGroup && !isOwner) return reply(mess.only.group) 
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
reply("*[❗] SEDANG DIPROSES*")	    
nyz125 = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
.catch(e =>{
reply('*[❗] Sepertinya server sedang eror*')})
nyz126 = await getBuffer(nyz125.result)
yoriss.sendMessage(from, nyz126, image, {quoted: yor, caption: `✧⪼nih kak ${pushname} >.<`})
limitAdd(sender, limit)
break

case 'neko': 
if (!isNsfw && !isOwner) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
if (isGroup && !isOwner) return reply(mess.only.group) 
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/nsfw/ass?apikey=${zerokey}`)
.catch(e =>{
reply('Sepertinya server sedang eror')})
goo = await getBuffer(huft.result)
yoriss.sendMessage(from, goo, image, {quoted: yor, caption: `✧⪼nih kak ${pushname} >.<`})
limitAdd(sender, limit)
break

case 'blowjob2':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isNsfw && !isOwner) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
anu = await fetchJson(`https://waifu.pics/api/nsfw/blowjob`).catch(e =>{
reply('Sepertinya server sedang eror')})
buffer = await getBuffer(anu.url)
anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": botname , 'jpegThumbnail': fs.readFileSync(`database/image/banner.jpg`)}}}}
yoriss.sendMessage(from, buffer, image, anu)
limitAdd(sender, limit) 
break

case 'nsfw':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}nsfw 1`)
if (Number(args[0]) === 1) {
if (isNsfw) return reply('Sudah Aktif Kak')
nsfww.push(from)
fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
reply('Sukses mengaktifkan fitur nsfw')
yoriss.sendMessage(from, `Bebas Nyari Hentai :v`, text)
} else if (Number(args[0]) === 0) {
if (!isNsfw) return reply('Sudah Mati Kak')
var ini = nsfww.indexOf(from)
nsfww.splice(ini, 1)
fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
reply('Sukses menonaktifkan fitur nsfw')
} else {
reply('1 untuk mengaktifkan, 0 untuk mematikan')
}
break
//Asupan
case 'asupanukhti':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${zerokey}`)
.catch(e =>{
reply('Sepertinya server sedang eror')})
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
yoriss.sendMessage(from, buffer, video, {quoted: yor, caption: 'Nih Asupan >.<'})
limitAdd(sender, limit)
break
case 'asupanbocil':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${zerokey}`)
.catch(e =>{
reply('Sepertinya server sedang eror')})
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
yoriss.sendMessage(from, buffer, video, {quoted: yor, caption: 'Nih Asupan >.<'})
limitAdd(sender, limit)
break
case 'asupanghea':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${zerokey}`)
.catch(e =>{
reply('Sepertinya server sedang eror')})
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
yoriss.sendMessage(from, buffer, video, {quoted: yor, caption: 'Nih Asupan >.<'})
limitAdd(sender, limit)
break
case 'asupanrika':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${zerokey}`)
.catch(e =>{
reply('Sepertinya server sedang eror')})
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
yoriss.sendMessage(from, buffer, video, {quoted: yor, caption: 'Nih Asupan >.<'})
limitAdd(sender, limit)
break
case 'asupansantuy':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${zerokey}`)
.catch(e =>{
reply('Sepertinya server sedang eror')})
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
yoriss.sendMessage(from, buffer, video, {quoted: yor, caption: 'Nih Asupan >.<'})
limitAdd(sender, limit)
break

case 'korea': case 'malaysia': case 'thailand': case 'vietnam':
case 'cecan': case 'chinese': case 'indonesia': case 'japan':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
reply(mess.wait)
buffer = await getBuffer(`https://api.violetics.pw/api/asupan/${command}?apikey=beta`)
yoriss.sendMessage(from, buffer, image, {quoted: yor, caption: `Nih ${command} >.<`})
.catch(e =>{
reply('Sepertinya server sedang eror')})
limitAdd(sender, limit)
break
//━━━━━━━━━━━━━━━[ FITUR ISLAMI ]━━━━━━━━━━━━━━━━━//

case 'listsurah':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'alquran':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (args.length < 1) return reply(`Nomor Surah Yg Mau Di Cari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolkey}`
quran = await fetchJson(urls)
result = quran.result
ayat = result.ayat
ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
arab = x.arab
nomor = x.ayat
latin = x.latin
indo = x.indonesia
ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
reply(ini_txt)
break
case 'alquranaudio':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (args.length == 0) return reply(`Nomor Surah Yg Mau Dicari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10`)
reply('Sabar Sedang Proses...')
surah = args[0]
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
await zeroyt7.sendMessage(from, ini_buffer, audio, { quoted: fstatus, mimetype: Mimetype.mp4Audio })
break
case 'asmaulhusna':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
reply(ini_txt)
break
case 'kisahnabi':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (args.length == 0) return reply(`Nama Nabi Yg Mau Dicari Mana\nContoh : ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
reply(ini_txt)
break
case 'jadwalsholat':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (args.length == 0) return reply(`Nama Kotanya Mana\nContoh : ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.imsak}\n`
ini_txt += `Isya : ${get_result.isya}`
reply(ini_txt)
break

          case 'quotemaker':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} fakebotz`)
          ini_txt = args.join(" ")
          getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
          but = [
          { buttonId: `!allmenu`, buttonText: { displayText: 'back to menu' }, type: 1 }]
          sendButImage(from, `${command}`, `✧⪼nih kak ${pushname} >.<`, gambar, but)
          limitAdd(sender, limit)
          })
          break
          
case 'quotemaker2':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if(!q) return reply(`Example : ${prefix}quotemaker2 quotes|author`)
g1 = q.split('|')[0]
g2 = q.split('|')[1]
reply(mess.wait)
glitch = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${g1}&author=${g2}`)
.catch(e =>{
reply('Sepertinya server sedang eror')})
yoriss.sendMessage(from, glitch, image, { quoted: yor})
limitAdd(sender, limit)
            break
case 'quotemaker3':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length == 0) return reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix + command}`)
ini_txt = args.join(" ")
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await yoriss.downloadMediaMessage(boij)
resuuu = await uploadImages(owgi)
reply(mess.wait)
buff = await getBuffer(`https://api.lolhuman.xyz/api/quotemaker3?apikey=${lolkey}&text=${ini_txt}&img=${resuuu}`)
.catch(e =>{
reply('Sepertinya server sedang eror')})
yoriss.sendMessage(from, buff, image, { caption: `✧⪼nih kak ${pushname} >.<`})
break            

case 'quote-maker':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} quoted nya?`)
          ini_txt = args.join(" ")
          getBuffer(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${ini_txt}&apikey=IkyOgiwara`).then((gambar) => {
          but = [
          { buttonId: `!allmenu`, buttonText: { displayText: 'back to menu' }, type: 1 }]
          sendButImage(from, `${command}`, `✧⪼nih kak ${pushname} >.<`, gambar, but)
          .catch(e =>{
reply('Sepertinya server sedang eror')})
          limitAdd(sender, limit)
          })
          break
          
     case 'quotes':
 if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*― ${author}*`)
                    break
                case 'quotesanime':
            if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
                    .catch(e =>{
reply('Sepertinya server sedang eror')})
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
                    break
case 'quotesdilan': 
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
                    quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
                                        .catch(e =>{
reply('Sepertinya server sedang eror')})
                    reply(quotedilan.result)
                    break   
               case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
            if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
                                        .catch(e =>{
reply('Sepertinya server sedang eror')})
                    reply(get_result.result)
                    break       
 //»»»Other 𝘔𝘦𝘯𝘶	 								
       case 'image':
       case 'gimage':
       case 'googleimage':
          if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              if (isBanned) return reply(mess.banned)
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              reply(mess.wait)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: yor, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break

case 'pinterest':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isBanned) return reply(mess.banned)
if (!c) return reply('Apa Yang Mau Dicari?')
pinterest(`${c}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${c}`)
})
break   

              case 'google':
case 'googlesearch':
case 'ggs':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'brainly':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (isBanned) return reply(mess.banned)
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					yoriss.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            }).catch(e => {
					reply('Terjadi kesalahan, coba beberapa saat lagi')
					})             
					await limitAdd(sender, limit)
					break
					                   							
//fitur Game
		  case 'tebakin': case 'tebakgambar':{
		  if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
					if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
					if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let tebak = result.img
                    let jawaban = result.jawaban
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/src/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    let tebakya = await getBuffer(tebak)
                    yoriss.sendMessage(from, tebakya, image, {caption: `Deskripsi : ${result.deskripsi}\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10`})
                    await sleep(120000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                                yoriss.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*➸ Jawaban :*"  + '\n' + '_'+ jawaban +'_', text) // ur cods
								delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/src/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    gameAdd(sender, glimit)}
					break   

case 'siapakahaku': case 'siapaaku':{
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
		if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
					if (siapakahaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let jawaban = `${result.jawaban}`
                    siapakahaku[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/src/siapakahaku.json", JSON.stringify(siapakahaku))
                    console.log(jawaban)
                    let tebakya = result.soal
                    yoriss.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, )
                    await sleep(120000)
                    if (siapakahaku.hasOwnProperty(sender.split('@')[0])) {
                                yoriss.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text) // ur cods
								delete siapakahaku[sender.split('@')[0]]
                        fs.writeFileSync("./database/src/siapakahaku.json", JSON.stringify(siapakahaku))
                    }
                     gameAdd(sender, glimit)}
					break   
				case 'tebakkalimat':{ 
				if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
		if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
					if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
					let jawaban = `${result.jawaban}`
                    tebakkalimat[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/src/tebakkalimat.json", JSON.stringify(tebakkalimat))
                    console.log(jawaban)
                    tebakya = result.soal
                    yoriss.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text,)
                    await sleep(120000)
                    if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) {
                                yoriss.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text) // ur cods
								delete tebakkalimat[sender.split('@')[0]]
                        fs.writeFileSync("./database/src/tebakkalimat.json", JSON.stringify(tebakkalimat))
                    }
                     gameAdd(sender, glimit)}
					break   
				case 'tebakkata':{
				if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
		if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
					if (tebakkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
					let jawaban = `${result.jawaban}`
                    tebakkata[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/src/tebakkata.json", JSON.stringify(tebakkata))
                    console.log(jawaban)
                    tebakya = result.soal
                    yoriss.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text,)
                    await sleep(120000)
                    if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
                                yoriss.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text) // ur cods
								delete tebakkata[sender.split('@')[0]]
                        fs.writeFileSync("./database/src/tebakkata.json", JSON.stringify(tebakkata))
                    }
                     gameAdd(sender, glimit)}
					break   
					case 'tebaklirik':{
					if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
		if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
					if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
					let jawaban = `${result.jawaban}`
                    tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/src/tebaklirik.json", JSON.stringify(tebaklirik))
                    console.log(jawaban)
                    tebakya = result.soal
                    yoriss.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text,)
                    await sleep(120000)
                    if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
								yoriss.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, ) // ur cods
								delete tebaklirik[sender.split('@')[0]]
                        fs.writeFileSync("./database/src/tebaklirik.json", JSON.stringify(tebaklirik))
                    }
                     gameAdd(sender, glimit)}
					break   
				case 'tekateki':{
				if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
		if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
					if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
					let jawaban = `${result.jawaban}`
                    tekateki[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/src/tekateki.json", JSON.stringify(tekateki))
                    console.log(jawaban)
                    tebakya = result.soal
                    yoriss.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, )
                    await sleep(120000)
                    if (tekateki.hasOwnProperty(sender.split('@')[0])) {
                                yoriss.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, ) // ur cods
								delete tekateki[sender.split('@')[0]]
                        fs.writeFileSync("./database/src/tekateki.json", JSON.stringify(tekateki))
                    }
                     gameAdd(sender, glimit)}
					break  
				case 'susunkata':{
				if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
		if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
					if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
					let jawaban = `${result.jawaban}`
                    let tipenya = `${result.tipe}`
                    susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/src/susunkata.json", JSON.stringify(susunkata))
                    console.log(jawaban)
                    tebakya = result.soal
                    yoriss.sendMessage(from, "Soal : " + tebakya + '\n' +"Tipe : " + tipenya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, )
                    await sleep(120000)
                    if (susunkata.hasOwnProperty(sender.split('@')[0])) {
                                yoriss.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '  '+ jawaban +'', text, ) // ur cods
								delete susunkata[sender.split('@')[0]]
                        fs.writeFileSync("./database/src/susunkata.json", JSON.stringify(susunkata))
                    }
                    gameAdd(sender, glimit)}
					break  
				case 'caklontong':{ 
				if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
				if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
					if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json`)
					let result = anu[Math.floor(Math.random() * anu.length)]
                    let tebakya = result.soal
                    let tebak = `Pertanyaan : ${tebakya}`
					let jawaban = `${result.jawaban}`
                    let desc = result.deskripsi
                    caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/src/caklontong.json", JSON.stringify(caklontong))
                    console.log(jawaban)
                    yoriss.sendMessage(from, tebak + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10', text)
                   await sleep(120000)
                    if (caklontong.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban + '\n' + "Desc : " + desc )
                        delete caklontong[sender.split('@')[0]]
                        fs.writeFileSync("./database/src/caklontong.json", JSON.stringify(caklontong))
                    }
                     gameAdd(sender, glimit)}
					break   
//»»»𝘛𝘰𝘰𝘭𝘴 𝘔𝘦𝘯𝘶          				
    case "jadibot":
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})    
if (!isOwner && !isPremium) return sendButton(from, Prem1, Prem2, Prem3) 
          if (mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
          jadibot(reply, yoriss, from);
          break;
    case "stopjadibot":
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

          if (mek.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
          stopjadibot(reply);
          break;
    case "listbot":
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

          let tekss = "「 *LIST JADIBOT* 」\n";
          for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}\n*Nama* : ${i.name}\n*Device* : ${i.phone.device_manufacturer}\n*Model* : ${i.phone.device_model}\n\n`;
          }
          reply(tekss);
          break;    

//»»»Owner 𝘔𝘦𝘯𝘶	 
//------------------< Sticker Cmd >-------------------
       case 'addcmd': 
       case 'setcmd':
          if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              if (isBanned) return reply(mess.banned)
              if (!isPremium && !isOwner) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              teks = args.join(" ")
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, `${prefix}${teks}`)
              reply("Done!")
              } else {
              reply('tag stickenya')
}
              break 
       case 'delcmd':
          if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              if (isBanned) return reply(mess.banned)
              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/prefix_seticker.json', JSON.stringify(_scommand))
              reply("Done!")
              break
       case 'listcmd':
          if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              if (isBanned) return reply(mess.banned)
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
//------------------< premium menu >-------------------
case 'premium': case 'prem':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
							if (args.length === 0) return reply(`Kirim perintah *${prefix}premium* add/del 62xxx waktu (misal 1 hari -> 1d)\nExample:\n${prefix}premium add 62887435047326 1d`)
							if (!isOwner) return reply('onlyOwner')
							if (args[0] === 'add') {
								if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									premium.addPremiumUser(mentioned[0], args[2], _premium)
									reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${mentioned[0]}\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
									} else {
										premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
										reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${args[1]}@s.whatsapp.net\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
										}
										} else if (args[0] === 'del') {
											if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
									fs.writeFileSync('./database/premiun.json', JSON.stringify(_premium))
									reply('success')
									} else {
										_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
										fs.writeFileSync('./database/premiun.json', JSON.stringify(_premium))
										reply('success')
										}
										} else {
											reply('emror')
											}
							break
							
       case 'premiumcheck':
       case 'cekpremium': 
          if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              if (isBanned) return reply(mess.banned)
              if (!isPremium) return reply(mess.only.premium)
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case 'listprem':
       case 'listpremium':          
          if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              if (isBanned) return reply(mess.banned)
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              break  
//===Up SW		   
    case 'upswteks':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          if (args.length < 1) return reply('Teksnya?')
          teks = body.slice(10)
          yoriss.sendMessage('status@broadcast', teks, MessageType.text)
          reply(`Sukses upload status:\n${teks}`)
          break	
    case 'upswlokasi':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

          if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
          if (args.length < 1) return reply('Teksnya?')
          teks = body.slice(12)
          yoriss.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${fakeyoi}`}, MessageType.location)
          reply(`Sukses upload lokasi:\n${teks}`)
          break	
    case 'upswsticker':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          if (!isQuotedSticker) return reply('Reply stikernya!')
          if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
	      const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	      buff = await yoriss.downloadMediaMessage(encmedia)
	 	  yoriss.sendMessage('status@broadcast', buff, sticker)
	      }
		  reply(`Sukses upload sticker`)
          break
    case 'upswaudio':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          if (!isQuotedAudio) return reply('Reply audionya!')
          if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
	      const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	      buff = await yoriss.downloadMediaMessage(encmedia)
	      yoriss.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
		  }
		  reply(`Sukses upload audio`)
		  break
    case 'upswvoice':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

          if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerBl)
          if (!isQuotedAudio) return reply('Reply audionya!')
          if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
		  const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          buff = await yoriss.downloadMediaMessage(encmedia)
		  yoriss.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
	 	  }
		  reply(`Sukses upload voice`)
		  break
    case 'upswvideo':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          if (args.length < 1) return reply('Teksnya?')
          var konti = body.slice(11)
          reply(mess.wait)
          var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      var mediap = await yoriss.downloadAndSaveMediaMessage(enmediap)
          const buffer3 = fs.readFileSync(mediap)
          yoriss.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
          reply(`Sukses upload video:\n${konti}`)
          break
    case 'upswgif':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          if (args.length < 1) return reply('Teksnya?')
          var konti = body.slice(7)
          reply(mess.wait)
          enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await yoriss.downloadAndSaveMediaMessage(enmedia)
          const buffer6 = fs.readFileSync(media)
          yoriss.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
          reply(`Sukses upload gif:\n${konti}`)
          break
    case 'upswimage':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          if (args.length < 1) return reply('Teksnya?')
          var teksyy = body.slice(11)
          reply(mess.wait)
          enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await yoriss.downloadAndSaveMediaMessage(enmedia)
          buffer = fs.readFileSync(media)
          yoriss.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: yor, caption: `${teksyy}`})
          reply(`Sukses upload image:\n${teksyy}`)
          break		                                                        			          						  		            					 			               						  		            					 			                         						  		            					 			               						  		            					 			                         						  		            					 			               						  		            					 			                         						  		            					 			               						  		            					 			               
//══════════[ Fitur fun]══════════//
case 'suit':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
if (args.length < 1) return reply('Pilih gunting/batu/kertas')
if (args[0] === 'gunting' ) {
gunting = [
"Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
"Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
"Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
]
gun = gunting[Math.floor(Math.random() * gunting.length)]
reply(gun)
} else if (args[0] === 'kertas') {
ker = [
"Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
"Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
"Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
]
kertas = ker[Math.floor(Math.random() * ker.length)]
reply(kertas)
} else if (args[0] === 'batu') {
bat = [
"Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
"Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
"Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
]
batu = bat[Math.floor(Math.random() * bat.length)]
reply(batu)
} else {
reply('Pilih gunting/batu/kertas')
}
break
case 'apakah':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              yoriss.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: yor })
              break
       case 'rate':
       case 'nilai':
   if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              yoriss.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: yor })
              break
       case 'gantengcek':
       case 'cekganteng':
   if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              yoriss.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: yor })
              break
       case 'cantikcek':
       case 'cekcantik':
   if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              yoriss.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: yor })
              break
       case 'cekwatak':
   if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              var namao = pushname
              var prfx = await yoriss. getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await fakestatus(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'bisakah':
   if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              yoriss.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: yor })
              break
       case 'kapankah':
   if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              yoriss.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: yor })
              break
              case 'jadian':
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
   if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
   if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Yang Paling Ganteng Adalah :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
   if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
   if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break            
			case 'slot':
			if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
									const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🍐 : 🍊','🍐 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇 ','🍌 : 🍒 : 🔔','🍐 : 🔔 :  🔔','🍊 : 🍋 :  🍒','🍋 : 🍋 :  🍌','?? : 🔔 : 🍇','🔔 : 🍐 :  🍇','🔔 : 🔔 :  🔔','🍒 : 🍒 :  🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
									somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
									somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
									somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
									if (somtoyy== '🍌 : 🍌 : 🍌') {
										bp = await sendButMessage(from, `─「 🎰 *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
									{
										buttonId: `slot`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
										} else if (somtoyy == '🍒 : 🍒 : 🍒') {
									bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
									{
										buttonId: `slot`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
										} else if (somtoyy == '🔔 : 🔔 : 🔔') {
											bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
												} else if (somtoyy == '🍐 : 🍐 : 🍐') {
													bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
														} else if (somtoyy == '🍇 : 🍇 : 🍇') {
															bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
																} else {
																	ok = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲  *YOU LOSE*  ❳──\nKAMU BAU!`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
											}
															break
case 'truth':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
yoriss.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: yor })
break
case 'dare':
if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
yoriss.sendMessage(from, buff, image, { caption: '*Dare*\n\n'+ der, quoted: yor })
break

      case 'addupdate': 
         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
             if (!isOwner) return reply(mess.only.owner)
             if (!q) return reply(`Example: ${command} update fitur`)
           _update.push(q)
             fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))
             reply(`Update fitur berhasil ditambahkan ke database!`)
             break
      case 'update': 
         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
             let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
             for (let i of _update) {
             updateList += `࿃ *${i.replace(_update)}*\n\n`
}
             textImg(updateList)
             break
      case 'reset': 
         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
             if (!isOwner) return reply(mess.only.owner)
             var reset = []
             glimit = reset
             console.log('Hang tight, it\'s time to reset')
             fs.writeFileSync('./database/limitan/limit.json', JSON.stringify(glimit, null, 2))
             textImg('Oke Desu ~')
             break
      case 'exif': 
         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
             if (!isOwner) return  reply(mess.only.owner)
             if (!q) return reply(mess.wrongFormat)
             if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             reply('sukses')
             break      
      case 'joingroup':  
         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = yoriss.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
      case 'term': 
         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
      case 'shutdown': 
         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'start': 
         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
             if (!isOwner) return 
             reply(`OTEWE MENGHIDUPKAN MESIN??`)
             await sleep(3000)
             process.exit()
             break             
      case 'restart': 
         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main`)
             reply('_Restarting Bot Success_')
             break
case 'anjing':
case 'patrick': case 'bucinstick':
case 'amongus': case 'gawrgura':
anu1 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/${command}?apikey=${lolkey}`)
yoriss.sendMessage(from, anu1, sticker, {quoted: yor})
.catch(e =>{
reply('eror dalam perbaikan')})
await limitAdd(sender, limit)
break
//»»»Storage 𝘔𝘦𝘯𝘶	 
case 'addsticker': 
         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
	         if (!isOwner) return reply(mess.only.owner)
				if (!isQuotedSticker) return reply('Reply stiker nya')
				if (!q) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await yoriss.downloadMediaMessage(boij)
				setiker.push(`${q}`)
				fs.writeFileSync(`./database/media/stick/${q}.webp`, delb)
				fs.writeFileSync('./database/media/stick.json', JSON.stringify(setiker))
				yoriss.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: yor})
				break
case 'addimage': 
            if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

                if (isBanned) return reply(mess.banned)
				if (!isOwner) return reply(mess.only.owner)
				if (!isQuotedImage) return reply('Reply imagenya')
				if (!q) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await yoriss.downloadMediaMessage(boij)
				imagenye.push(`${q}`)
				fs.writeFileSync(`./database/media/foto/${q}.jpeg`, delb)
				fs.writeFileSync('./database/media/image.json', JSON.stringify(imagenye))
				yoriss.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: yor})
				break
			        
case 'addvn': 
            if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

                if (isBanned) return reply(mess.banned)
				if (!isOwner) return reply(mess.only.owner)
				if (!isQuotedAudio) return reply('Reply vnnya')
				if (!q) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await yoriss.downloadMediaMessage(boij)
				audionye.push(`${q}`)
				fs.writeFileSync(`./database/media/audiovn/${q}.mp3`, delb)
				fs.writeFileSync('./database/media/vn.json', JSON.stringify(audionye))
				yoriss.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: yor})
				break 
case 'liststicker': 
         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				yoriss.sendMessage(from, teks.trim(), extendedText, { quoted: yor, contextInfo: { "mentionedJid": setiker } })
				break				
case 'listimg': 
         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
				teks = '*list image :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				yoriss.sendMessage(from, teks.trim(), extendedText, { quoted: yor, contextInfo: { "mentionedJid": setiker } })
				break				
		
case 'listvn': 
         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				yoriss.sendMessage(from, teks.trim(), extendedText, { quoted: yor, contextInfo: { "mentionedJid": audionye } })
				break	
case 'getsticker': 
         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
				try {
				result = fs.readFileSync(`./database/media/stick/${q}.webp`)
				yoriss.sendMessage(from, result, sticker,{quoted:mek})
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break				
case 'getimage': 
         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
				try {
				buffer = fs.readFileSync(`./database/media/foto/${q}.jpeg`)
				yoriss.sendMessage(from, buffer, image, { quoted: yor, caption: `Result From Database : ${q}.jpeg` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
case 'getvn': 
         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
				try {
				buffer = fs.readFileSync(`./database/media/audiovn/${q}.mp3`)
				yoriss.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: yor, ptt: true })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
   case 'nulis':
									reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
						case 'nuliskiri':{
									         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./database/media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										yoriss.sendMessage(from, fs.readFileSync('./database/media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: yor, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'nuliskanan':{
									         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./database/media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										yoriss.sendMessage(from, fs.readFileSync('./database/media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: yor, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokiri':{
									         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./database/media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										yoriss.sendMessage(from, fs.readFileSync('./database/media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: yor, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokanan':{
									         if (!isUser) return sendButton(from, daftar1, daftar2, daftar3, { quoted: yor})

             if (isBanned) return reply(mess.banned)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./database/media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										yoriss.sendMessage(from, fs.readFileSync('./database/media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: yor, caption: `Jangan Malas`})
										limitAdd(sender, limit)
									})
									}
									break      
										
      
//━━━━[ End of Features ]━━━━//

default:
     if (!mek.key.fromMe) return;
        if (cmd.startsWith(">")) {
          try {
            return yoriss.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: yor }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
    }
    
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
     yoriss.sendMessage(`${setting.OwnerNumber}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer DyOraclev1",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./database/image/emror.jpg'),sourceUrl:"https://wa.me/6281358965281?text=Puntenn...."}}})
	}
    }
    }
    }
    }
    }
    }
    


	
    

const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./database/lib/color')
const fs = require("fs-extra")
const simple = require('./database/lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const brightcolor  = require('colors');
const encodeUrl = require('encodeurl')
const chalk = require('chalk')
const moment = require("moment-timezone")
const figlet = require('figlet')
const gcdetect = JSON.parse(fs.readFileSync('./database/gcdetect.json'))
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./database/lib/functions')
const { settings, NamaSession, OwnerNumber } = require('./config/setting.json')
const errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
			
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')			
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')			
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')	

//nocache
nocache('./Design.js', module => console.log(color('|UPDATE BASE|'), color(`${module} Updated!`, 'red')))


const starts = async (helga = new WAConnection()) => {
	helga.logger.level = 'warn'
	helga.version = [2, 2140, 14]
	console.log(color(`\x1b[1;37m> Base New\n`,'red'))
	console.log(color(figlet.textSync('Helga Base', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'yellow'))
	console.log(color('\n> GitHub : ','red'), color(`HelgaIlham`,'white'))
	console.log(color('> YouTube : ','red'), color(`Helga Zexs`,'white'))
console.log(color('> TikTok : ','red'), color(`@ilhamgz_20`,'white'))
console.log(color('> Instagram : ','red'), color(`@helga_store20`,'white'))
console.log(color('\n\n\n Big Thanks To\n\n','orange'), color(`Allah SWT\nMy Parents\nMy Family\nHelga Ilham\n`,'purple'))
	helga.browserDescription = [ 'Base Helga', 'ubuntu', '3.0' ]

	helga.on('qr', () => {
	console.log(color('Helga','yellow'), color('New','yellow'), color('Base','yellow'), color('[ Scan QR Nya ]'))
})
	helga.on('credentials-updated', () => {
		fs.writeFileSync(`./config/${NamaSession}.json`, JSON.stringify(helga.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Base Helga')
	})
	fs.existsSync(`./config/${NamaSession}.json`) && helga.loadAuthInfo(`./config/${NamaSession}.json`)
	helga.on('connecting', () => {
		start('2', 'NewBase')
	})
	helga.on('open', () => {
		success('2', 'Done, Welcome Owner🎯')
	})
    
	await helga.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./config/${NamaSession}.json`, JSON.stringify(helga.base64EncodedAuthInfo(), null, '\t'))
    
   
   helga.on('chat-update', async (mek) => {
        require('./Design.js')(helga, mek)
        ownerNumber = ["6281358965281@s.whatsapp.net","6281358965281@s.whatsapp.net",`${OwnerNumber}@s.whatsapp.net`]
        dtod = "6281358965281@s.whatsapp.net"
       otod = `${OwnerNumber}@s.whatsapp.net`
    })   
    
    //SERAH LU MAU GANTI KYK MANA
        helga.on('group-participants-update', async (anu) => {
           mem = anu.participants[0]
           num = anu.participant
			const mdata = await helga.groupMetadata(anu.jid)
			memeg = mdata.participants.length
			sender = anu.participants[0]
			      let v = helga.contacts[sender] || { notify: sender.replace(/@.+/, "") }
      anu_user = v.vname || v.notify || sender.split('@')[0] || '-'
		    try {
			console.log(anu)
			if (anu.action == 'add') {
			//const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        	//if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;helga;;;\nFN:helga\nitem1.TEL;waid=6281337541779:6281337541779\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		    num = anu.participants[0]
      try {
        pp_user = await helga.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
      try {
        pp_group = await helga.getProfilePicture(anu.jid)
      } catch (e) {
        pp_group =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
			
			let buff = await getBuffer(`https://api.dhamzxploit.my.id/api/canvas/welcome2?name=${encodeURIComponent(anu_user)}&mem=${encodeURIComponent(memeg)}&gcname=${mdata.subject}&picurl=${encodeURIComponent(pp_user)}&bgurl=https://megayaa.herokuapp.com/api/akaneko/mobileWallpapers`)
			masuk =`Halo @${num.split('@')[0]}\nSelamat Datang Di ${mdata.subject}\n\n*Silahkan Ketik .menu Untuk\nMelihat List😊*`
			gbutsan = [{buttonId:'SERAH',buttonText:{displayText:'👋Welcome'},type:1}]
			mhan = await helga.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: pp_user})
const buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${masuk}`,
footerText: `𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 ٬࿊⃟𝒀𝒐𝒓𝒊𝒔𝒔 𝑫𝒆𝒔𝒊𝒈'𝒏シ︎`, 
buttons: gbutsan,
headerType: 4 }
			helga.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, {thumbnail: fs.readFileSync('./database/image/emror.jpg'), "contextInfo": { mentionedJid: [num]}, caption: 'Tes', quoted: fkontakk})
			} else if (anu.action == 'remove') {
			//const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        	//if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;helga;;;\nFN:helga\nitem1.TEL;waid=6281337541779:6281337541779\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			pp_user = await helga.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			pp_user = errorImg
			}
     buff = await getBuffer(`https://api.dhamzxploit.my.id/api/canvas/goodbye2?name=${encodeURIComponent(anu_user)}&mem=${encodeURIComponent(memeg)}&gcname=${encodeURIComponent(mdata.subject)}&picurl=${encodeURIComponent(pp_user)}&bgurl=https://megayaa.herokuapp.com/api/akaneko/mobileWallpapers`)
			keluar =`Selamat tinggal @${num.split('@')[0]}`
			gbutsan = [{buttonId:'SERAH',buttonText:{displayText:'👋Byee'},type:1}]
			mhan = await helga.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: pp_user})
const buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${keluar}`,
footerText: `𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 ٬࿊⃟𝒀𝒐𝒓𝒊𝒔𝒔 𝑫𝒆𝒔𝒊𝒈'𝒏シ︎`,
buttons: gbutsan,
headerType: 4 }
			helga.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, { thumbnail: fs.readFileSync('./database/image/emror.jpg'), "contextInfo": { mentionedJid: [num]}, caption: 'Tes', quoted: fkontakk})
			} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;helga;;;\nFN:helga\nitem1.TEL;waid=6281337541779:6281337541779\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
shp = '◦➛'
var thu = await helga.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*P R O M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}\n\nDon't break the rules!`
helga.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;helga;;;\nFN:helga\nitem1.TEL;waid=6281337541779:6281337541779\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
shp = '◦➛'
thu = await helga.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*D E M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}`
helga.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	       

	helga.on('group-update', async (anu) => {
		const metdata = await helga.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;helga;;;\nFN:helga\nitem1.TEL;waid=6282138919347:6282138919347\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    helga.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    helga.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    helga.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    helga.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    helga.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }
})

helga.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        helga.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        helga.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./database/image/emror.jpg'),sourceUrl:`https://wa.me/6282138919347?text=Assalamualaikum`}}})
        await sleep(5000)
        await helga.blockUser(callerId, "add")
        })
        
	helga.on('message-delete', async (m) => {
if (!m.key.fromMe && !antidelete) {
if (!m.key.remoteJid == 'status@broadcast') return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = helga.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = helga.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
});
helga.copyNForward(m.key.remoteJid, m.message)
helga.sendMessage(m.key.remoteJid, `▷\`\`\`Anti Delete\`\`\`

▢ \`\`\`Nama : @${m.participant.split("@")[0]}\`\`\`
▢ \`\`\`Tipe : ${c3type}\`\`\`
▢ \`\`\`Tanggal : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
}


function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()

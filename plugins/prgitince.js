//modified @ princerudh 
	

const Rudh = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

Rudh.addCommand({pattern: 'git', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```β± Time :' + plk_say + '```\n\n ```π Date :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: 'πππ§ \n\n\n ββββββββββββββββββββ \n      β ~Ιͺα΄sα΄α΄ ANSHID~ β \n ββββββββββββββββββββ \n ββββββββββββββββββββ \n β£β \n β£β *α΄α΄α΄ α΄Κα΄α΄α΄Κ* : ANSHID \n β£β \n β£β *Ι΄α΄α΄Κα΄Κ* : wa.me/916238560742 \n β£β \n β£β *Κα΄α΄ Ι’Κα΄α΄α΄* https://chat.whatsapp.com/Hgg2xYpPhTHLk77Jcisdq6 \n β£β \n β£β *ΙͺΙ΄sα΄α΄* :https://instagram.com/_0anshid0_ \n β£β \n β£β *Ι’Ιͺα΄* :https://github.com/ANU-SER/COSMIC-V1  \n β£β \n β£β     βββββββββββββ\n β£β     βββββββββββββ \n β£β         β’ANSHIDπ¨ \n β£β \n ββββββββββββββββββββ \n βββββββββββββββββ \n ββββββββββββββββββββ \n β£β        β© *COSMIC* βͺ \n ββββββββββββββββββββ'}, type: 1},

      ]
      
      const buttonMessage = {
          contentText: ' ΚΚ α΄α΄α΄α΄....ππ»\n\n         β *Κα΄α΄ ΙͺΙ΄?α΄* β\n\nπΎ Ι΄α΄α΄α΄  : ' + Config.BOTV2 + '\nπΎ sα΄α΄α΄α΄s : α΄α΄ΚΚΙͺα΄\nπΎ α΄Ιͺα΄α΄   : ```' + plk_say + '```\nπΎ α΄α΄α΄α΄ : ```' + plk_here + '```\nπΎ α΄α΄Κ?Ιͺx : [ . ]\n\n         β *α΄Κα΄α΄α΄α΄Κ* β\n\nπ¨π»βπ» *ANSHID* \n\n          β *α΄Κα΄Ι΄α΄ Κα΄α΄* β\n\nπΎ α΄ΚΙͺα΄α΄ α΄α΄Ι΄α΄ α΄Ι΄α΄ α΄Ι΄α΄α΄Κ α΄Κα΄ Κα΄α΄\n',
          footerText: 'β’ANSHID',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { mimetype: Mimetype.buttonsMessage, quoted: message.data, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 99999, status: 200, thumbnail: fs.readFileSync('P3R3R03.jpg'), surface: 200, message: Config.BOTV2, orderTitle: Config.BOTV2, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOTV2 + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1080, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('P3R3R03.jpg')}}}});
	
}));

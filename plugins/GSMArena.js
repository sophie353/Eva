/* created by anirudhsudheer
*/

const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');



if (Config.WORKTYPE == 'private') {
	
Asena.addCommand({pattern: 'device ?(.*)', fromMe: true, desc: Lang.DEVICE , dontAddCommandList: false }, async (message, match) => {
	const url = `https://api.lolhuman.xyz/api/gsmarena?apikey=ab7df38f1d53e257d50a575b&query=${match[1]}`;
	try {
		const response = await got(url);
    
		const json = JSON.parse(response.body);
    
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid,  'NAME      : *' + json.title + '* \n' + 'DATE      :'+ json.released + 'WEIGHT    :' + json.weight + '\n' + 'VERSION   :'+ json.os_version + '\n' + 'ROM       :' + json.storage + '\n' + 'DISPLAY   :'+ json.display_size  + '\n' + 'RAM       :' + json.ram + '\n' + 'BATTERY   :'+ json.battery + '\n' + 'MP        :' + json.camera_pixel + '\n' + 'VIDEO MP  :'+ json.video_pixel , MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});
}

else if (Config.WORKTYPE == 'public') {
	
Asena.addCommand({pattern: 'device ?(.*)', fromMe: false, desc: Lang.DEVICE , dontAddCommandList: false }, async (message, match) => {
	const url = `https://api.lolhuman.xyz/api/gsmarena?apikey=ab7df38f1d53e257d50a575b&query=${match[1]}`;
	try {
		const response = await got(url);
    
		const json = JSON.parse(response.body);
    
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid,  '``` NAME      : *' + json.title + '* \n' + 'DATE      :'+ json.released + '\n' + 'WEIGHT    :' + json.weight +  'VERSION   :'+ json.os_version + '\n' + 'ROM       :' + json.storage + '\n' + 'DISPLAY   :'+ json.display_size  + '\n' + 'RAM       :' + json.ram + '\n' + 'BATTERY   :'+ json.battery + '\n' + 'MP        :' + json.camera_pixel + '\n' + 'VIDEO MP  :'+ json.video_pixel + '```' , MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});
	 Asena.addCommand({pattern: 'what now', fromMe: true, desc: Lang.NEWEP }, (async (message, match) => {  
       
        await message.sendMessage('*CMND* \n .device\n *DESC* \n know details of a mobilephone\n *example:* .device rog 5\n\n *CMND* \n .rdmore\n *DESC* \n add readmore after give text\n *example:* .rdmore Eva\n\n *CMND* \n.brdmore\n *DESC* \n add readmore before given text\n *example:* .brdmore Eva\n\n *CMND* \n.bgm one \n .bgm two \n *DESC* \n will change the type of reply bgm \n *example:* .bgm one (.bgm one \n is the default bgm mode - to change that use .bgm two ) ', MessageType.text,{ quoted: message.data });
        
    }));
}
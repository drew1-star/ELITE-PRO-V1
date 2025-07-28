require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"AGTK9oQ0mE7p/RW98qsldrDc7ymd4z7CpSb4HMHO+UU="},"public":{"type":"Buffer","data":"Evieksn0WI4DIHFoy/inhtqJ4GRPYMQemUCdncRIJ1c="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"wDTxy2owfjhdk1zzS9ROaiJsXtQoe2I5XBX3yjwgqEI="},"public":{"type":"Buffer","data":"US7mirzZDsHHLNIRKZiaWQ7l/e0Bwg8+MLCR9VF06Tk="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"eJGL3JuJwsMKD1+Mgvwcxve/hJ1M8+hyp3sJlfDOakA="},"public":{"type":"Buffer","data":"IzrxTqk6Mq0sJWh3cupL5AmaW2YBZ9xNVV9bSupJ/wg="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"iBhFtVWFxnOlXsr7sEnfNb94wq6rWZ7kFjEHwbE3mnM="},"public":{"type":"Buffer","data":"YiruyIAbbCCfzEKxQk7U5zLdexznwxFYRCX2d3dQT2s="}},"signature":{"type":"Buffer","data":"4eJfhrQSDB9bJSfSyXbgd7jXc7yENglCxqvtwpISXaDqtH/LZuiQfmkTo4QvHVEgGi478VxV6OHTBjKCl7Tpjw=="},"keyId":1},"registrationId":74,"advSecretKey":"2tdEGYmqTNuP4RSL7AK4AKHAZ2v/GID0kdlZDx/ow+Q=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"5Y5T4J19","me":{"id":"263785785040:75@s.whatsapp.net","lid":"259987859349513:75@lid"},"account":{"details":"CP2E5KEHEKiXnsQGGAQgACgA","accountSignatureKey":"paNwEKhOXam/431mly18TXbsNPO9V2deKSMEheUJvWY=","accountSignature":"QvtThm0b2/OUQkJa5jDycMYVegDDwdcOoRZZtSJjRpc7X/CW7xX6ei4KZYr18Zxgw4jFQ+1zxyC6OPIyV2QfCg==","deviceSignature":"1qLe4T8qo3HBmEknQJ9zlcOEX0v4tMTc0xc4Vu0Z7bboFh89zGiqiAshO+r7idamxsYQDc/QjZanmO4W/LVJhQ=="},"signalIdentities":[{"identifier":{"name":"263785785040:75@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BaWjcBCoTl2pv+N9ZpctfE127DTzvVdnXikjBIXlCb1m"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CBIIAg=="},"lastAccountSyncTimestamp":1753713578,"lastPropHash":"3gPUJk","myAppStateKeyId":"AAAAAIfH"}';
global.ytname = process.env.YT_NAME || "YT: @EliteProTech";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '2348109263390';
global.ownername = process.env.OWNER_NAME || 'ElitePro';
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'false'; // default true
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'ELITEPRO\n\nContact: +2348109263390';
// Default settings 2
global.typemenu = process.env.TYPE_MENU || 'v2';
global.wm = process.env.WM || "Youtube @EliteProTech";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Text bug
global.xbugtex = {
    xtxt: '👨‍💻ELITE-PRO👨‍💻',
};

// Reply messages
global.mess = {
    done: '*⿻ DONE: Task completed ✔️*',
    prem: '*⦿ This command is made for premium users.⁉️*',
    admin: '*⦿ This command is made for group admins.‼️*',
    botAdmin: '*⦿  Make bot admin to access commands⿻*',
    owner: '*⦿This commands is made for bot owner.*',
    group: '*⦿ This command is made for group chat❕*',
    private: '*⦿ This command is made for private chat ⭕*',
    wait: '*_⚙️PROCESSING DATA......_*',
    error: '*‼️AN ERROR OCCUR‼️*',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});

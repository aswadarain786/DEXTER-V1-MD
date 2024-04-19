const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '923419159670'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'PAKISTAN'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "923419159670"
global.devs = '923419159670';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+923419159670
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'null'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0Y1b1hWRlZzTVlPei9wV255UGp2VGZCNjhpRURBa1RZV1BFKzV5SUcwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDJzMEFHREN3YzFFY0VuREN2elpTQVluTVdETnJpaDNJbVNYZjhpd04zQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTkdjaXIzdk5KalR0UVpxS3F6dGVTU3pOdmZSb01neHpTOGk1SHFla1cwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0c1ZpYkZlVWdRUEFicUVFcCs3OXFOeDRGWGRVcmxsRzl4NnJCVHRYWG1VPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZHZ2dCdk1MVFh3Nm1Nc2RFTWZoT04zYmlOQzhVa1BtYjBQamMwa1dxVTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNnaHZFTWhpSnBtQUdmR0tHcGc2UGx3WjlDcm41L2U4VmZLRU1sbDB2MWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BGZGNIVHNTc3FmUUR2SDhGbHcyWGI4cVMwYUt1ZVhDeGhJUTJhbElHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3JrUkpidTAvSWE1Q3hDeXhhODYxZWNCQjl0K3FXUHU2Q1RFQjBWWm9tZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlNR1dsZThXR1lTaURZUWc2dG5XeDBzWFVqcm1ta1dScHBseHpVWW52L0I5eUlkamtaa080LzdDbmFJMW1EMFkvbXFxd01UUGRwQ1ZzeStOR2w5cWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA5LCJhZHZTZWNyZXRLZXkiOiJscnRQRG1KN091bTZjdEtiM0ZOOWx6a0Jsc2pnV2FwRkJyY1QrUjlta3FrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXRnBvcWh1eVNwbUl2SDRBYUg2Y2p3IiwicGhvbmVJZCI6ImMwN2M4YzJhLWY4NTktNGM1YS04MDk3LTAzNDcwNTZmZjQ0NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDMVoxQ1NTWHU0ZjhYL3h5Um90VE9lV2wweXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjJsMnNGdFkyaTY2UEx6UnhFeWZoc1NoVWhFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVQWkdONVhWIiwibWUiOnsiaWQiOiI5MjM0MTkxNTk2NzA6MzFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoifiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVdnbGJzQkVMejNpckVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTDN2dnlJSzBSclBCWXphbzdocWFvQktGSE1pbjNPMkt2SDVwcXE3RnFYND0iLCJhY2NvdW50U2lnbmF0dXJlIjoidVFSdmlsODVtWjdVNzdvcU41d29mbUxZUDlnSGxPNklrU0hDUGZBY0ZqZTRWSzRLZ1d2M1l2Q0ErcDJQTjh3anAveWRLVHo5Zi9vcjZyVHBOSElqQlE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik0wRzdxUFA0VGZZRi81c0hOVWZxTUY5VXJ2SDZtYWZyTlNMUURrQURLYnZqN01yZkhBL3g5SElXSVUrK2pmdlg3bE9zTlk5cy85RDVWdzZVL0RXQWpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDE5MTU5NjcwOjMxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlM5Nzc4aUN0RWF6d1dNMnFPNGFtcUFTaFJ6SXA5enRpcngrYWFxdXhhbCsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTM1NTIzMzAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSXdhIn0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'M ASWAD',
  packname:  process.env.PACK_NAME || 'M ASWAD',
  
  botname:   process.env.BOT_NAME === undefined ? "M ASWAD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'M ASWAD' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 

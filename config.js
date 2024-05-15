const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email =" "
global.location="Africa,Johannesburg"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github=process.env.GITHUB|| " ";
global.gurl  =process.env.GURL  || " ";
global.website=process.env.GURL || " " ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/aeb713d38428ce5d066c5.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || " " 


global.devs = "27672633675" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27672633675";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "trur" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/aeb713d38428ce5d066c5.jpg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_56_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgNDcsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTczLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICA0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDY4LFxuICAgICAgICAzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDk4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MixcbiAgICAgICAgMjI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjksXG4gICAgICAgIDUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcwLFxuICAgICAgICA3LFxuICAgICAgICAzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDcwLFxuICAgICAgICA3MixcbiAgICAgICAgMSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg5LFxuICAgICAgICA1MSxcbiAgICAgICAgNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWUndKOWp1VmZQNllvQ0U5dXNISVc0bDVLa1cvTC9ocVRGZFVoODFaMjRBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3Njc4NzQyNzEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFRUE1NTJBNTA5MjUxRTc2Nzg3MkFCQzBDQzU4Mjc3RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTU1MjIyMTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzY3ODc0MjcxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTU1NkNERkRCRjU5Q0FGNTkwMDkyODlFREUwNEI4RjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1NTIyMjEzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5aRHhsc29XUmttRElmV293TU91M0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTFhZTY5ZmEtZWNiMS00ZmEwLTkzMmYtNjEzYTE2MTQ2YWM5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNSxcbiAgICAgIDE5NSxcbiAgICAgIDIxNCxcbiAgICAgIDUxLFxuICAgICAgODIsXG4gICAgICAxNjMsXG4gICAgICAxNTUsXG4gICAgICA5NixcbiAgICAgIDIyNSxcbiAgICAgIDY0LFxuICAgICAgNjksXG4gICAgICAxNDAsXG4gICAgICA0MSxcbiAgICAgIDExOCxcbiAgICAgIDE1MyxcbiAgICAgIDI1NSxcbiAgICAgIDQ1LFxuICAgICAgMjI5LFxuICAgICAgMjUsXG4gICAgICAxMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODksXG4gICAgICAxMTQsXG4gICAgICA4NixcbiAgICAgIDEzOSxcbiAgICAgIDEzNixcbiAgICAgIDEwLFxuICAgICAgMTI4LFxuICAgICAgMjAwLFxuICAgICAgNjQsXG4gICAgICAxNzQsXG4gICAgICAyMzEsXG4gICAgICAxNjAsXG4gICAgICAxMDYsXG4gICAgICAxMjAsXG4gICAgICAyMjIsXG4gICAgICAxNjMsXG4gICAgICAxNDksXG4gICAgICAyMDEsXG4gICAgICA4NSxcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLSDlEVDlHQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjc2Nzg3NDI3MTI6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLlh6Dlt6XkuqHlm57jgZflh7Xlt7FcIixcbiAgICBcImxpZFwiOiBcIjI0NDc4MzQ1Njk3NzEyMToxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPWGJ1OXdDRUpxVmc3SUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBFQ3BDVVVLeHJWZGg1ZjVCd1VyNFpVRmNjeGN4b1lOTHBsblplNFhZMWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicVhHdmVWVDB2Rm1OS2d2aGl2bkl3UzRkYy9KekNpWGl5K3A4eG9MRHJJRlRsd1ZhVmg4enIrM253QXY3MSt1dGYrN2ZFOEZESTJPakpBLzVybWNtREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWVBvZ0JaSFpMQ1ZEbE9hN1FFc3JRaUJLS1hmMzFtWVhSRTNBNWp4anM3dmZCNXQybUxSUDNvTENZNUhnZDVGVVRESzhuSXRSSXR4MllHQTgxbGN2RHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc2Nzg3NDI3MTI6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTUyMjIwN1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "-",
  ownername:process.env.OWNER_NAME|| "",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

global.owner = ['6283894391287']  
global.mods = ['6283894391287'] 
global.prems = ['6283894391287']
global.nameowner = 'Pak PurPur'
global.numberowner = '6283894391287' 
global.mail = 'sanasricky01@gmail.com' 
global.gc = 'https://chat.whatsapp.com/Lk36YjtStGoCUfk96HarVE'
global.instagram = '-'
global.wm = '© PurPur'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'NueAI'
global.autobio = true // Set true untuk mengaktifkan autobio
global.maxwarn = '5' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'YOUR_APIKEY_HERE' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'YOUR_APIKEY_HERE'
//Daftar https://api.betabotz.eu.org 

//jangan diganti!
global.APIs = {   
  btc: 'https://api.botcahx.eu.org',
  widipe: 'https://widipe.com'
}

//ini tidak di isi juga tidak apa-apa
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'APIKEY' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

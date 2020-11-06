/*CMD
  command: /walletdoge
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /walletdoge
CMD*/

let coin = Bot.getProperty("coin","not set") 
let bacbutton = Bot.getProperty("backbutton","")

Bot.sendKeyboard(bacbutton," ✏️ Send now your "+coin+" Address to use it in future withdrawals!") 
Bot.runCommand("➤{wallet}➤") 

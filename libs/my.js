function main(text){
Bot.sendMessage(text)
}

// account hist function

function AccountHist(){

var hist = Bot.getProperty("acount_history" + user.telegramid, [])
let coin = Bot.getProperty("coin"); 
var msg =
  "*🗂 Transactions History*\n_Here you can find the last 15 transactions related to your account_\n\n"
if (hist.length > 15) {
  var max = hist.length * 1
  var min = max - 15
  var history = hist.slice(min, max)
} else {
  var history = hist
}

if (hist.length > 0) {
  for (var i in history) {
    var data = history[i]
    let time = data.time
    let reason = data.reason
    let amount = data.amount
    

msg+="*💰 Amount:* "+amount+" "+coin+"\n*Reason:* "+reason+"\n*📆 Date:* "+time+"\n\n"


  }
}
Bot.sendMessage(msg,{disable_web_page_preview: true})

}

// invest hist function

function InvestHist(){

var invest_history = Bot.getProperty("invest_history" + user.telegramid, [])
let coin = Bot.getProperty("coin");
msg = "*💵 Active Investment History*\n\n"
if (invest_history.length > 15) {
  var max = invest_history.length * 1
  var min = max - 15
  var history = invest_history.slice(min, max)
} else {
  var history = invest_history
}

if (invest_history.length > 0) {
  for (var i in history) {
    var data = history[i]
    let amount = data.amount
    let time = data.update
    let wallet = data.walletid
    let txid = data.txnID

    msg += "*~ Investment Amount:* +"+amount+" "+coin+"\n*📆 Time:* "+time+"\n*⛓ Transaction ID:*\n["+txid+"](https://tx.botdev.me/"+coin+"/"+txid+")\n*---------------------------------------*\n\n"
  }
}
if (invest_history.length==0) {
  Bot.sendMessage("*⚙️ Last 15 Active Investments*\n✨ No investments found")
} else {
  Bot.sendMessage(msg,{disable_web_page_preview: true})
}



var expired_history = Bot.getProperty("expired_history" + user.telegramid, [])

var msg1 = "*✅ Last 15 Expired Investment*\n\n"
if (expired_history.length > 15) {
  var max1 = expired_history.length * 1
  var min1 = max1 - 15
  var history1 = expired_history.slice(min1, max1)
} else {
  var history1 = expired_history
}

if (expired_history.length > 0) {
  for (var i in history1) {
    var data1 = history1[i]
    let amount = data1.amount
    let time = data1.update
    

    msg1 += "*💰 "+amount+" "+coin+"* invested\n*📆 "+time+"* last payment\n\n"
  }
}
if (expired_history.length== 0) {
  Bot.sendMessage("*✅ Last 15 Expired Investments*\n✨ No investments found")
} else {
  Bot.sendMessage(msg1,{disable_web_page_preview: true})
}

}
// withrowal hist function
function WithrowHist(){
var hist = Bot.getProperty("acount_history" + user.telegramid, [])
let coin = Bot.getProperty("coin"); 
var msg =
  "*🗂 Transactions History*\n_Here you can find the last 15 transactions related to your account_\n\n"
if (hist.length > 15) {
  var max = hist.length * 1
  var min = max - 15
  var history = hist.slice(min, max)
} else {
  var history = hist
}

if (hist.length > 0) {
  for (var i in history) {
    var data = history[i]
    let time = data.time
    let reason = data.reason
    let amount = data.amount
    

msg+="*💰 Amount:* "+amount+" "+coin+"\n*Reason:* "+reason+"\n*📆 Date:* "+time+"\n\n"


  }
}
Bot.sendMessage(msg,{disable_web_page_preview: true})
}
publish({
setRef:main,
gitRef:main,
gitRes:main,
onIncome:main,
deposit:main,
reinvest:main,
gitlink:main,
gitbalance:main,
gitstatus:main,
gitadmin:main,
gitbonus:main,
git:{wd:WithrowHist,in:InvestHist,ac:AccountHist},
gitwd:{menua:main,menub:main},
gitreturn:main        
})

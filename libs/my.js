

/*var main = "hi"

function getRes(resName){
  let res = Libs.ResourcesLib.userRes(resName); 
  return res    
}

function getResGlobal(globalName){
  var global = Libs.ResourcesLib.anotherChatRes(globalName, "global")
  return global    
}

function getProp(propName,nan){
  var prop = Bot.getProperty(propName,nan)
  return prop    
}   

var name = user.first_name;
var telegramid = user.telegramid;
var userid = user.id;
var username = user.username;
var lastname = user.last_name;


var coin = getProp("coin","not set")




//invest bjs
function invest(){

  var wallet = options.address
  var currency = options.currency
  var amountgg = options.amount
  var fiat_amount = options.fiat_amount
  var fiat_currency = options.fiat_coin
  var fee = options.fee
  var txn_id = options.txn_id
  var code = currency
  
  var on_convert = Bot.getProperty("on_convert","bitcoin");
  var list_full_name = Bot.getProperty("list_full_name",[])
   
  var x_from = "";
  var x_to = on_convert;
  
  var account;
  for (var ind in list_full_name) {
   var account = list_full_name[ind]
    if (account.code == code) {
      break
    }
  }
  x_from+=account.fullname
  
  var rates = JSON.parse(data.content)
  function convert(c_from, c_to,amountgg) {
    var main = 1
    var check1 = rates[c_from.toLowerCase()]
    var check2 = rates[c_to.toLowerCase()]
  
   if (!check1 || !check2) {
      return false
    } else {
      var tp = rates[c_from.toLowerCase()].usd
      var cp = rates[c_to.toLowerCase()].usd
  
      var xxx = (main / cp) * tp
  
      var resvon = xxx *amountgg
      return resvon
    }
  }
  
  var amount = convert(x_from, x_to, amountgg)*1
  var usd_rate = convert(x_from,"universal-us-dollar", amountgg)*1 
  var euro_rate = convert(x_from,"universal-us-dollar", amountgg)*1
  if(!amount) {
    Bot.sendMessage(" The coin is not supported to convert")
    return
  }
  
   
  
  
  
  
  var AmA = Bot.getProperty("AmA") * 1
  var BmB = Bot.getProperty("BmB") * 1
  var CmC = Bot.getProperty("CmC") * 1
  var DmD = Bot.getProperty("DmD") * 1
  var EmE = Bot.getProperty("EmE") * 1
  var FmF = Bot.getProperty("FmF") * 1
  
  
  
  
  
  
  
  var Firstname = "" + data.user.username
  if (Firstname == "null") {
    var Firstname = data.user.first_name
  }
  
  var u = "" + data.user.username
  if (u == "null") {
   var u = data.user.first_name
  }
  var UserID = data.user.telegramid
   
  var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T")+ "M"
   
  var hist = Bot.getProperty("acount_history" + user.telegramid, [])
  
  
  var real_deposit = Libs.ResourcesLib.anotherChatRes("real_deposit", "global")
  real_deposit.add(amount)
  
  let TimeProfit = Bot.getProperty("TimeProfit") * 1
  
  let TitalProfitPlanA = Bot.getProperty("TitalProfitPlanA") * 1
  let TitalProfitPlanB = Bot.getProperty("TitalProfitPlanB") * 1
  let TitalProfitPlanC = Bot.getProperty("TitalProfitPlanC") * 1
  
  let AProfit = Bot.getProperty("AProfit", "0") * 1
  let BProfit = Bot.getProperty("BProfit", "0") * 1
  let CProfit = Bot.getProperty("CProfit", "0") * 1
  
  let fastLevel = Bot.getProperty("fastLevel") * 1
  let ToLevelRef = Bot.getProperty("ToLevelRef") * 1
  let threeLevelRef = Bot.getProperty("threeLevelRef") * 1
  
  let Channel = Bot.getProperty("Channel")
  let coin = Bot.getProperty("coin")
  
  let good1 = Bot.getProperty("good1", "1.10") * 1
  let good2 = Bot.getProperty("good2", "1.15") * 1
  let good3 = Bot.getProperty("good3", "1.20") * 1
  
  let setup1 = Bot.getProperty("setup1")
  let setup2 = Bot.getProperty("setup2")
  let setup3 = Bot.getProperty("setup3")
  let totalADMIN = Libs.ResourcesLib.anotherChatRes("totalADMIN", "global")
  totalADMIN.add(amount)
  let total = Libs.ResourcesLib.anotherChatRes("total", "global")
  let active = Libs.ResourcesLib.userRes("active")
  
  let sms_1 =
    "🗞 Investment Started At Now 🗞\n\n- Plan Type: " +
    (AProfit * 100).toFixed(2) +
    "% every " +
    TimeProfit / 3600 +
    " hours for " +
    TitalProfitPlanA +
    " days " +
    good1 * 100 +
    "%\n\n💳 Profit will credited into your withdrawable balance with " +
    (AProfit * 100).toFixed(2) +
    "% on every " +
    TimeProfit / 3600 +
    " hours\n\n💵 Invested Amount : " +
    amount.toFixed(8) +
    " " +
    coin +
    "\n\n🧮 Expected Returns : " +
    (amount * good1).toFixed(8) +
    " " +
    coin
  
  let sms_2 =
    "🗞 Investment Started At Now 🗞\n\n- Plan Type: " +
    (BProfit * 100).toFixed(2) +
    "% every " +
    TimeProfit / 3600 +
    " hours for " +
    TitalProfitPlanB +
    " days " +
    good2 * 100 +
    "%\n\n💳 Profit will credited into your withdrawable balance with " +
    (BProfit * 100).toFixed(2) +
    "% on every " +
    TimeProfit / 3600 +
    " hours\n\n💵 Invested Amount : " +
    amount.toFixed(8) +
    " " +
    coin +
    "\n\n🧮 Expected Returns : " +
    (amount * good2).toFixed(8) +
    " " +
    coin
  
  let sms_3 =
    "🗞 Investment Started At Now 🗞\n\n- Plan Type: " +
    (CProfit * 100).toFixed(2) +
    "% every " +
    TimeProfit / 3600 +
    " hours for " +
    TitalProfitPlanC +
    " days " +
    good3 * 100 +
    "%\n\n💳 Profit will credited into your withdrawable balance with " +
    (CProfit * 100).toFixed(2) +
    "% on every " +
    TimeProfit / 3600 +
    " hours\n\n💵 Invested Amount : " +
    amount.toFixed(8) +
    " " +
    coin +
    "\n\n🧮 Expected Returns : " +
    (amount * good3).toFixed(8) +
    " " +
    coin
  
  let ful_deposit_msg1 = Bot.getProperty("ful_deposit_msg1", sms_1)
  let ful_deposit_msg2 = Bot.getProperty("ful_deposit_msg2", sms_2)
  let ful_deposit_msg3 = Bot.getProperty("ful_deposit_msg1", sms_3)
  
  let urlHERE =
    "*🌐 New Active Deposit 🌐*\n\n🕵 Details: [" +
    u +
    "](tg://user?id=" +
    user.telegramid +
    ")\n🏦 Amount: *" +
    amount.toFixed(8) +
    " " +
    coin +
    "*\n\n*💻Transactions Link*\n[" +
    txn_id +
    "](https://tx.botdev.me/" +
    currency +
    "/" +
    txn_id +
    ")\n\n*🕐 Update - " +
    time +
    "*"
  let investment_text = Bot.getProperty("investment_text", urlHERE)
  
  var Lang = {
    convertamount: amountgg.toFixed(8),
    convertcur: currency,
    wallet: wallet,
    cur: coin,
    amount: amount.toFixed(8),
    mainamount: amount.toFixed(8),
    first_name: "" + user.first_name + "",
    username: u,
    id: user.telegramid,
    txidurl:
      "[" + txn_id + "](https://tx.botdev.me/" + currency + "/" + txn_id + ")",
    txnid: txn_id,
    usd: usd_rate.toFixed(2),
    mention: "[" + u + "](tg://user?id=" + user.telegramid + ")",
    maincur: coin,
    servertime: time,
    botname: "[" + bot.name + "]",
    bold: "*",
    mono: "`",
    italic: "_",
    profita: (AProfit * 100).toFixed(2),
    profitb: (BProfit * 100).toFixed(2),
    profitc: (CProfit * 100).toFixed(2),
    acualtime: TimeProfit / 3600,
    totalprofita: (amount * good1).toFixed(8),
    totalprofitb: (amount * good2).toFixed(8),
    totalprofitc: (amount * good3).toFixed(8),
    daysa: TitalProfitPlanA,
    daysb: TitalProfitPlanB,
    daysc: TitalProfitPlanC,
    proa: good1 * 100,
    prob: good2 * 100,
    proc: good3 * 100
  }
  var newtext = investment_text.replace(/{([a-z_]+)}/gi, function(
    fullmatch,
    key
  ) {
    return Lang[key] ? Lang[key] : fullmatch
  })
  
  var plan_sms_1 = ful_deposit_msg1.replace(/{([a-z_]+)}/gi, function(
    fullmatch,
    key
  ) {
    return Lang[key] ? Lang[key] : fullmatch
  })
  
  var plan_sms_2 = ful_deposit_msg2.replace(/{([a-z_]+)}/gi, function(
    fullmatch,
    key
  ) {
    return Lang[key] ? Lang[key] : fullmatch
  })
  
  var plan_sms_3 = ful_deposit_msg3.replace(/{([a-z_]+)}/gi, function(
    fullmatch,
    key
  ) {
    return Lang[key] ? Lang[key] : fullmatch
  })
  
  function resultTest(){ 
  let refId = User.getProperty("refId")
    let ref = amount * fastLevel
    if (!refId) {
    } else {
      let refIdRes = Libs.ResourcesLib.anotherUserRes("balance", refId)
      refIdRes.add(ref)
      let refIdReff = Libs.ResourcesLib.anotherUserRes("reff", refId)
      refIdReff.add(ref)
      let refIdRek = Libs.ResourcesLib.anotherUserRes("rek", refId)
      refIdRek.add(amount)
      let commission = Bot.getProperty("commission" + refId)
      if (!commission) {
        Bot.sendMessageToChatWithId(
          refId,
          "➕ Referral Deposit: Level 1 +" + ref.toFixed(8) + " " + coin
        )
      }
  
      let rep1 = ref.toFixed(8)
      var histA = Bot.getProperty("acount_history" + refId, [])
  
      var json = {
        time: time,
        reason: "referral",
        amount: rep1
      }
      histA.push(json)
  
      Bot.setProperty("acount_history" + refId, histA, "json")
      var datareport1 = Bot.getProperty("repot_refuser" + refId, [])
      var json = {
        report1: rep1,
        report2: u,
        report3: UserID
      }
      datareport1.push(json)
      Bot.setProperty("repot_refuser" + refId, datareport1, "json")
    }
    let referringlvl = Libs.ResourcesLib.anotherChatRes("referringlvl", "global")
    if (referringlvl.value() < 1) {
    } else {
      let refto = amount * ToLevelRef
      let info = Bot.getProperty("user_info" + refId)
      if (info == undefined) {
      } else {
        let tolevel = info.user_info.userid
        let infoRes = Libs.ResourcesLib.anotherUserRes("balance", tolevel)
        infoRes.add(refto)
        let infoReff = Libs.ResourcesLib.anotherUserRes("reff", tolevel)
        infoReff.add(refto)
        let infoRek = Libs.ResourcesLib.anotherUserRes("rek", tolevel)
        infoRek.add(amount)
        let commission2 = Bot.getProperty("commission" + tolevel)
        if (!commission2) {
          Bot.sendMessageToChatWithId(
            tolevel,
            "➕ Referral Deposit: Level 2 +" + refto.toFixed(8) + " " + coin
          )
        }
  
        let rep2 = refto.toFixed(8)
        var histB = Bot.getProperty("acount_history" + tolevel, [])
  
        var json = {
          time: time,
          reason: "referral",
          amount: rep2
        }
        histB.push(json)
  
        Bot.setProperty("acount_history" + tolevel, histB, "json")
        var datareport2 = Bot.getProperty("repot_refuser" + tolevel, [])
        var json2 = {
          report1: rep2,
          report2: u,
          report3: UserID
        }
        datareport2.push(json2)
        Bot.setProperty("repot_refuser" + tolevel, datareport2, "json")
      }
    }
    let referringlvl2 = Libs.ResourcesLib.anotherChatRes(
      "referringlvl2",
      "global"
    )
    if (referringlvl2.value() < 1) {
    } else {
      let threeref = amount * threeLevelRef
      let inf = Bot.getProperty("user_in" + refId)
      if (inf == undefined) {
      } else {
        let threelevel = inf.user_in.useridd
        let infRes = Libs.ResourcesLib.anotherUserRes("balance", threelevel)
        infRes.add(threeref)
        let infReff = Libs.ResourcesLib.anotherUserRes("reff", threelevel)
        infReff.add(threeref)
        let infRek = Libs.ResourcesLib.anotherUserRes("rek", threelevel)
        infRek.add(amount)
        let commission3 = Bot.getProperty("commission" + threelevel)
        if (!commission3) {
          Bot.sendMessageToChatWithId(
            threelevel,
            "➕ Referral Deposit: Level 3 +" + threeref.toFixed(8) + " " + coin
          )
        }
        let rep3 = threeref.toFixed(8)
        var histC = Bot.getProperty("acount_history" + threelevel, [])
  
        var json = {
          time: time,
          reason: "referral",
          amount: rep3
        }
        histC.push(json)
  
        Bot.setProperty("acount_history" + threelevel, histC, "json")
        var datareport3 = Bot.getProperty("repot_refuser" + threelevel, [])
        var json3 = {
          report1: rep3,
          report2: u,
          report3: UserID
        }
        datareport3.push(json3)
        Bot.setProperty("repot_refuser" + threelevel, datareport3, "json")
      }
    }
  
  }
  
  if (amount >= AmA && amount <= BmB) {
    
  total.add(amount)
    active.add(amount)
  
    Bot.sendMessage(plan_sms_1)
  
    Api.sendMessage({
      chat_id: Channel,
      text: newtext,
      parse_mode: "Markdown",
      disable_web_page_preview: true
    })
  resultTest()
    var json = {
      time: time,
      reason: "Investment",
      amount: amount.toFixed(8)
    }
    hist.push(json)
  
    Bot.setProperty("acount_history" + user.telegramid, hist, "json")
  
    
    var invest_history = Bot.getProperty("invest_history" + user.telegramid, [])
    var json = {
      amount: amount.toFixed(8),
      update: time,
      walletid: wallet,
      txnID: txn_id
    }
    invest_history.push(json)
    Bot.setProperty("invest_history" + user.telegramid, invest_history, "json")
  
    let investorsplan = Libs.ResourcesLib.userRes("investorsplan")
    let investmentHistory =
      "*~ Investment Amount* +" +
      amount.toFixed(8) +
      " " +
      coin +
      "\n*📆 Time:* " +
      time +
      "\n*⛏ Transaction ID:*\n[" +
      txn_id +
      "](https://tx.botdev.me/" +
      coin +
      "/" +
      txn_id +
      ")\n*---------------------------------------*"
  
    var growing_amount = amount * AProfit
    var maxday = TitalProfitPlanA
    var growid = Libs.ResourcesLib.userRes("totalinvested")
    growid.add(1)
    var newid = Libs.ResourcesLib.userRes("totalinvested").value()
    Bot.run({
      command: "mine#home#mine",
      run_after: TimeProfit,
      options: {
        invested_amount: amount,
        accurual: growing_amount,
        growid: newid,
        maxday: maxday
      },
      chat_id: chat.id,
      user_id: user.id
    })
  
    return
  }
  
  let exmpolePlan1 = Libs.ResourcesLib.anotherChatRes("exmpolePlan1", "global")
  if (exmpolePlan1.value() < 1) {
    Bot.sendMessage(
      "*Invalid Investment Amount*, Must Be Atleast " + AmA + " " + coin
    )
    return
  }
  if (amount >= CmC && amount <= DmD) {
    total.add(amount)
    active.add(amount)
  
    Bot.sendMessage(plan_sms_2)
  
    Api.sendMessage({
      chat_id: Channel,
      text: newtext,
      parse_mode: "Markdown",
      disable_web_page_preview: true
    })
  
    var json = {
      time: time,
      reason: "Investment",
      amount: amount.toFixed(8)
    }
    hist.push(json)
  
    Bot.setProperty("acount_history" + user.telegramid, hist, "json")
  
    resultTest()
  
    var invest_history = Bot.getProperty("invest_history" + user.telegramid, [])
    var json = {
      amount: amount.toFixed(8),
      update: time,
      walletid: wallet,
      txnID: txn_id
    }
    invest_history.push(json)
    Bot.setProperty("invest_history" + user.telegramid, invest_history, "json")
  
    let investmentHistory =
      "*~ Investment Amount* +" +
      amount.toFixed(8) +
      " " +
      coin +
      "\n*📆 Time:* " +
      time +
      "\n*⛏ Transaction ID:*\n[" +
      txn_id +
      "](https://tx.botdev.me/" +
      coin +
      "/" +
      txn_id +
      ")\n*---------------------------------------*"
  
    var growing_amount = amount * BProfit
    var maxday = TitalProfitPlanB
    var growid = Libs.ResourcesLib.userRes("totalinvested")
    growid.add(1)
    var newid = Libs.ResourcesLib.userRes("totalinvested").value()
    Bot.run({
      command: "mine#home#mine",
      run_after: TimeProfit,
      options: {
        invested_amount: amount,
        accurual: growing_amount,
        growid: newid,
        maxday: maxday
      },
      chat_id: chat.id,
      user_id: user.id
    })
  
    return
  }
  let exmpolePlan2 = Libs.ResourcesLib.anotherChatRes("exmpolePlan2", "global")
  if (exmpolePlan2.value() < 1) {
    Bot.sendMessage(
      "*Invalid Investment Amount*, Must Be Atleast " + AmA + " " + coin
    )
    return
  }
  if (amount >= EmE && amount <= FmF) {
    total.add(amount)
    active.add(amount)
  
    Bot.sendMessage(plan_sms_3)
  
    Api.sendMessage({
      chat_id: Channel,
      text: newtext,
      parse_mode: "Markdown",
      disable_web_page_preview: true
    })
  
    var json = {
      time: time,
      reason: "Investment",
      amount: amount.toFixed(8)
    }
    hist.push(json)
  
    Bot.setProperty("acount_history" + user.telegramid, hist, "json")
  
    resultTest()
  
    var invest_history = Bot.getProperty("invest_history" + user.telegramid, [])
    var json = {
      amount: amount.toFixed(8),
      update: time,
      walletid: wallet,
      txnID: txn_id
    }
    invest_history.push(json)
    Bot.setProperty("invest_history" + user.telegramid, invest_history, "json")
  
    let investorsplan = Libs.ResourcesLib.userRes("investorsplan")
  
    let investmentHistory =
      "*~ Investment Amount* +" +
      amount.toFixed(8) +
      " " +
      coin +
      "\n*📆 Time:* " +
      time +
      "\n*⛏ Transaction ID:*\n[" +
      txn_id +
      "](https://tx.botdev.me/" +
      coin +
      "/" +
      txn_id +
      ")\n*---------------------------------------*"
  
    var growing_amount = amount * CProfit
    var maxday = TitalProfitPlanC
    var growid = Libs.ResourcesLib.userRes("totalinvested")
    growid.add(1)
    var newid = Libs.ResourcesLib.userRes("totalinvested").value()
    Bot.run({
      command: "mine#home#mine",
      run_after: TimeProfit,
      options: {
        invested_amount: amount,
        accurual: growing_amount,
        growid: newid,
        maxday: maxday
      },
      chat_id: chat.id,
      user_id: user.id
    })
  
    return
  }
  Bot.sendMessage(
    "*😫 Your Investment error Amount*, Must Be Atleast " + AmA + " " + currency
  )
  


}






    function bonus(){
      
      }
      function status(){
      
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
    gitRes:getRes,
    onIncome:invest,
    deposit:main,
    reinvest:main,
    gitlink:main,
    gitbalance:main,
    gitstatus:main,
    gitadmin:main,
    gitbonus:main,
    gitwd:WithrowHist,
    gitin:InvestHist,
    gitac:AccountHist,
    gitreturn:main        
    })*/

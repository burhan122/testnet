
/*function list(options) {
    var result = Bot.getProperty(options, [])
    return result
  }
var coin = Bot.getProperty("coin","not set")

function setupHistry(name, value, total) {
 var result1 = list(name)
 if (result1.length == total) {
    delete result1[0]
    Bot.setProperty(
      name,
      result1.filter(function(x) {
        return x != null
      }),
      "json"
    )
  }
var result2 = list(name)
 result2.push(value)
  Bot.setProperty(name, result2, "json")
}




function getHist(name,error,text,nametext){
  
var msg = nametext

function convert(get,item){
var runItem = get.replace(/{([a-z_]+)}/gi, function(fullmatch, key) {
  return item[key] ? item[key] : fullmatch
})
return runItem
}


var history = list(name)
if (history.length > 0) {
  for (var i in history) {
    var data = history[i]

var itemOption ={
txid:data.txid,
txurl:data.txurl,
amount:data.amount,
coin:coin,
mention:data.mention,
bold:"*",
italic:"_",
mono:"`"
}    
    
    
var report =  convert(text,itemOption) 
    
    msg += report
  }
}else{
Bot.sendMessage(error, { disable_web_page_preview: true })
return  
}
Bot.sendMessage(msg, { disable_web_page_preview: true })

}
  
  
publish({
setHist:setupHistry,
getHist:getHist 
})*/

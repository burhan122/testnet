/*
function setTopList(text){ 
var json_top_data = Bot.getProperty("json_top_data", [])
var one_time_data = User.getProperty("one_time_data")
if (!one_time_data) {
  User.setProperty("one_time_data", true, "boolean") 
  json_top_data.push(text)
  Bot.setProperty("json_top_data", json_top_data, "json")
}
}

  
function doSort(a, b){
return b.split("_")[1]-a.split("_")[1]  
  //if(a.split("_")[1]>b.split("_")[1]) return 1;
  //if(a.split("_")[1]<b.split("_")[1]) return 1;
}  

function onConvert(cmd,time,name){




var result_top_id = Bot.getProperty("result_news_id", 0) * 1
var result_top_id2 = Bot.getProperty("result_news_id2", 10) * 1

var getid_push = Bot.getProperty("getid_push",[]) 
function getProp(forId){
var getOptions = Bot.getProperty(forId, [])
return getOptions
}
  
var arr;
if(getProp("json_top_data").length-)  
var arr = Bot.getProperty("json_top_data", [])


for (var i =result_top_id; i < result_top_id2; i++) {
if(arr.length>i){
var id = arr.split("_")[1]
let anotherRes = Libs.ResourcesLib.anotherUserRes(name, id);  
getid_push.push(id+"_"+anotherRes.value())  
if(i==result_top_id2-1){
Bot.setProperty("result_news_id", result_news_id + 10, "text")
      Bot.setProperty("result_news_id2", result_news_id2 + 10, "text")
      Bot.run({
        command: cmd,
        run_after: time,
        bot_id: bot.id
      })
  return
}  
}else{
}
} 
  
var get = result.sort(doSort)  
  
return get   
}

  
function GetTopList(min,texid){  
var top_count = min*1

var result = "_📣 Top "+top_count+" Referral List_\n\n"
var option = onConvert(texid)
for (var index in option) {
  if (Number(index) + 1 <= top_count) {
    var element = option[index]

    
  result+="By user "+element.split("_")[0]+" value "+element.split("_")[1]+"\n\n"  
    
    
    
  }
}

return Bot.sendMessage(result)
}

  
  
  
  
publish({
setTop:setTopList,
getTop:GetTopList  
})*/

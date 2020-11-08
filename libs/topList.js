
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

function onConvert(Name){
var arr = Bot.getProperty("json_top_data", [])
var result = [] 
for(var i in arr){
var res = Libs.ResourcesLib.anotherUserRes(Name, arr[i])

result.push(arr[i]+"_"+res.value().toFixed(8))
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
})

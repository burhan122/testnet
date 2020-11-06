/*CMD
  command: add_api_option
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*Hello admin can you add coinbase api key and Secret key and description*   

Exmpole: 
`{apiKey}
{SecretApiKey}
{Notes}
{accountid}`

send here    
  ANSWER
  keyboard: 💻 Menu
  aliases: 
CMD*/

if (message == "💻 Menu") {
  return
}
var access = message.split("\n")

if (!access[0] || !access[1] || !access[2]||!access[3]) {
  Bot.sendMessage("Please Coinbase Api validity method use ")
  return
}

Libs.SellerCoinbase.setup()

var id = ""
if(access[3].slice(1,35)=="https://www.coinbase.com/accounts/"){
id+= access[3].slice(35,access[3].length - 1)
}else{
id+= access[3].slice(1, access[3].length - 1)
}

var json = {
  apia: access[0].slice(1, access[0].length - 1),
  apib: access[1].slice(1, access[1].length - 1),
  description: access[2].slice(1, access[2].length - 1),
id:id
}

Bot.setProperty("coinbase_info", json, "json")



Bot.sendMessage("*Successfully added coinbase  Api*\n\n`" + access + "`")

var result = AdminPanel.setFieldValue({
  panel_name: "CoinbaseLibOptions", // panel name
  field_name: "APIKey", // field name
  value: access[0].slice(1, access[0].length - 1)
})

var result = AdminPanel.setFieldValue({
  panel_name: "CoinbaseLibOptions", // panel name
  field_name: "SecretAPIKey", // field nam
  value: access[1].slice(1, access[1].length - 1)
})

var result = AdminPanel.setFieldValue({
  panel_name: "CoinbaseLibOptions", // panel name
  field_name: "OnNotification", // field nam
  value: "get_notify"
})


Bot.run({ command: "cb_result", run_after: 5 })

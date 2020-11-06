if (params == "A") {
  var json = options.result
  var accounts = json["data"]
  Bot.setProperty("CB-accounts", accounts, "json")
  var coinbase_info = Bot.getProperty("coinbase_info", {
    description: ""
  })

  var msg =
    "" +
    coinbase_info.apia +
    "\n" +
    coinbase_info.apib +
    "\n" +
    coinbase_info.description

  Bot.sendMessage("Setupped. Total accounts: " + accounts.length)
  return
}
var coinbase_info = Bot.getProperty("coinbase_info", {
  description: ""
})
Libs.Coinbase.apiCall({
  method: "GET", // method can be GET and POST
  path: "accounts",
  onSuccess: "cb_result A",
  onError:
    "onApiError" /*,
  background: true,
  apiKey: coinbase_info.apia,
  secretApiKey: coinbase_info.apib*/
})

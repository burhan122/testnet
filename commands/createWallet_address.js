if(!Bot.getProperty("coinbase_result_user=data" + user.telegramid)) {
  var user_data = {
    username: user.username,
    first_name: user.first_name,
    telegramid: user.telegramid,
    id: user.id
  }
  Bot.setProperty(
    "coinbase_result_user=data" + user.telegramid,
    user_data,
    "json"
  )
}

Libs.SellerCoinbase.apiCall({
  method: "POST", // method can be GET and POST
  path: "accounts/b17490fb-ea59-5d4a-ab45-a0058077c00c/addresses",
  onSuccess: "onSucess#wallet LTC",
  body: {
    name: user.telegramid
  },
  onError: "onApiError" // onError command
  // background: true // perform api call in background for big timeout limit
})

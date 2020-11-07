
var api = Libs.SellerCoinbase.api()

HTTP.get({
  "url": "https://api.coinbase.com/v2/notifications",
  "success": "cb_result",
  "error": "error",
  "headers": {
    "CB-ACCESS-KEY": api.APIKey ,
    "CB-ACCESS-SIGN": "15765d26a49298494cdda4fd43da6417d7dfad1c9b1a2fbbd81070a81d66f259",
    "CB-ACCESS-TIMESTAMP": Libs.SellerCoinbase.timeStamp(),
    "CB-VERSION": "2019-11-15"
  }
})



function main(callBack) {
  callBack({
    method: "GET",
    path: "notifications",
    onSuccess: "onSuccesResult",
    onError: "onApiError"
  })
}
main(function(x) {
  Libs.SellerCoinbase.apiCall(x)
})


var api = Libs.SellerCoinbase.api()
var sing = Libs.SellerCoinbase.sing({ method: "GET", path: "notifications" })
var timeStamp = Libs.SellerCoinbase.timeStamp()
HTTP.get({
  url: "https://api.coinbase.com/v2/notifications",
  success: "onSuccesResult",
  error: "error",
  headers: {
    "CB-ACCESS-KEY": api.APIKey,
    "CB-ACCESS-SIGN": sing,
    "CB-ACCESS-TIMESTAMP":timeStamp ,
    "CB-VERSION": "2019-11-15"
  }
})




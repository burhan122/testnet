
var api = Libs.SellerCoinbase.api()
var sing = Libs.SellerCoinbase.sing()
HTTP.get({
  "url": "https://api.coinbase.com/v2/notifications",
  "success": "cb_result",
  "error": "error",
  "headers": {
    "CB-ACCESS-KEY": api.APIKey ,
    "CB-ACCESS-SIGN":sing,
    "CB-ACCESS-TIMESTAMP": Libs.SellerCoinbase.timeStamp(),
    "CB-VERSION": "2019-11-15"
  }
})




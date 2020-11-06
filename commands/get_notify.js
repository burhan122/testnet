function main(callBack) {
  callBack({
    method: "GET",
    path: "notifications",
    onSuccess: "?onComplateCoinbaseDP",
    onError: "onApiError"
  })
}
main(function(x) {
  Libs.SellerCoinbase.apiCall(x)
})

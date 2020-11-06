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

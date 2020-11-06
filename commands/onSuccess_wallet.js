var currency_code = params

var json = options.result



//Bot.sendMessage(inspect(json)) 
/*var accounts = Bot.getProperty("CB-accounts");
var account;

// search account by currency code
for(var ind in accounts){
  account = accounts[ind];
  if(account.currency.code==currency_code){ break }
}
*/
/*
var wallet_name = json.data.name;

var user_wallet = {
  id: json.data.id,
  address: json.data.address,
  currency_code: currency_code
}
*/

Bot.sendMessage(
  "Please make payment to " +
    currency_code +
    " " +
    " wallet: \n\n`" +
    json.data.address +
    "`" +
    "\n\nthen your balance will automatically:" +
    "\n- will be replenished" +
    "\n- will be converted to dollars for the current time"
)

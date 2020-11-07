Bot.inspect(content)

/*var result = options["result"]["data"]

Bot.sendMessage(result.length);

for (var ind in result) {
  var payments = result[i]

  let payment_id = payments.id

  if (Bot.getProperty("id_rejected" + payment_id)) {
  } else {
    Bot.setProperty("id_rejected" + payment_id, true, "boolean")

    let amount = payments.additional_data.amount.amount
    let currency = payments.additional_data.amount.currency
    let txid = payments.additional_data.hash
    var deposit_address = payments.data.address

    var telegramid = payments.data.name

    var user = Bot.getProperty("coinbase_result_user_data" + telegramid)

    Api.sendMessage({
      chat_id: user.telegramid,
      text:
        "Thank you for payment:\n" +
        amount +
        " " +
        currency +
        "\n\nDeposited Address: " +
        deposit_address +
        "\n\nBy User: " +
        user.first_name +
        "\n\ntxid: https://tx.botdev.me/LTC/" +
        txid +
        "",
      parse_mode: "markdown"
    })
  }
}*/

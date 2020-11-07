var options = JSON.parse(content)

var result = options["data"]

//t.sendMessage(result.length);

for (var ind in result) {
  var payments = result[ind]

  let payment_id = payments.id

  if (Bot.getProperty("id_rejected" + payment_id)) {
  } else {
    Bot.setProperty("id_rejected" + payment_id, true, "boolean")

    let amount = payments.additional_data.amount.amount
    let currency = payments.additional_data.amount.currency
    let txid = payments.additional_data.hash
    var deposit_address = payments.data.address

    var telegramid = payments.data.name

    var idUSER = Bot.getProperty("coinbase_result_user_data" + telegramid)

    Api.sendMessage({
      chat_id: idUSER.telegramid,
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
}

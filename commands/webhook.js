
var check = {
  notiFy() {
    var url = {
      command: "get_notify",
      content: "text",
      user_id: user.id,
      redirect_to: "http://t.me/" + bot.name
    }
    return Libs.Webhooks.getUrlFor(url)
  }
}

Bot.sendMessage("[" + check.notiFy() + "]")


function setupHistry(name, value, total) {
  function list(options) {
    var result = Bot.getProperty(options, [])
    return result
  }

  var result1 = list(name)

  if (result1.length == total) {
    delete result1[0]
    Bot.setProperty(
      name,
      result1.filter(function(x) {
        return x != null
      }),
      "json"
    )
  }

  var result2 = list(name)

  result2.push(value)
  Bot.setProperty(name, result2, "json")
}

var setup = {
  hist: setupHistry
}

var json = {
  name: 100
}

setup.hist("list" + user.telegramid, json, 5)




function list(options) {
  var result = Bot.getProperty(options, [])
  return result
}


var msg =
  "*🗂 Transactions History*\n_Here you can find the last 15 transactions related to your account_\n\n"


if (hist.length > 15) {
  var max = hist.length * 1
  var min = max - 15
  var history = hist.slice(min, max)
} else {
var history = list("list" + user.telegramid)

if (history.length > 0) {
  for (var i in history) {
    var data = history[i]

    msg += data.name+"\n"
  }
}
Bot.sendMessage(msg, { disable_web_page_preview: true })
  
  public

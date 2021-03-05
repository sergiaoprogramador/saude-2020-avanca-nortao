const database = require('../database')

function execute(user, msg) {
  console.log(user)
  console.log(msg)

  if(msg == 0) {
    database.db[user].stage = 0

    return [
      "Obrigado, estamos a disposição para lhe ajudar..."]
  }

  database.db[user].select.push(msg)

  database.db[user].stage = 6

  return [
    `Compartilhe conosco a sua localização atual.

    Digite 0 se quiser cancelar
    \n
    `
  ]
}

exports.execute = execute
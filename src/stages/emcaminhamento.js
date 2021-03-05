const database = require('../database')

function execute(user, msg) {
  console.log(user)
  console.log(msg)

  database.db[user].select.push(msg)

  database.db[user].stage = 0

  return [
    `Analise da localização e encaminhamento para o centro de recepção de doentes corona mais próximo... 

    Vá para >> 

    https://goo.gl/maps/16BoC8JUXF8tmUEu7
    \n
    `
  ]
}

exports.execute = execute
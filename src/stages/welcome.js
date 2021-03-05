const database = require('../database')

function execute(user, msg) {
  
  database.db[user].stage = 1

  return [`
  👋 Olá sou a Clô, preciso de algumas informações para entender seu quadro clínico.
  Vamos lá...
  

  Digite seu nome ou 0 para cancelar:
  `]
}

exports.execute = execute
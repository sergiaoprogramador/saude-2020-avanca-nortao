const idade = require("../setValue/setIdade")
const database = require('../database')

function execute(user, msg) {
  console.log(user)
  console.log(msg)

  if(msg == 0) {
    database.db[user].stage = 0

    return [
      "Obrigado, estamos a disposição para lhe ajudar..."]
  }

  if(msg == 1) {
    database.db[user].stage = 4

    return [
      `Estamos analisando seus dados
        
      Para prosseguir digite OK ou digite 0 para cancelar`
    ]
  }

  if(msg == 2 || msg == 3) {
    database.db[user].stage = 4

    return [
      `Estamos analisando seus dados
        
      Para prosseguir digite OK ou digite 0 para cancelar`
    ]
  }

  database.db[user].select.push(msg)

  // console.log(database.db[user].select)

  let select = ""

  Object.keys(idade.idadeResponse).forEach((value) => {
    let element = idade.idadeResponse[value]
    // console.log(element.value)

    select += `${element.value} - ${element.description}\n  `
  })

  // // console.log(select)

  select += `\nResponda com o número correspondente...  `
  // console.log(select)

  return [
    `Qual a idade da pessoa com os sintomas?
    \n
    `, 
    select
  ]
}

exports.execute = execute
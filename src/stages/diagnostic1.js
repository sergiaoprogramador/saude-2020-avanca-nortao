const state = require("../setValue/setState")
const database = require('../database')

function execute(user, msg) {
  console.log(user)
  console.log(msg)

  if(msg == 0) {
    database.db[user].stage = 0

    return [
      "Obrigado, estamos a disposição para lhe ajudar..."]
  } else if(msg == 2) {
    database.db[user].stage = 0

    return [
      "Obrigado, infelizmente os leitos estão disponíveis apenas para casos graves..."]
  }

  if(msg == 1) {
    database.db[user].stage = 2

    return [
      `Estamos analisando seus dados
        
      Para prosseguir digite OK ou digite 0 para cancelar`
    ]
  } 

  database.db[user].select.push(msg)

  let select = ""

  Object.keys(state.stateResponse).forEach((value) => {
    let element = state.stateResponse[value]
    // console.log(element.value)

    select += `${element.value} - ${element.description}\n  `
  })

  // console.log(select)

  select += `\nResponda com o número correspondente...  `
  // console.log(select)

  return [`Olá ${msg}, você está com febre acima de 37,8?\n`, select]
}

exports.execute = execute
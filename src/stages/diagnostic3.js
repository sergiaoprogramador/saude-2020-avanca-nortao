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
    database.db[user].stage = 5

    return [
      `Estamos analisando seus dados
        
      Para prosseguir digite OK ou digite 0 para cancelar`
    ]
  }

  database.db[user].select.push(msg)

  // console.log(database.db[user].select)

  let select = ""

  Object.keys(state.stateResponse).forEach((value) => {
    let element = state.stateResponse[value]
    // console.log(element.value)

    select += `${element.value} - ${element.description}\n  `
  })

  // // console.log(select)

  select += `\nResponda com o número correspondente...  `
  // console.log(select)

  return [
    `Apresenta PELO MENOS UM dos sintomas citados abaixo?
    
    
    Sensação de desmaio
    Cansaço muito forte
    Dificuldade para respirar ou Falta de ar em repouso ou ao Fazer pequenos esforços
    \n
    `, 
    select
  ]
}

exports.execute = execute
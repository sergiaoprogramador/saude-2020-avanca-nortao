// Supports ES6
// import { create, Whatsapp } from 'sulla'
const express = require('express')
const cors = require('cors')
// const { uuid, isUuid } = require('uuidv4')
const sulla = require('sulla')

// import files js
const database = require('./database')
const stages = require('./stages')

const app = express()

app.use(cors())
app.use(express.json())

sulla.create().then((client) => start(client))

function start(client) {
  client.onMessage((message) => {
    
    let response = stages.step[getStage(message.from)].obj.execute(message.from, message.body)

    for (let index = 0; index < response.length; index++) {
      const element = response[index]
      client.sendText(message.from, element)
    }
  })
}

// metodo get usar variavel
function getStage(user) {
  return database.db[user].stage
}

app.listen(3333, () => {
  console.log('🚀 Back-end started!')
  // console.log(stages.step[getStage("teste")].obj.execute())
  // console.log(stages.step[getStage("user2")].obj.execute())
})
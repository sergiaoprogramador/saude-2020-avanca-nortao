const fs = require('fs')

const path = './session/Default/Service Worker/Database/MANIFEST-000001'

console.log("removed")

fs.unlink(path, (err) => {
  if (err) {
    console.error(err)
    return
  }

  console.log("removed")
})
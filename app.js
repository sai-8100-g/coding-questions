const express = require('express')
const app = express()

const {addDays} = require('date-fns')

let daysAfter100Days = () => {
  const result = addDays(new Date(), 100)
  return `${result.getDate()}/${result.getMonth()}/${result.getFullYear()}`
}

app.get('/', (request, response) => {
  let currentDate = daysAfter100Days()
  console.log(currentDate)
  response.send(currentDate)
})

app.listen(3000)

module.exports = app

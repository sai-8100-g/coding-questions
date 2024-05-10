const {addDays} = require('date-fns')

function daysAfterXDays(days) {
  const result = addDays(new Date(2020, 7, 22), days)

  const year = result.getFullYear()
  const month = result.getMonth()
  const date = result.getDate()
  return `${date}-${month}-${year}`
}

module.exports = daysAfterXDays

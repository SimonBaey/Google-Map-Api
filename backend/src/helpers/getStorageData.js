const getAllData = () => {
  let data
  if (!data) {
    data = require('../storage/info.json')
    // data = JSON.parse(data)
  }
  return data
}

const getJSONData = () => {
  let data = require('../storage/data.json')
  return data
}

module.exports = { getAllData, getJSONData }


export async function getGermanyData() {
  const response = await fetch('https://api.covid19api.com/total/dayone/country/germany/status/deaths')
  const data = await response.json()
  return data
}

function sortByDate(data) {
  return import('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js')
    .then(() => {
      const deaths = _.sortBy(Object.values(data.deaths), ['date'])
      return {
        deaths,
      }
    })
}

export async function getGermanyDeaths() {
  const data = await getGermanyData()
  const dataByDate = {
    deaths: {},
  }
  data.forEach((item) => {
    try {
      const cases = (dataByDate[item.Status][item.Date]) ? dataByDate[item.Status][item.Date].cases + item.Cases : item.Cases
      dataByDate[item.Status][item.Date] = {
        cases,
        date: `${item.Date}`,
      }
    } catch {
    }
  })
  return await sortByDate(dataByDate)
}
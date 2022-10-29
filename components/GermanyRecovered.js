
export async function getGermanyData() {
  const response = await fetch('https://api.covid19api.com/total/dayone/country/germany/status/recovered')
  const data = await response.json()
  return data
}

function sortByDate(data) {
  return import('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js')
    .then(() => {
      const recovered = _.sortBy(Object.values(data.recovered), ['date'])
      return {
        recovered,
      }
    })
}

export async function getGermanyRecovered() {
  const data = await getGermanyData()
  const dataByDate = {
    recovered: {},
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
export async function getJapanData() {
  // const response = await fetch('https://api.covid19api.com/total/dayone/country/japan/status/deaths')
  const data = await response.json()
  return data
}

export function sortByDate(data) {
  return import('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js')
    .then(() => {
      const deaths = _.sortBy(Object.values(data.deaths), ['date'])
      return {
        deaths,
      }
    })
}

export async function getJapanDeaths() {
  const data = await getJapanData()
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
}2
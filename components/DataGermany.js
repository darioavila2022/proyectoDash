// const url = 'https://api.covid19api.com/total/dayone/country/chile/status/confirmed' //esta es la url a la que le estoy haciendo la petición

// fetch(url) //aquí estoy tomando el link de la api que elegí y estoy ocupando fetch
// .then(res => (res.json())) //estoy guardando .then para que fetch me muestre un objeto tipo response el cual convierto mediante json para poder manipularlo. Esto a su vez me devuelve otra promesa
// .then(data => {console.log(data); //aquí estoy usando .then denuevo para tener los datos del json, llamado data y estoy imprimiendo en la consola
// })
// .catch(err => console.log(err)); //en caso de error

export async function getData() {
    const response = await fetch('https://api.covid19api.com/total/dayone/country/germany/status/confirmed')
    const data = await response.json()
    return data
  }
  
  export function sortByDate(data) {
    return import('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js')
      .then(() => {
        // const recovered = _.sortBy(Object.values(data.recovered), ['date'])
        // const deaths = _.sortBy(Object.values(data.deaths), ['date'])
        const confirmed = _.sortBy(Object.values(data.confirmed), ['date'])
        return {
          // recovered,
          // deaths,
          confirmed,
        }
      })
  }
  
  export async function getTotalCasesByDate() {
    const data = await getData()
    const dataByDate = {
      confirmed: {},
      // recovered: {},
      // deaths: {},
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
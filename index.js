import { getJapanDeaths } from './components/JapanData.js' //aqui estoy importando el componente getJapanDeaths desde el .js que tengo en la carpeta components

function totalJapanDeaths(data, ctx) {
  const {
    deaths,
  } = data

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: deaths.map(item => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(new Date(item.date))),
        datasets: [{
            label: 'Muertes en Japón',
            data: deaths.map(item => item.cases),
            borderColor: [
                'red',
            ],
            borderWidth: 8
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

async function renderJapanChart() {
  const ctx = document.querySelector('#Japan').getContext('2d')
  const data = await getJapanDeaths()
  totalJapanDeaths(data, ctx)
}
renderJapanChart()







import { getGermanyDeaths } from './components/GermanyData.js'

function totalGermanyDeaths(data, ctx) {
  const {
    deaths,
  } = data

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: deaths.map(item => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(new Date(item.date))),
        datasets: [{
            label: 'Muertes en Alemania',
            data: deaths.map(item => item.cases),
            borderColor: [
                'orange',
            ],
            borderWidth: 8
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

async function renderGermanyChart() {
  const ctx = document.querySelector('#Germany').getContext('2d')
  const data = await getGermanyDeaths()
  totalGermanyDeaths(data, ctx)
}

renderGermanyChart()







import { getChileDeaths } from './components/ChileData.js'

function totalChileDeaths(data, ctx) {
  const {
    deaths,
  } = data

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: deaths.map(item => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(new Date(item.date))),
        datasets: [{
            label: 'Muertes en Chile',
            data: deaths.map(item => item.cases),
            borderColor: [
                'orange',
            ],
            borderWidth: 8
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

async function renderChileChart() {
  const ctx = document.querySelector('#Chile').getContext('2d')
  const data = await getChileDeaths()
  totalChileDeaths(data, ctx)
}

renderChileChart()

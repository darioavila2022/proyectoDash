import { getJapanDeaths } from './components/JapanDeaths.js'

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

async function renderJapanDeaths() {
  const ctx = document.querySelector('#JapanDeaths').getContext('2d')
  const data = await getJapanDeaths()
  totalJapanDeaths(data, ctx)
}
renderJapanDeaths()

//--------

import { getJapanRecovered } from './components/JapanRecovered.js'

function totalJapanRecovered(data, ctx) {
  const {
    recovered,
  } = data

  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: recovered.map(item => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(new Date(item.date))),
      datasets: [{
        label: 'Recuperados en Japón',
        data: recovered.map(item => item.cases),
        borderColor: [
          'green',
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

async function renderJapanRecovered() {
  const ctx = document.querySelector('#JapanRecovered').getContext('2d')
  const data = await getJapanRecovered()
  totalJapanRecovered(data, ctx)
}
renderJapanRecovered()

//-----

import { getGermanyDeaths } from './components/GermanyDeaths.js'

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

async function renderGermanyDeaths() {
  const ctx = document.querySelector('#GermanyDeaths').getContext('2d')
  const data = await getGermanyDeaths()
  totalGermanyDeaths(data, ctx)
}

renderGermanyDeaths()

//-----


import { getGermanyRecovered } from './components/GermanyRecovered.js'

function totalGermanyRecovered(data, ctx) {
  const {
    recovered,
  } = data

  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: recovered.map(item => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(new Date(item.date))),
      datasets: [{
        label: 'Recuperados en Alemania',
        data: recovered.map(item => item.cases),
        borderColor: [
          'green',
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

async function renderGermanyRecovered() {
  const ctx = document.querySelector('#GermanyRecovered').getContext('2d')
  const data = await getGermanyRecovered()
  totalGermanyRecovered(data, ctx)
}

renderGermanyRecovered()

//-----

import { getChileDeaths } from './components/ChileDeaths.js'

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

async function renderChileDeaths() {
  const ctx = document.querySelector('#ChileDeaths').getContext('2d')
  const data = await getChileDeaths()
  totalChileDeaths(data, ctx)
}

renderChileDeaths()


// -----

import { getChileRecovered } from './components/ChileRecovered.js'

function totalChileRecovered(data, ctx) {
  const {
    recovered,
  } = data

  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: recovered.map(item => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(new Date(item.date))),
      datasets: [{
        label: 'Recuperados en Chile',
        data: recovered.map(item => item.cases),
        borderColor: [
          'green',
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

async function renderChileRecovered() {
  const ctx = document.querySelector('#ChileRecovered').getContext('2d')
  const data = await getChileRecovered()
  totalChileRecovered(data, ctx)
}

renderChileRecovered()


# Proyecto Dashboard

En este proyecto tipo dashboard se muestra un número de gráficos para mostrar casos de COVID-19 en algunos países del mundo, incluyendo Chile. Este proyecto fue realizado con la instalación y uso de NodeJs (npm) y Chart.js (link). 

## Instalación de Node.js

Para usar [Node.js](https://nodejs.org/en/download/package-manager/), instalar de la siguiente manera usando la terminal:

```bash
npm install -g npm
```

## Instalación de Chart.js

Para usar [Chart.js](https://www.chartjs.org/docs/2.7.3/getting-started/):

```bash
# colocar en html
<canvas id="myChart"></canvas>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>

# Agregar código para crear chart

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // El tipo de chart que se vaya a crear
    type: 'line',

    // Los datos del dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Las opciones de configuración
    options: {}
});
```

## Flujo de trabajo
Para obtener esta información, se ocupó la api [Coronavirus COVID19 API.](https://documenter.getpostman.com/view/10808728/SzS8rjbc#4b88f773-be9b-484f-b521-bb58dda0315c) 

Las solicitudes de consumos de datos se hicieron con el método fetch además de la función async/await. Se modularizaron los componentes .js mediate las funciones export/import. No utilicé api keys.


## Uso del proyecto
Los gráficos representados representan la cantidad de muertes y pacientes recuperados en el contexto de la pandemia en algunos países del mundo. Estos datos comprenden una marco temporal amplio porque la idea es representar de manera global estos datos. Para conocer más detalles numéricos, acercar puntero al gráficos y un cuadro de información se va a desplegar. 

## Captura del proyecto
![Gato Tom](./Captura%20de%20pantalla%202022-10-29%20183431.png)

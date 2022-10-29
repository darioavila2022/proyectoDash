const url = 'https://api.covid19api.com/total/dayone/country/chile/status/confirmed' //esta es la url a la que le estoy haciendo la petición

fetch(url) //aquí estoy tomando el link de la api que elegí y estoy ocupando fetch
.then(res => (res.json())) //estoy guardando .then para que fetch me muestre un objeto tipo response el cual convierto mediante json para poder manipularlo. Esto a su vez me devuelve otra promesa
.then(data => {console.log(data); //aquí estoy usando .then denuevo para tener los datos del json, llamado data y estoy imprimiendo en la consola
})
.catch(err => console.log(err)); //en caso de error
 


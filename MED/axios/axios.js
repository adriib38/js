/**
 * 
 * Axios es una libreria que nos permite hacer peticiones HTTP
 * Como fetch pero con mas funcionalidades y mas sencillo
 * 
 */

//Get
axios("users.txt")
    .then(res=>console.log(res.data))

axios("https://jsonplaceholder.typicode.com/users")
    .then(res=>console.log(res.data))


//Post
axios.post("https://reqres.in/api/users", {
    name: "morpheus",
})
    .then(res=>console.log(res.data))

    
//Otra forma para hacer post
axios("https://reqres.in/api/users", {
    method: "POST",
    data: {"nombre": "morpheus"}
})
    .then(res=>console.log(res))
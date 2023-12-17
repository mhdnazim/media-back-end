
// create json server using require method
const jsonServer = require('json-server')

// to create server using json server 
const server = jsonServer.create()

// create router using json server 
const router = jsonServer.router("db.json")

// create middle wear 
const middleware = jsonServer.defaults()

// create port for server 
const PORT = process.env.PORT || 4000

// use middleware in server 
server.use(middleware)
server.use(router)

// to use port in server 
server.listen(PORT, () => {
    console.log("Media player server starts at PORT" + PORT);
})


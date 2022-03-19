
const socket = require("socket.io") ;

const express = require("express") ;

 
// create http server
const server = express() ;

// http server now uses the express server 
const http = require("http").Server(server) ;
const io = socket(http) ;

io.on("connection", (sConn)=>{
    // sConn is the socket connect , the on function is used to listen to client event
    sConn.on("client" ,(message)=>{
        // sends the messag back to the client by emiting 
         io.emit("server", message)

    })

})

server.get("/" , (req,res)=>{

     res.sendFile( __dirname +"/index.html")

}) ;

http.listen(3000, ()=>{

    console.log("server is listening on port 3000") ; 
})

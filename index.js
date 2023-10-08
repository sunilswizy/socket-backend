const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});


io.on('connection', (socket) => {
    console.log("A user connected!");

    socket.on('message', (msg) => {
        console.log("Msg received ", msg);
        io.emit('message', msg);
    });
})



// const WebSockerServer = require('websocket').server;
// let connection = null;

// const httpServer = http.createServer((req, res) => {
//     console.log("Connnection has been made");
// })


// const websocket = new WebSockerServer({
//     "httpServer": httpServer
// })


// websocket.on("request", request => {
//     connection = request.accept(null, request.origin);

//     connection.on("open", e => console.log("Opend!"));
//     connection.on("close", e => console.log("Opend!"));

//     connection.on("message", msg => console.log("Message me: ", msg.utf8Data));

//     connection.send("From clinet");
// })

http.listen(8080, () => console.log("App is droped on 8080"))
const http = require('http')
const {initializeSocket} = require('./socket')
const app = require('./app')
const port = process.env.PORT || 4000;

const server = http.createServer(app);

initializeSocket(server); 

server.listen(port, () =>{
    console.log(`listening on port ${port}`);
});
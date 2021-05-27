const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', msg => {
        if (msg.split(',').length == 4) {
            io.emit('chat message', 'Сума на нарахування девідентів: ' + Math.round(200000 * Math.random()))
        } else {
            io.emit('chat message', 'Помилка введення')
        }
    });
});

http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});
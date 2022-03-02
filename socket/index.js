module.exports = (io) => {

    io.on('connection', socket => {

        console.log('new connection');
        socket.on('disconnect', () => console.log('disconnected'));


        socket.on('notify', (data) => {
            console.log('notify');
            socket.broadcast.emit('notify', data)
        });

    });

    
}
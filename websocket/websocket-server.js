const WebSocket = require('ws')
const webSocketServer = new WebSocket.Server({ port: 3003 });

let messages = [];

webSocketServer.on('connection', webSocket => {
    webSocket.send(messages.toString())
    webSocket.onmessage = messageEvent => {
        const message = messageEvent.data;
        messages.push(message)
        webSocketServer.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    };
});

module.exports = webSocketServer;
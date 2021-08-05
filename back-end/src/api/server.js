const app = require('./app');
const http = require('http');
const socket = require('socket.io');

const server = http.createServer(app);

const io = socket(server, {
  cors: {
    origin: `http://localhost:3000`,
    methods: ['GET', 'POST', 'PUT'],
  },
});

io.on('connect', async (socket) => {
  console.log('conectando');
});

const port = process.env.PORT || 3001;

server.listen(port);
console.log(`Api rodando na porta ${port}`);

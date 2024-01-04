import http from 'http';
import { URL } from 'url';
import { handleRequest } from './router.js';

const server = http.createServer((req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost');
  const method = req.method.toUpperCase();
  const contentType = req.headers['content-type'] || 'text/plain';
  handleRequest(pathname, method, req, res, contentType);
});

const PORT = 7100;

server.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
  console.log('Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

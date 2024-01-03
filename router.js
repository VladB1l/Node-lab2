import handlerMethods from './handler-methods.js';

const handleRequest = async (pathname, method, req, res) => {
  try {
    const condition = ["GET", "OPTIONS", "POST"].includes(method);
    if (condition) {
      switch (pathname) {
        case '/':
          handlerMethods[method](req, res, "main");
          break;
        case '/post':
          handlerMethods[method](req, res, pathname.slice(1));
          break;
        case '/options':
          handlerMethods[method](req, res, pathname.slice(1));
          break;
        case '/test.html':
          handlerMethods.HTML(req, res, pathname.slice(1));
          break;

        default:
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Page Not Found' }));
      }
    } else {
      res.writeHead(405, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    }
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

export { handleRequest };

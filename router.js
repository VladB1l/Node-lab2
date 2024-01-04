import contentHandlers from './handler-contents.js';
import htmlContent from './html.js';

const handleRequest = async (pathname, method, req, res, contentType) => {
  try {
    if (['GET', 'OPTIONS', 'POST'].includes(method)) {
      switch (pathname) {
        case '/':
          contentHandlers[contentType](req, res, 'Main page', method);
          break;
        case '/post':
          contentHandlers[contentType](req, res, pathname.slice(1), method);
          break;
        case '/options':
          contentHandlers[contentType](req, res, pathname.slice(1), method);
          break;
        case '/test.html':
          contentHandlers['text/html'](req, res, htmlContent, method);
          break;
        case '/package.json':
          contentHandlers['application/json'](req, res, 'package.json', method);
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

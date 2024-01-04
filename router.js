import contentHandlers from './handler-contents.js';
import htmlContent from './html.js';

const routes = {
  '/': 'Main page',
  '/post': 'post',
  '/options': 'options',
  '/test.html': htmlContent,
  '/package.json': 'package.json',
};

const handleRequest = async (pathname, method, req, res, contentType) => {
  try {
    if (['GET', 'OPTIONS', 'POST'].includes(method)) {
      const routeHandler = routes[pathname];
      if (routeHandler) {
        const ext = pathname.split('.').pop();
        const defaultContentType = contentType || 'text/plain';
        const mimeTypes = {
          html: 'text/html',
          json: 'application/json',
        };
        const resolvedContentType = mimeTypes[ext] || defaultContentType;
        contentHandlers[resolvedContentType](req, res, routeHandler, method);
      } else {
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

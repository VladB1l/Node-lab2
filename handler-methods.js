import { promises as fsPromises } from 'fs';

const handlerMethods = {
    GET: (req, res, text) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Hello Node Js | ${text} page`);
    },
    POST: (req, res, text) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Handling Post request! | ${text} page`);
    },
    OPTIONS: (req, res,) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`handlerMethods: [${Object.keys(handlerMethods)}]`);
    },
    HTML: async (req, res, filename) => {
        const filePath = `./${filename}`;
        const htmlContent = await fsPromises.readFile(filePath, 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlContent);
    },
  };
  
  export default handlerMethods;
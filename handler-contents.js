import { promises as fsPromises } from 'fs';
import handlerMethods from './handler-methods.js';

const contentHandlers = {
  'text/html': async (req, res, filename, method) => {
    const filePath = `./${filename}`;
    try {
      const htmlContent = await fsPromises.readFile(filePath, 'utf8');
      handlerMethods[method](req, res, htmlContent, 'text/html');
    } catch (error) {
      console.error('Error reading HTML file:', error);
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'HTML Page Not Found' }));
    }
  },
  'text/plain': (req, res, text, method) => {
    handlerMethods[method](req, res, text, 'text/plain');
  },
  'application/json': async (req, res, filename, method) => {
    const filePath = `./${filename}`;
    try {
      const jsonData = await fsPromises.readFile(filePath, 'utf8');
      handlerMethods[method](req, res, jsonData, 'application/json');
    } catch (error) {
      console.error('Error reading JSON file:', error);
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'JSON File Not Found' }));
    }
  },
  'application/x-www-form-urlencoded': async (req, res, data, method) => {
    try {
      let body = '';
      for await (const chunk of req) {
        body += chunk;
      }

      const formData = Object.fromEntries(new URLSearchParams(body));
      await handlerMethods[method](req, res, formData, 'text/plain');
    } catch (error) {
      console.error('Error reading form-url file:', error);
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'form-url File Not Found' }));
    }
  }
};

export default contentHandlers;

const handlerMethods = {
    GET: (req, res, data, contentType) => {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    },
    POST: (req, res, data, contentType) => {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(`Handling Post request! | ${JSON.stringify(data)}`);
    },
    OPTIONS: (req, res, text) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`handlerMethods: [${Object.keys(handlerMethods)}]`);
    },
};

export default handlerMethods;
# Lab 2
 ## Task
  Build small http server with router without using any framework. Use ESM modules for project. Server should include simple router, write it yourself. Please add 3-6 routes.
 ### Requirements
- change default loader to ECMAScript module loader.
- support different HTTP Methods (POST, GET, OPTIONS) for one route
- support 2+ different content types (json, urlencode)
- follow specification for JSON: https://jsonapi.org/
- handle graceful shutdown

## Solution
- Avaible routes (` /, /post, /options, /package.json, /test.html `)
- There is a form in test.html with  method handler for POST and  content handler for urlencode.
 ## Links:
- The project was deployed using [Vercel](https://node-lab2-two.vercel.app/)


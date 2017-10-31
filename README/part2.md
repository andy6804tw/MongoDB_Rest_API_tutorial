# Part 2 Setup of the middlewares and mongodb

- Add mongoose, body-parser, morgan, compression, helmet
- Setup config folder
- Setup constants

1. 安裝 packages
```
$ yarn add mongoose body-parser compression helmet && yarn add -D morgan
```
- [moogose](./install.md) : database 
- body-parser : parse the request as JSON
- morgan : HTTP Request logger middleware for node.js
```js
GET / 200 3.748 ms - 12
```
- compression : Node.js compression middleware.
- helmet : helps you secure your Express apps by setting various HTTP headers

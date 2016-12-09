require('babel-core/register')({});
require('babel-polyfill');

const { app, } = require('./server');

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

// if(module.hot) {
//     // accept update of dependency
//     module.hot.accept("./handler.js", function() {
//         // replace request handler of server
//         server.removeListener("request", requestHandler);
//         requestHandler = require("./handler.js");
//         server.on("request", requestHandler);
//     });
// }

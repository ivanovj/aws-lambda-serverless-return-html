'use strict';

module.exports.html = (event, context, callback) => {

  const response = "<html><header><title>Hello World HTML from AWS Lambda</title></header><body><h1>Hello world!</h1><h2>It is HTML returned from AWS Lambda!</h2></body></html>";

  callback(null, response);
};

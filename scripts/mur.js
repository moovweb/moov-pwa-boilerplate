/* global https */

module.exports = function(callback) {

  let async = require("async");

  // asynchronous HTTP request
  function send_request(options, callback) {

    let request = https.request(options, function(response) {
      // response.setEncoding("utf8");

      console.log("MUR Response Status Code: ", response.statusCode);
      console.log("MUR Response Status Message: ", response.statusMessage);

      // compile all the "data" event responses
      let response_body = "";
      response.on("data", function(response_data) {
        response_body += response_data;
      });

      // parse the end result as JSON, call callback
      response.on("end", function() {
        callback(null, { headers :response.headers, body: response_body, statusCode: response.statusCode, statusMessage: response.statusMessage});
      });
    });

    // request.on('socket', function (socket) {
    //   socket.setTimeout(20000);
    //   socket.on('timeout', function() {
    //     request.abort();
    //   });
    // });

    request.on("error", function(e) {
      // if (e.code === "ECONNRESET") {
      //   console.log("Timeout occurs");
      //   //specific error treatment
      // }
      console.log("Problem with HTTP request: " + e.message);
      callback(e, { headers :null, body: null});
    });

    if(options.data !== undefined) {
      request.write(options.data);
    }

    request.on("socket", function(socket) {
      socket.on("lookup", function(error, address) {
        console.log("DNS result", error, address);
      });
    });

    request.end();
  }

  // https://developer.moovweb.com/page/training/strategies/moovjs_global_variables
  // We can use env because it changes between requests to save our info.

  // console.log("env");
  // console.log(env);
  // console.log("env.cookie");
  // console.log(env.cookie);
  // console.log("env.user_agent");
  // console.log(env.user_agent);
  // console.log("rawHeaders");
  // console.log(rawHeaders);
  // console.log("config");
  // console.log(config);

  console.log("$$$$$$$$$$$$$$");
  console.log(global.upstreamRequest);
  if(global.upstreamRequest !== undefined) {
    // console.log("upstreamRequest");
    // console.log(global.upstreamRequest);
    if (global.upstreamRequest.response) {
      // To handle responses directly
      console.log('inside special flow');
      global.responseMUR = [global.upstreamRequest.response];
      callback();
    } else {
      // Regular flow
      console.log('inside regular flow');
      async.map(global.upstreamRequest, send_request, function(err, results) {
        if(err) {
          // timeouts can now be handled here
          callback(err);
        }

        // console.log("Got back results");
        // console.log(results);
        global.responseMUR = results;
        callback();
      });
    }

  } else {
    global.responseMUR = {};
    callback();
  }
};

/**
 * Returns the value of a named variable in the query string
 * @param {String} variable 
 * @return {String}
 */
fns.getQueryVariable = function (variable) {
  let query = env.path.substring(env.path.indexOf("?") + 1, env.path.length);
  let vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
};

/**
 * Make an http request.  Returns a promise that resolves to an object when the response type 
 * is application/json or options.json is true, otherwise resolves to a string.
 * @param {Object} options Options for http.request
 * @param {Object} data Data to send in the body of the request
 * @return {Promise}
 */
fns.request = function (options, data) {
  data = JSON.stringify(data)

  return new Promise((resolve, reject) => {
    if (data) {
      options = Object.assign({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data)
        }
      }, options)
    }

    const req = http.request(options, response => {
      let data = [];
      response.on("data", chunk => data.push(chunk));

      response.on("end", () => {
        data = data.join('');

        if (options.json || response.headers['content-type'] === 'application/json') {
          data = JSON.parse(data);
        }
        resolve(data);
      });
    });


    // do not break request when we have no data
    if (data) {
      req.write(data);
    }

    req.end();    
  });
};

global.fetch = () => {
 console.log('\n\n\n\n\nhere!!!\n\n\n\n\n') 
}

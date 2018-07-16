/**
 * Gathers up all request headers into an object.
 * @return {Object} An object of request header name => value
 */
module.exports = function() {
  const requestHeaders = {};

  for (let key of headers.headerKeys()) {
    requestHeaders[key] = headers.header(key);
  }

  return requestHeaders;
}
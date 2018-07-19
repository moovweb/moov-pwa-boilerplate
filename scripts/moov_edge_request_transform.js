
const getHeaders = require('/get_headers.js')

/**
 * This function runs at the edge before the cache.
 * Here we support custom server cache keys via server.key in cache route handlers.
 * @param {Object} options
 * @param {Function} options.setCacheKey A function to register a callback to set a cache key for the current request.
 */
module.exports = ({ setCacheKey }) => {
  // console.log('got here!!!!!')

  // const server = require('../src/server')({
  //   globals: { }
  // })

  // setCacheKey(defaults => {
  //   const request = {
  //     headers: getHeaders(),
  //     path: env.path, 
  //     method: env.method,
  //     hostname: env.host_no_port
  //   }
    
  //   return server.getCacheKey(request, defaults)
  // })
};
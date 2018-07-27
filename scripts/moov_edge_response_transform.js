/* global headers */

/**
 * Remove the s-maxage response header so it won't be used by any upstream optimizer or CDN, 
 * which could lead to stale data in a cache that wouldn't automatically be cleared on deploy.
 */
function removeSMaxAge() {
  let cacheControl = headers.header('Cache-Control');

  if (cacheControl != null) {
    cacheControl = cacheControl.replace(/(,\s*)?s-maxage=[^\s]+$/i, '')
    headers.header('Cache-Control', cacheControl);
  }
}

/**
 * This function runs at edge after the response has been returned from the cache.
 */
module.exports = function() {
  removeSMaxAge();
  // Put your custom logic to transform the response post-cache here if needed.
};
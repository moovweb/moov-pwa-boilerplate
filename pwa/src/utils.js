/**
 * Parses a query string into key/value pairs
 * @param {String} search 
 * @return {Object}
 */
export function parseQueryString(search) {
  const params = new URLSearchParams(search);
  const result = {};

  for (let key of params.keys()) {
    result[key] = params.get(key)
  }

  return result;
}

/**
 * Convenience method for passing multiple css class names to react's className prop
 * example:
 * 
 *  <div className={classList('foo', 'bar)}/>
 * 
 * @param {String...} classList CSS class names to concatenate
 * @return {String}
 */
export function classList(...names) {
  return names.join(' ')
}
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
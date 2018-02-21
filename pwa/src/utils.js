export function parseQueryString(search) {
  const params = new URLSearchParams(search);
  const result = {};

  for (let key of params.keys()) {
    result[key] = params.get(key)
  }

  return result;
}
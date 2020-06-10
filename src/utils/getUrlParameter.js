export function getUrlParameters(search) {
  if (search.indexOf('?') === -1) {
    return {};
  }
  const params = search.substring(search.indexOf('?') + 1).split('&');
  const urlParams = {};
  params.forEach((record) => {
    const urlParameter = record.split('=');
    const [key, value] = urlParameter;
    urlParams[key] = value;
  });
  return urlParams;
}

export default function postCall({ url, data }) {
  return fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
  .then(res => {
    if (res.status === 200) {
      return {data: res.json(), response: res}
    } else {
      return Promise.reject({response: res})
    }
  })
}

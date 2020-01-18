export function authorization(params) {
  let urlToSend = '/slack/code'+params;
  fetch(urlToSend)
  .then((response) => {
      return response.json();
  })
  .then((data) => {
    console.log("Auth response", data);
  })
  .catch((err) => {
    console.log("ERROR Auth API",  err)
  })
}
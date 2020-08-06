export function getNewQuote(callback) {
  const req = new XMLHttpRequest();
  const url = "https://api.quotable.io/random";
  req.open("GET", url, true);
  req.send();
  req.onload = function () {
    const json = JSON.parse(req.responseText);
    console.log("json", json);
    callback(json);
  };
}

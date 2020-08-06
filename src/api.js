var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const req = new XMLHttpRequest();
const url = "https://quotes.rest/quote/random?language=en&limit=1";
req.open("GET", url, true);
req.send();
req.onload = function () {
  const json = JSON.parse(req.responseText);
  console.log(json);
};

{
  /* <노드에서 확인함>
XMLHttpRequest is not defined 오류가 나와서 구글링해서
npm install xmlhttprequest 설치함 */
}

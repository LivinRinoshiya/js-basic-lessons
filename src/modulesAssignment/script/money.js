import { currencies } from "./currencies.js";
const fromCurr = document.getElementById("fromcurrency");
    const toCurr = document.getElementById("tocurrency");
    fromCurr.innerHTML = getOptions(currencies);
    toCurr.innerHTML = getOptions(currencies);
    
    function getOptions(data) {
      return Object.entries(data)
        .map(
          ([country, currency]) =>
            `<option value="${country}">${country == 'MSG' ? " " : country}  ${currency}</option>`
        )
        .join("");
    }
    document.getElementById("amount").addEventListener("change", myFunction);
    function myFunction() {
    var currency = document.getElementById("amount");
    var result = Math.random(currency);
    document.getElementById('result').innerHTML=result;
}
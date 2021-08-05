//Formula: subtract 32 and multiply by . 5556 (or 5/9).
function farenheitToCelcius(farenheit) {
    let celcius = (farenheit - 32) * 0.5556;
    return celcius;
}
let inputFarenheit = 100;
let outputCelcius = farenheitToCelcius(inputFarenheit);
console.log(inputFarenheit, ' is eaual to :', outputCelcius, 'C');
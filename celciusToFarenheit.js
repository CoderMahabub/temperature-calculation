//Formula: multiply by 1.8 (or 9/5) and add 32.

function celciusToFarenheit(celcius) {
    let farenheit = (celcius * 1.8) + 32;
    return farenheit;
}
let inputCelcius = 15;
let outputFarenheit = celciusToFarenheit(inputCelcius);
console.log(inputCelcius, ' Celcius is eaual to : ', outputFarenheit, 'F');
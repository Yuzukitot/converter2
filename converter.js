function convert() {
    let x = document.getElementById('celsius');
    let y = document.getElementById('fahrenheit');
    let celsius = parseFloat(x.value);
    let fahrenheit = (celsius * 9 / 5) + 32;
    y.value = fahrenheit.toFixed(3);
}
function reset() {
    document.getElementById('fahrenheit').value = "";
    document.getElementById('celsius').value = "";
    document.getElementById('result').innerHTML = "";
}
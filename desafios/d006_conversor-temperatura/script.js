function converter() {
    var res = document.getElementById("res")
    var celsius = Number(prompt("Digite uma temperatura em °C (Celsius)"))
    var kelvin = celsius + 273.15
    var fahrenheit = celsius * 9 / 5 + 32


    res.innerHTML = `<strong>A temperatura de ${celsius} °C corresponde a:</strong> <p>${kelvin} °K (Kelvin)</p> ${fahrenheit} °F (Fahrenheit) `
}
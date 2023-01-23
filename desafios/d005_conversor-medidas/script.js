function converter() {
    var res = document.getElementById("res")
    var m = prompt("Digite uma distância em metros.")
    var km = m / 1000
    var hm = m / 100
    var dam = m / 10
    var dm = m  * 10
    var cm = m * 100
    var mm = m * 1000

    res.innerHTML = `<strong>A distância de ${m} metros, corresponde a:</strong>
    <p>${km} quilômetros (Km)</p>
    <p>${hm} hectômetros (Hm)</p>
    <p>${dam} decâmetros (Dam)</p>
    <p>${dm} decímetros (dm)</p>
    <p>${cm} cetímetros (cm)</p>
    <p>${mm} milímetros (mm)</p>`
}

function converter() {
    var res = document.getElementById("res")
    var dollar = prompt("Quanto está a cotação do dólar agora?")
    var real = prompt("Quanto R$ você tem na carteira?")
    var real_to_dollar = real / dollar

    res.innerHTML = `<strong>R$ ${real} equivale a:</strong> <p>${real_to_dollar} US$</p>`
}
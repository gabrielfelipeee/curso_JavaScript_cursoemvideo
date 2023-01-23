
function comprar() {
    var produto = prompt("Que produto você está comprando?")
    var preco = prompt(`Quanto custa ${produto} que você está comprando?`)
    var pagamento = prompt(`Qual foi o valor que você deu para pagar ${produto}?`)
    var troco = pagamento - preco
    alert(`Você comprou um ${produto}, que custou ${preco}.\nDeu ${pagamento} em dinheiro e vai recerber ${troco} de troco.\nVolte sempre!`)
}
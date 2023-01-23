function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML  = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12)  {
    // Bom dia!
    img.src = 'manha.png'
    window.document.body.style.background = '#A9A9A9'
    } else if (hora >= 12 && hora < 18) {
    // Boa tarde!
    img.src = 'tarde.png'
    window.document.body.style.background = '#FFD700'
    } else {
        // Boa noite
        img.src = 'noite.png'
        window.document.body.style.background = '#393938'
    }
}s

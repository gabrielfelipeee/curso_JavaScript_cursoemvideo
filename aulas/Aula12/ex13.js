var agora = new Date()
var diaSem = agora.getDay()

/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = sexta
6 = Sábado
*/

switch (diaSem) {  //break dos case é obrigatório | break do default é opcional.
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('ERRO, Dia inválido!')
        break           
}
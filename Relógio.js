let agora = new Date()
var dia = agora.getDay()
var hora = agora.getHours()
var minutos = agora.getMinutes()
if(hora >= 12){
    var amoupm = 'p.m'
}
else  var amoupm = 'a.m'
/*
0 domingo
1 segunda
2 terça
3 quarta
4 quinta 
5 sexta
6 sabádo
*/



switch(dia) {
    
    case 0:
        console.log('Hoje é Domingo,',hora+':'+minutos,amoupm)
        break
    case 1:
        console.log('Hoje é Segunda,',hora+':'+minutos,amoupm)
        break
    case 2:
        console.log('Hoje é Terça,', hora+':'+minutos,amoupm)
        break
    case 3:  
        console.log('Hoje é Quarta,',hora+':'+minutos,amoupm)
        break
    case 4:
        console.log('Hoje é Quinta,', hora+':'+minutos,amoupm)
        break
    case 5:
        console.log('Hoje é Sexta,',hora+':'+minutos,amoupm)
        break
    case 6:
        console.log('Hoje é Sabado,',hora+':'+minutos,amoupm)
        break

}

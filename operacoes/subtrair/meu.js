
var num1 = window.document.getElementById('tx-1')

num1.focus()

function subtracao(){
res.innerHTML=''
let n1 = Number(num1.value)

if(n1 <= 0){
alert('Número '+ n1 + ' inválido, foi concidarado o número 1')
n1 = 1
}else if(n1 >=11){
window.alert('Número '+n1+ ' inválido, foi conciderado o número 10')
n1 = 10
}
for(let i = 1; i < 11; i++){
let r1 = n1 - i
res.innerHTML+= n1+ ' - ' + i+ ' = '+ r1 + '<br>'

}
num1.value=''

};





































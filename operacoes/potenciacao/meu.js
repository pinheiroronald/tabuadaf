
let base = window.document.getElementById('tx-1')
let expnt = window.document.getElementById('tx-2')

base.focus()

function multiplicar(){
res.innerHTML=''
let n1 = Number(base.value)
let n2 = Number(expnt.value)

if(base <= 0){
alert('Numero '+ n1 + ' invalido, foi concidarado o numero 1')
n1 = 1
}else if(n1 >=11){
window.alert('Numero '+n1+ ' invalido, foi conciderado o numero 10')
n1 = 10
}
for(let i = 1; i < n2; i++){
res.innerHTML+= `${n1 ** i}<br>`

}

num1.value=''

};





































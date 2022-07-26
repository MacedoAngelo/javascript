var idade = 12
console.log (`Você tem ${idade}`)
if (idade < 16) {
    console.log('Você Nao vota')
}
else if (idade < 18 || idade >= 67)  { 
    console.log('Seu e Voto opcional')
}
else {
    console.log('Seu voto e obrigatorio')
}
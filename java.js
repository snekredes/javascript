charset="UTF-8"
const form = document.getElementById('form');
let campoA = document.getElementById('campo-a')
let campoB = document.getElementById('campo-b')
form.addEventListener('submit', function(e){
    e.preventDefault();

const mensagemResposta = document.getElementById('mensagem')
const mensagemB= `O valor do campo <b>B</b> é maior que o valor do campo <b>A</b>`
const mensagemA= `O valor do campo <b>A</b> é maior que o valor do campo <b>B</b>`
const mensagemIgual= `Os valores do campo <b>A</b> e <b>B</b> são iguais`
      if(Number(campoB.value) > Number(campoA.value)){
        mensagemResposta.innerHTML=mensagemB;
        mensagemResposta.style.display ='block';
      }
      else if(campoB.value == campoA.value)
        {
            mensagemResposta.innerHTML=mensagemIgual;
            mensagemResposta.style.display ='block';  
        }
        else{
            mensagemResposta.innerHTML=mensagemA;
            mensagemResposta.style.display ='block'; 
        }
      

 })
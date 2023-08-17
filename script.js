const btnTroca = document.getElementById('botao')
const containerDiv = document.getElementById('container')
const frase = document.getElementById('frase')

btnTroca.addEventListener('click',() =>{
  if (containerDiv.style.backgroundColor === 'white'){
    containerDiv.style.backgroundColor = 'black';
    frase.style.color = 'white';
    frase.textContent = 'Viu só?'
  } else {
    containerDiv.style.backgroundColor = 'white';
    frase.style.color = 'black';
    frase.textContent = 'O plano de fundo será alterado ao pressionar o botão abaixo';
  }
})
const botao1 = document.querySelector('.btn1');
const storageInput = document.querySelector('.text');
const text = document.querySelector('.linha');
const scoreArrayIndex = [
    {
        "name": "BigBoss",
        "duration": "00:00:30"
      },
      {
        "name": "Sofia",
        "duration": "00:00:06"
      },
      {
        "name": "Júlia",
        "duration": "00:00:03"
      },
      {
        "name": "",
        "duration": ""
      }
];

localStorage.setItem("scoreArrayIndexKey", JSON.stringify(scoreArrayIndex));
function selecionar(){
  document.getElementById('text').select();
}
document.addEventListener("DOMContentLoaded", function() {
  selecionar();
  
  
}); 

//aparece texto escrito no p
storageInput.addEventListener('input', letter =>{
    text.textContent = letter.target.value;
});

//salva no local storage
const savetolocalstorage = () =>{
    
   localStorage.setItem('textinput', text.textContent);
   window.open('game.html', '_self');
}



//CONFIRMA PREENCHIMETNO DO NOME

  if(text.value === null || text.value === ""){
      alert('Informe o nome');      
      
  }else{
    //botao ao clicar aciona ariavel
botao1.addEventListener('click', savetolocalstorage);
  }
;

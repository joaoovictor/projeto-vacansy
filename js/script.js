
const buttonLogin = document.querySelector('#send-button');
const buttonCadastro = document.querySelector('#button-signup');

buttonLogin.addEventListener('click', function() {
    alert("Os desenvolvedores ainda estão trabalhando no Back-End :(")
});

buttonCadastro.addEventListener('click', function(){
    alert("Os desenvolvedores ainda estão trabalhando no Back-End :(")
});



const accordion = document.getElementsByClassName('contentBx');

for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}

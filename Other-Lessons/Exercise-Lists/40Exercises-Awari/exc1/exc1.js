/* Exercício 1
Crie uma função que exiba uma mensagem de boas-vindas ao usuário quando a página for carregada.
Utilize essa função para personalizar a experiência de cada usuário */

const nameUser = document.getElementById("nameUser").value;

function loadingPage(){
    const div = document.getElementById("inputWelcome");
    div.innerHTML = '';

    const res = document.getElementById("load");
    res.innerHTML = '<img width="150" src="load.gif"><br><p>Loading...</p>';

    setTimeout(function() {
        const userName = nameUser.value; 
        div.innerHTML = '';
        res.innerHTML = '';

        let divWelcome = document.getElementById("welcome");
        divWelcome.innerHTML = `Welcome, ${userName}!`;
    }, 5000);
}
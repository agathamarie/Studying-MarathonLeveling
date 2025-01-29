/* 1. Create an Intelligent Autocomplete
Description:
Implement an autocomplete system for a search form. The algorithm should suggest relevant results based on a list of keywords provided.
Tasks:
Create a function that receives:
A list of keywords (e.g., ["javascript", "java", "python", "typescript", "node.js"]).
The user input (e.g., "ja").
Return suggestions that start with the user's input, ordered by relevance (the number of times they appear in a provided search history).
The algorithm should be case-sensitive (e.g., "Java" ≠ "java") if a flag is activated. */

let search = document.getElementById('search').value;

let search_sugestions = [, 'Agatha', 'Everton', 'Gabriel', 'Gustavo N', 'Gustavo T', 'Henrique', 'Kaua Higa', 'Kaua Miguel', 'Lorena', 'Luan', 'Pedro', 'Yasmin'];

// função que averigua o que tem no input
function autocompleteSearch(search){
    // se o input nao tiver nada, retorna nada   
    if (!search){
        return[];
    }
    let regex = new RegExp(search, "i") // RegExp é tipo uma lupa | "i" para buscar sem diferenciar maiúsculas e minúsculas

    // ele vai retornar o input que ele filtrou
    return search_sugestions.filter(function(sugestion){
        return regex.test(sugestion); // test é para verificar se um nome da lista é o mesmo que o 'sugestion'
    });
}

// função que vai mostrar as sugestões
function showResults(val) {
    res = document.getElementById("result"); // pego a div
    res.innerHTML = ''; // muda a div para ''
    let list = ''; // cria uma lista vazia
    let sugestions = autocompleteSearch(val); // coloca dentro da variavel a função do autocomplete
    for (i=0; i<sugestions.length; i++) { // vai verificar coisa por coisa
      list += '<li>' + sugestions[i] + '</li>'; // para cada "rodada" do i: vai adicionar a opção entre as tag de item
    }
    res.innerHTML = '<ul>' + list + '</ul>'; // vai mudar a div para a lista com todos os items
}


/* Advanced JS exercises |Exercicios avançados de JS

------ ENGLISH :
 1. Create a function that receives an object of type OBJECT representing a product with the properties: name, price, and quantity.

Add a new property category to the object using the spread operator.
Use destructuring to extract the name and price of the product and display them in the console.
Create a function that receives a product and returns a message in the format:
"Product: [name] costs [price] in the category [category]."

---

2. Implement a class called "Turma" that allows managing students.

The class should have the properties: class name and a list of students (students).
Create methods to:
Add a student (name and grade).
Remove a student by name.
Calculate the average grade of the students.
Instantiate the class and simulate creating a class with at least 3 students.

---

3. You have two arrays of objects:

const people = [
  { id: 1, nameP: 'Agatha ' },
  { id: 2, nameP: 'Alysson' },
];
const ages = [
  { id: 1, age: 18 },
  { id: 2, age: 20 },
];

Combine the two arrays into a single array, where each resulting object contains the name and age.
Find the oldest person using . Destructure the data to display the age and name of each person in the console.

---

4. Create a class "Carrinho" to manage products in a shopping cart.

Add products (name, price, and quantity).
Remove products by name.
Calculate the total value of the cart.
Use the spread operator to update the cart without modifying the original array.
Implement a discount function that applies 10% on the total value of the cart.

---

5. Create a function that receives an object representing a user:

const usuario = { nome: 'Pedro', email: 'pedro@email.com', idade: 21 };

Use destructuring in the function signature to extract the object's properties.
Return a formatted message in the format:
"Hello, [name]! You are [age] years old and your email is [email]."
Make the function an expression assigned to a constant.


----------------
------ PT-BR :
1.Crie uma função que receba um objeto do tipo OBJECT que represente um produto com as propriedades: nome, preço e quantidade.

Adicione uma nova propriedade categoria ao objeto usando o operador spread.
Utilize destructuring para extrair o nome e o preço do produto e exiba-os no console.
Crie uma função que receba um produto e retorne uma mensagem no formato:
"Produto: [nome] custa [preço] na categoria [categoria]."

---

2. Implemente uma classe chamada Turma que permita gerenciar estudantes.

A classe deve ter as propriedades: nome da turma e uma lista de estudantes (estudantes).
Crie métodos para:
Adicionar um estudante (nome e nota).
Remover um estudante pelo nome.
Calcular a média das notas dos estudantes.
Instancie a classe e simule a criação de uma turma com pelo menos 3 estudantes.

---

3. Você tem dois arrays de objetos:

const people = [
  { id: 1, nameP: 'Agatha ' },
  { id: 2, nameP: 'Alysson' },
];
const ages = [
  { id: 1, age: 18 },
  { id: 2, age: 20 },
];

Combine os dois arrays em um único array, onde cada objeto resultante contenha o nome e a idade
Encontre a pessoa mais velha utilizando . Desestruture os dados para exibir a idade e o nome de cada pessoa no console.

---

4.Crie uma classe Carrinho para gerenciar produtos em um carrinho de compras.

Adicionar produtos (nome, preço e quantidade).
Remover produtos pelo nome.
Calcular o valor total do carrinho.
Utilize o operador spread para atualizar o carrinho sem modificar o array original.
Implemente uma função de desconto que aplique 10% no valor total do carrinho.

---

5. Crie uma função que receba um objeto representando um usuário:

const usuario = { nome: 'Pedro', email: 'pedro@email.com', idade: 21 };

Use destructuring na assinatura da função para extrair as propriedades do objeto.
Retorne uma mensagem formatada no formato:
"Olá, [nome]! Você tem [idade] anos e seu e-mail é [email]."
Faça a função ser uma expressão atribuída a uma constante.

*/
/*Exercicios avançados de JS

/* 1.Crie uma função que receba um objeto do tipo OBJECT que represente um produto com as propriedades: nome, preço e quantidade.

Adicione uma nova propriedade categoria ao objeto usando o operador spread.
Utilize destructuring para extrair o nome e o preço do produto e exiba-os no console.
Crie uma função que receba um produto e retorne uma mensagem no formato:
"Produto: [nome] custa [preço] na categoria [categoria]." */
const products = [];

function gettingProduct() {
  const section = document.getElementById('section');

  var n = document.getElementById('name').value;
  var c = parseFloat(document.getElementById('cost').value);
  var q = parseFloat(document.getElementById('quantity').value);
  function createProduct(n, c, q) {
    return {
      name: n,
      cost: c,
      quantity: q
    };
  }
  var product = createProduct(n, c, q);

  var newElement = document.createElement("p");
  newElement.innerHTML = "Ops, I forgot the category, sry! :)";
  section.appendChild(newElement);
  // 
  var newPropriety = document.createElement("input");
  newPropriety.type = "text";
  newPropriety.placeholder = "Category of your product: ";
  newPropriety.id = "category";
  section.appendChild(newPropriety);
  // 
  var newButton = document.createElement("input");
  newButton.type = "button";
  newButton.onclick = function() {
    var category = document.getElementById('category').value;
    product = {
      ...product,
      category: category
    };
    products.push(product);
  };
  newButton.value = "Submit Category";
  section.appendChild(newButton);

  let {name, cost} = product; 
  console.log(name); console.log(cost);
}

function showProduct() {
  const productsSpecifics = document.getElementById('productsSpecifics');

  var productSpecific = document.getElementById('productSpecific').value;
  
  const filterProducts = products.filter(element => element.name === productSpecific);
  for (let i = 0; i < filterProducts.length; i++) {
    var showElementProduct = document.createElement("p");
    showElementProduct.innerHTML = `Product: ${filterProducts[i].name} costs ${filterProducts[i].cost} in the ${filterProducts[i].category} category`;
    productsSpecifics.appendChild(showElementProduct);
  }
}

/*2. Implemente uma classe chamada Turma que permita gerenciar estudantes.

A classe deve ter as propriedades: nome da turma e uma lista de estudantes (estudantes).
Crie métodos para:
Adicionar um estudante (nome e nota).
Remover um estudante pelo nome.
Calcular a média das notas dos estudantes.
Instancie a classe e simule a criação de uma turma com pelo menos 3 estudantes. */
class Class {
  constructor(nameClass) {
    this.nameClass = nameClass;
    this.listStudents = [];
  }

  addStudent(nameStudent, grade1, grade2, grade3, grade4) {
    var student = {
      name: nameStudent,
      class: this.nameClass,
      grades: [grade1, grade2, grade3, grade4],
    };
    this.listStudents.push(student);
    console.log(`The student ${nameStudent} was added!`);
  }

  removeStudent(nameStudent) {
    for (let i = 0; i < this.listStudents.length; i++) {
      if (this.listStudents[i].name === nameStudent) {
        this.listStudents.splice(i, 1);
        console.log(`The student ${nameStudent} was deleted!`);
        return;
      }
    }
    console.log(`Student ${nameStudent} not found in class ${this.nameClass}.`);
  }

  calculateAverage(nameStudent) {
    const student = this.listStudents.find((student) => student.name === nameStudent);
    if (!student) {
      console.log(`Student ${nameStudent} not found in class ${this.nameClass}.`);
      return;
    }
    const sum = student.grades.reduce((accumulator, value) => accumulator + value, 0);
    const average = sum / student.grades.length;
    console.log(`Average: ${average} of student: ${student.name} of class: ${student.class}`);
  }
}
// Create a class
var Class141 = new Class("141");

// Add students
Class141.addStudent("Agatha Marie", 10, 9, 9, 10);
Class141.addStudent("Lorena", 9, 9, 9, 10);
Class141.addStudent("Yasmin", 10, 9, 9, 8);
Class141.addStudent("Gabriel", 8, 9, 10, 10);

// Remove a student
Class141.removeStudent("Gabriel");

// Calculate average for a student
Class141.calculateAverage("Agatha Marie");


/*3. Você tem dois arrays de objetos:*/
const people = [
  { id: 1, nameP: 'Agatha ' },
  { id: 2, nameP: 'Alysson' },
];
const ages = [
  { id: 1, age: 18 },
  { id: 2, age: 20 },
];
/* Combine os dois arrays em um único array, onde cada objeto resultante contenha o nome e a idade
Encontre a pessoa mais velha utilizando . Desestruture os dados para exibir a idade e o nome de cada pessoa no console. */

const peopleData = people.map(function(person) {
  var ageData = ages.find(element => element.id === person.id);
  return {
    name: person.nameP,
    age: ageData ? ageData.age : null
  };
});

// found the more older
let olderPerson = peopleData[0];
for (let person of peopleData) {
  if (person.age > olderPerson.age) {
    olderPerson = person;
  }
}
console.log(olderPerson.name);

// Destructuring 
peopleData.forEach(({ name, age }) => {
  console.log(`Nome: ${name}, Idade: ${age}`);
});


/*4.Crie uma classe Carrinho para gerenciar produtos em um carrinho de compras.

Adicionar produtos (nome, preço e quantidade).
Remover produtos pelo nome.
Calcular o valor total do carrinho.
Utilize o operador spread para atualizar o carrinho sem modificar o array original.
Implemente uma função de desconto que aplique 10% no valor total do carrinho. */

class shoppingCart {
  constructor() {
    this.listProducts = [];
    this.totalShoppingCart = 0;
  }

  addProduct(name, cost, quantity) {
    let product = {
      name: name,
      cost: cost,
      quantity: quantity,
    };
    this.listProducts.push(product);
    console.log(`The product ${name} was added in your shoppingCart!`);
  }

  calculateTotal(){
    for (let i=0; i < this.listProducts.length; i++){
      this.totalShoppingCart += this.listProducts[i].cost * this.listProducts[i].quantity;
    }
    console.log(`The total of you shopping cart: ${this.totalShoppingCart}`)
  }

  addDiscount(){
    this.totalShoppingCart = this.totalShoppingCart - (this.totalShoppingCart * 0.10)
  }
}

var firstShoppingCart = new shoppingCart();

firstShoppingCart.addProduct("Book", 50, 2);
firstShoppingCart.addProduct("FacialCream", 60, 1);
firstShoppingCart.addProduct("ToyforDog", 15, 1);

firstShoppingCart.calculateTotal();
console.log(firstShoppingCart);
firstShoppingCart.addDiscount();
console.log(firstShoppingCart);


/*5. Crie uma função que receba um objeto representando um usuário:

const usuario = { nome: 'Pedro', email: 'pedro@email.com', idade: 21 };

Use destructuring na assinatura da função para extrair as propriedades do objeto.
Retorne uma mensagem formatada no formato:
"Olá, [nome]! Você tem [idade] anos e seu e-mail é [email]."
Faça a função ser uma expressão atribuída a uma constante. */

const formatUser = ({ name, email, age }) => {
  return `Hello, ${name}! You are ${age} years old and your email is ${email}`;
};

const user = { name: 'Agatha Marie', email: 'agathamarie@email.com', age: 18 };
console.log(formatUser(user));
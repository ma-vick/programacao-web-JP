let a = 15;
let biscoito = 321 + 123;
a = 2 * a + 5;
let c = 'essa aqui é uma string';

// comentário

let d = 'próxima linha já é comando';

/*
comentário
de várias
linhas
*/

// escrevendo na página HTML

document.write('<h1>título adicionado pelo script.js</h1>');
document.write('<p>' + c + '</p>');

console.log('mensagem no console, não aparece na página.');
console.log('só se o usuário abrir o console no F12 é que ele vai ver.');

let lista = [12, 27, 84, 23];
let lista2 = ["lista com valores diferentes.", 10, 64.5, [1, 2, 3, 'oi!'], true, 12];

lista[2] = 'metamorfose';
console.log('variável lista no índice 2: ' + lista);

lista2[3][0] = 'metamorfose';

let lista3 = {
    'nome': 'Vick',
    'estilo': 'braba',
    'idade': 17
};

console.log('nome: ' + lista3['nome']);
console.log('idade: ' + lista3['idade']);

// operações com listas
console.log('tamanho da lista \'lista\': ' + lista.length);

lista.push(100);
lista.push(73);

console.log('novo tamanho: ' + lista.length);
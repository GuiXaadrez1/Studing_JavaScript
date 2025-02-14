/* Entendendo o conceito de variáveil*/

// Variável é um espaço em bits na memória ram que um dado ou objeto pode ser armazenado

/*
 * Formas de declarar variáveis: 
 * var
 * let
 * const
*/

// declarando uma variável:

var pote = "bombo";

// o var declara a variável pote que armazena a String bombom

alert("Estamos na Aula06, vamos falar de variáveis, recomendo que utilize o inspecionar e vá no console.")

console.log("Aqui está o nosso objeto armazenado na variável pote:" + '',pote)
console.log("Lembrando que var é uma forma de declarar variáveis, se apenas declararmos, sem colocar um objeto na variável, estamos colocando valores nulos undefind")

/* O exemplo acima fizemos concatenação de palavras ou letras */

/* Abeixo vai um exemplo de cálculos aritméticos com o javascript */

var soma = 10 + 30;
var subtração = 30 - 15

var cálculo = soma - subtração;

console.log("Cálculo básico realizado usando nossas variáveis declaradas: ",cálculo)

document.write("Para realizar concatenação de números, letras, variáveis, objetos é interessante usar o + , esse + é concatenação")

/* Abaixo vai rolar uma bagaçeira !*/

var nome, sobre_nome, idade, pessoa;

nome = "Seu Pai"; sobre_nome = 'Quem manda'; idade = 0;

/* Concatenando variáveis */

console.log(nome +' '+ sobre_nome +' '+ idade)


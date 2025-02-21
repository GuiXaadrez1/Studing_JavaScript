alert("Vamos Aprender sobre Operadores e suas diversas formas, recomendo que use o modo inspecionar!");

console.log("Os primeiros operadores são aritímedicos\nUsado para realizar cálculos ");
console.log('\nsomar: "+" \nsubtrair: "-"\nmultiplicar: *\nquociente ou dividir: /\nmódulo ou resto: %\nexponenciação: **');

// use `texto` para quebra de linha
console.log(`Exemplos: let x = 10
    x + 10 = 20
    x - 10 = 0
    x * 3 = 30
    x / 5 = 2
    x % 3 = 1
    x ** 2 = 100`);

let x = 10;

console.log(a = x + 10);
console.log(b = x - 10);
console.log(c = x * 3);
console.log(d = x/5);
console.log(e = x%3);
console.log(x**2);

console.log(` Operadores de atribuição!
    
    - Basicamente operadores de atribuição funciona atribuindo um valor ao objeto armazenado
    na variável, muito útil para cálculos e concatenações, lógica do código em geral.
    
    Exmeplos:
        
        let y = 10 // mais fácil de trabalhar

        y += 5;  // x agora é 15 -> somamos o objeto x com 5 que nos retorna esse resultado
        y -= 3;  // x agora é 12 -> mesma lógica com o de cima mas muda o operador de atribuição
        y *= 2;  // x agora é 24
        y /= 4;  // x agora é 6
        y %= 4;  // x agora é 2
        y **= 2; // x agora é 4
 
        `);

let y = 10;

console.log(y += 5);
console.log(y -= 3);
console.log(y *= 2);
console.log(y /= 4);
console.log(y %= 4);
console.log(y **= 2);

console.log(` Operadores de comparação
     
    Esses operadores retornam True ou False

    == -> igualdade de valor
    === -> igualdade estrita (agora ele verificar o valor e o tipo de dado do objeto armazenado na variável)
    != -> diferente
    !== -> diferente estrito (agora ele verificar o valor e o tipo de dado do objeto armazenado na variável)
    > -> Maior que
    < -> Menor que
    >= -> Maior igual
    <= -> Menor igual
    
    Exemplos:

        console.log(5 == "5");  // true
        console.log(5 === "5"); // false
        console.log(5 != 4);    // true
        console.log(5 !== "5"); // true
        console.log(5 > 3);     // true
        console.log(5 < 3);     // false
        console.log(5 >= 5);    // true
        console.log(5 <= 4);    // false
    `);

console.log(5 == "5");  // true
console.log(5 === "5"); // false
console.log(5 != 4);    // true
console.log(5 !== "5"); // true
console.log(5 > 3);     // true
console.log(5 < 3);     // false
console.log(5 >= 5);    // true
console.log(5 <= 4);    // false

console.log(`Operadores Lógicos da Tabela Verdade (Usados em expressões booleanas)
    
    &&	-> AND (E)	-> verdade e apenas verdades
    ||	-> OR (OU) -> tanto faz se um valor é verdadeiro e o outro é falso, só não pode ser apenas falso e falso se não é falso
    !	-> NOT (Negação) ->  Nega o valor lógico, o que era true agora é false

    Exemplo: 
        
        console.log(true && false);   // false
        console.log(true && true);   // true
        console.log(true || false);  // true
        console.log(false || false); // false
        console.log(true || true);   // true
        console.log(!true);          // false

    `);

    console.log(true && false); // false
    console.log(true && true); // true
    console.log(true || false); // true
    console.log(false || false);  // false
    console.log(true || true);
    console.log(!true);         // false

console.log(`5. Operadores Bitwise (Operam no nível de bits)

    OPERADOR	                DESCRIÇÃO DETALHADA
        & (AND bit a bit)	    Compara cada bit e retorna 1 se ambos forem 1.
        |	                    | (OR bit a bit)
        ^                       (XOR bit a bit)	Retorna 1 se os bits forem diferentes.
        ~ (NOT bit a bit)	    Inverte todos os bits do número.
        << (Shift à esquerda)	Move os bits para a esquerda, multiplicando por 2 a cada deslocamento.
        >> (Shift à direita)	Move os bits para a direita, dividindo por 2 a cada deslocamento.




    Operador	    Descrição	        Exemplo	         Resultado
        &	        AND bit a bit	    5 & 1	              1
        |	            |	            OR bit a bit          |5
        ^	        XOR bit a bit	    5 ^ 1	              4
        ~	        NOT bit a bit	     ~5	                  -6
        <<	       Shift à esquerda	    5 << 1	              10
        >>	       Shift à direita	    5 >> 1	              2

`)

console.log(5 & 1);  // 1
console.log(5 | 1);  // 5
console.log(5 ^ 1);  // 4
console.log(~5);     // -6
console.log(5 << 1); // 10
console.log(5 >> 1); // 2


console.log(`Operadores tenários (Condicional inline / condicionais em uma linha\NBasicamente é um atalho para a estrutura condicional if)

    Sintaxe:
       condição ? valor_se_verdadeiro : valor_se_falso;

    condição → Expressão que será avaliada como true ou false.
    ? → Indica que se a condição for verdadeira, o valor após ele será retornado.
    : → Separa a parte verdadeira da parte falsa.
    valor_se_verdadeiro → Valor retornado caso a condição seja true.
    valor_se_falso → Valor retornado caso a condição seja false.
    
    Exemplo:
    
    let idade = 18;
    let status = (idade >= 18) ? "Adulto" : "Menor de idade";
    console.log(status); // "Adulto"

    Explicação:
        let status é uma variável que armazena um operador ternário para o valor da variável
        idade, essa variável rescebe o número inteiro 18 como valor, o ? indica se a condição
        for verdadeira, o valor após ele será retornado e os : separa a parte de verdadeira
        para a false, neste caso, retorna adulto se a c condição idade >= 18 for atendida,
        então essa pessoa é um adulto de valor lógico true, se não retorna menor de idade
        que possui valor lógico false.

`);

let idade = 18;
let situacao = (idade >= 18) ? "Adulto" : "Menor de idade";
console.log(situacao); // "Adulto"


console.log("Operadores de String\nBasicamente são usados para manipular strings");
console.log(`
    
    + -> concatena string
    += -> Adiciona uma string ao valor existente de uma variável
     
    Exemplo:

        let nome1 = Guilherme
        nome += Silva
        console.log(nome) // Guilherme Silva
    `);


let nome = 'Guilherme';
nome += 'Silva';

console.log(nome); // João Silva

console.log("Operador de Tipo (Verificam ou Identificar o Tipo ou o Valor de um objeto)");
console.log(`
    
    Operador            Descrição
        typeof	        Retorna o tipo de dado de uma variável.
        instanceof	    Verifica se um objeto é instância de uma classe ou construtor.
    
    Exemplo de uso:
        console.log(typeof "Olá"); // "string"
        console.log([] instanceof Array); // true 
    
    Exmeplo fazendo:    
        let num = 25 ;
        num += "essa porcaria aqui vai dar string";  
        console.log(typeof num);    
`);
  
let num = 25 ;
num += "essa porcaria aqui vai dar string";  
console.log(typeof num);    


console.log("Operador de Nullish Coalescing (??) (Evita valores null ou undefined)");
console.log(`
    
    
    Operador	    Descrição
        ??	        Retorna o primeiro valor não null ou undefined.
    
    Exemplo:

    let nome = null;
    let resultado = nome ?? "Desconhecido";
    console.log(resultado); // "Desconhecido"

`);

let name = null;
let result = name ?? "Desconhecido";
console.log(result);

console.log("Operador de Desestruturação (Extrai valores de arrays ou objetos)");
console.log(`

    Operador	        Descrição
    [a, b] = array	    Atribui valores de um array a variáveis.
    {chave} = objeto	Atribui valores de um objeto a variáveis.
    
    Exmeplo:
        
        let [x, y] = [10, 20];  
        console.log(x, y); // 10 20

        let pessoa = { nome: "João", idade: 25 };
        let { nome, idade } = pessoa;
        console.log(nome, idade); // "João" 25

    `);


let [z, w] = [10, 20];  
console.log(z, w); // 10 20

let pessoa = { nick: "João", year: 25 };
let { nick, year } = pessoa;
console.log(nick, year); // "João" 25

console.log(" Operador de Spread (...) (Expande elementos de arrays ou objetos)");
console.log(`
    
    Operador	Descrição
    ...array	Expande os elementos de um array.
    ...objeto	Expande as propriedades de um objeto.
    
    Exemplo:
    
        let numeros = [1, 2, 3];
        let novosNumeros = [...numeros, 4, 5];
        console.log(novosNumeros); // [1, 2, 3, 4, 5]

        let pessoa1 = { nome: "Ana", idade: 30 };
        let pessoa2 = { ...pessoa1, cidade: "São Paulo" };
        console.log(pessoa2); // { nome: "Ana", idade: 30, cidade: "São Paulo" }

    
    `);

 
let numeros = [1, 2, 3];
let novosNumeros = [...numeros, 4, 5];
console.log(novosNumeros); // [1, 2, 3, 4, 5]

let pessoa1 = { nm: "Ana", idd: 30 };
let pessoa2 = { ...pessoa1, cidade: "São Paulo" };
console.log(pessoa2); // { nome: "Ana", idade: 30, cidade: "São Paulo" }   
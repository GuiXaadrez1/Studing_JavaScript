/* Vamos aprender sobre funções*/
alert("Vamos entender um pouco sobre funções, recomendo que utilize o modo inspecionar");

console.log(`
    Básicamente funções são blocos de códigos que podem ser reutilizados
    Assim podemos otimizar e facilitar a leitura do nosso código
    
    Sintaxe do função:
        
        function nome_função(parâmetros){

            bloco de código
        
            return(saida da função)
        };
    
    Chamando a função:
        
        let total = nome_função(parâmetros);
        console.log(total); // saida da função

        ou

        nome_função(parâmetros);
    `);

//Criando função

function somar(a,b){

    return a + b
    
};
        
    
let a = 10
let b = 30    

/*
exibindo a informação de retorno do cálculo da função e chamando-a passando 
os parâmetros corretos para ela
*/

console.log(somar(a,b));

import readlinesync = require('readline-sync');
import { Stack } from "../interface/Stack";


const pilha = new Stack<string>();
var opcaoMenu : number;
var continueMenu : number = 0;

do{
    console.log("*******************************************************");
    console.log("********** 1- Adicionar Livro na Pilha ***************");
    console.log("********** 2- Listar todos os Livros  ***************");
    console.log("********** 3- Retirar Livros da Pilha  ***************");
    console.log("********** 0-      Sair do Menu         ***************");
    console.log("*******************************************************");

    opcaoMenu = readlinesync.questionInt("\n Entre com  a opcao desejada: ");
    
    switch (opcaoMenu) {
    case 1:
        let nome = readlinesync.question("\nEntre com o nome do livro que deseja adicionar: ");
        pilha.push(nome);
        console.log("\n Livro adicionado com sucesso!");
        
        break;

    case 2:
        console.log("\n Todos os livros da pilha: ");
        pilha.printStack();

            if (pilha.isEmpty() === true){
                console.log("\n A pilha esta vazia!");
            }

        break;
   case 3:
        console.log("\n Livro retirado da pilha: " + pilha.pop());
        console.log("\n Livro retirado com sucesso!");
        console.log("\n Todos os livros que ainda estao na pilha: ");
        pilha.printStack();
        
    
        break;
    case 0:
        break;

    }  
    continueMenu = readlinesync.questionInt("\n Deseja continuar no menu? 1-Sim 0-Nao: ");
} while (continueMenu !== 0);
console.log("\n Programa finalizado!")
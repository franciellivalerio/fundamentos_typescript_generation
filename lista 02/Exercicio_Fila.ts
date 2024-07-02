import { Queue } from "../interface/Queue";
import readlinesync = require('readline-sync');


const fila = new Queue<string>();
var opcaoMenu : number;
var continueMenu : number = 0;

do{
    console.log("*******************************************************");
    console.log("********** 1- Adicionar Cliente na Fila ***************");
    console.log("********** 2- Listar todos os Clientes  ***************");
    console.log("********** 3- Retirar Cliente da Fila   ***************");
    console.log("********** 0-      Sair do Menu         ***************");
    console.log("*******************************************************");

    opcaoMenu = readlinesync.questionInt("\n Entre com  a opcao desejada: ");
    
    switch (opcaoMenu) {
    case 1:
        let nome = readlinesync.question("\nEntre com o nome do cliente que deseja adicionar: ");
        fila.enqueue(nome);
        console.log("\n Cliente adicionado com sucesso!");
        
        break;

    case 2:
        console.log("\n Todos os clientes da fila: ");
        fila.printQueue();

            if (fila.isEmpty() === true){
                console.log("\n A fila vazia!");
            }

        break;
   case 3:
        console.log("\n Cliente retirado da fila: " + fila.dequeue());
        console.log("\n Cliente retirado com sucesso!");
        console.log("\n Todos os clientes que ainda estao da fila: ");
        fila.printQueue();
        
    
        break;
    case 0:
        break;

    }  
    continueMenu = readlinesync.questionInt("\n Deseja continuar no menu? [1]-Sim [0]-Nao: ");
} while (continueMenu !== 0);
console.log("\n Programa finalizado!")
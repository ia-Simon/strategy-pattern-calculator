import { Calculator } from './calculator';
import prompt from 'prompt';
import { OpAdd, OpCbRoot, OpDiv, OpLogN, OpMult, OpPow2, OpPow3, OpSqRoot, OpSub } from './operations';

const calcTitle = `
   ________    ____   ______      __           __      __            
  / ____/ /   /  _/  / ____/___ _/ /______  __/ /___ _/ /_____  _____
 / /   / /    / /   / /   / __ \`/ / ___/ / / / / __ \`/ __/ __ \\/ ___/
/ /___/ /____/ /   / /___/ /_/ / / /__/ /_/ / / /_/ / /_/ /_/ / /    
\\____/_____/___/   \\____/\\__,_/_/\\___/\\__,_/_/\\__,_/\\__/\\____/_/    
` 

const calcMenu = `
> Escolha uma ação:

  1. Soma
  2. Subtração
  3. Multiplicação
  4. Divisão
  5. N ao Quadrado
  6. N ao Cubo
  7. Raiz Quadrada
  8. Raiz Cúbica
  9. Log Natural (ln)

  h. Exibir histórico
`;

const operandInstructions = `
> Forneça os operandos necessários para a operação escolhida. Para utilizar o último resultado salvo no histórico,
> utilize a keyword 'Ans' (caso não existam valores salvos no histórico, Ans será substituído por 0).
`;

function sleep(interval: number) {
  return new Promise(resolve => setTimeout(resolve, interval));
}

async function main() {
  const calculator = new Calculator();

  console.log(calcTitle);
  prompt.start();
  
  while(true) {
    console.log(calcMenu);
    const resp = await prompt.get({
      name: 'action',
      description: 'Escolha uma ação',
      required: true,
      pattern: /^[1-9h]$/,
      message: "Ação deve ser um número de 1 a 9, ou a letra 'h'.",
    });

    switch (resp['action']) {
    case '1':
      calculator.setOperation(new OpAdd);
      break;
    case '2':
      calculator.setOperation(new OpSub);
      break;
    case '3':
      calculator.setOperation(new OpMult);
      break;
    case '4':
      calculator.setOperation(new OpDiv);
      break;
    case '5':
      calculator.setOperation(new OpPow2);
      break;
    case '6':
      calculator.setOperation(new OpPow3);
      break;
    case '7':
      calculator.setOperation(new OpSqRoot);
      break;
    case '8':
      calculator.setOperation(new OpCbRoot);
      break;
    case '9':
      calculator.setOperation(new OpLogN);
      break;
    case 'h':
      calculator.showHistory();
      continue;
    }

    console.log(operandInstructions);
    try {
      await calculator.collectOperands();
    } catch (e) {
      continue;
    }

    try {
      const result = calculator.calculate();
      console.log(`> Resultado: ${result}`);
    } catch (e) {
      console.log(`> Erro: ${e}`);
    }
  }
}

main();

import { Operation } from './operation';
import prompt from 'prompt';
import { Configuration } from '../config';

export class OpDiv implements Operation {
  private dividend: number = 0;
  private divisor: number = 1;

  public async collectOperands(lastAnswer: number): Promise<void> {
    const resp = await prompt.get([
      {
        name: 'dividend',
        description: 'Dividendo',
        required: true,
        pattern: Configuration.operand_validation_regex,
        message: Configuration.operand_validation_error_msg,
      },
      {
        name: 'divisor',
        description: 'Divisor',
        required: true,
        pattern: Configuration.operand_validation_regex,
        message: Configuration.operand_validation_error_msg,
      }
    ]);
    
    this.dividend = (resp["dividend"] === Configuration.last_answer_keyword) ? lastAnswer : parseFloat(resp["dividend"] as string);
    this.divisor = (resp["divisor"] === Configuration.last_answer_keyword) ? lastAnswer : parseFloat(resp["divisor"] as string);
  }

  public execute(): number {
    if (this.divisor === 0) {
      throw new Error("divisor não pode ser zero");
    }

    return this.dividend / this.divisor;
  }
}
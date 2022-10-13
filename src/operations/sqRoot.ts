import { Operation } from './operation';
import prompt from 'prompt';
import { Configuration } from '../config';

export class OpSqRoot implements Operation {
  private radicand: number = 0;

  public async collectOperands(lastAnswer: number): Promise<void> {
    const resp = await prompt.get([
      {
        name: 'radicand',
        description: 'Radicando',
        required: true,
        pattern: Configuration.operand_validation_regex,
        message: Configuration.operand_validation_error_msg,
      }
    ]);
    
    this.radicand = (resp["radicand"] === Configuration.last_answer_keyword) ? lastAnswer : parseFloat(resp["radicand"] as string);
  }

  public execute(): number {
    if (this.radicand < 0) {
      throw new Error("radicando não pode ser menor que zero");
    }

    return Math.sqrt(this.radicand);
  }
}
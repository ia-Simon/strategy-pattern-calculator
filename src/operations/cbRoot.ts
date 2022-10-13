import { Operation } from './operation';
import prompt from 'prompt';
import { Configuration } from '../config';

export class OpCbRoot implements Operation {
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
    return Math.cbrt(this.radicand);
  }
}
import { Operation } from './operation';
import prompt from 'prompt';
import { Configuration } from '../config';

export class OpPow2 implements Operation {
  private base: number = 0;

  public async collectOperands(lastAnswer: number): Promise<void> {
    const resp = await prompt.get([
      {
        name: 'base',
        description: 'Base',
        required: true,
        pattern: Configuration.operand_validation_regex,
        message: Configuration.operand_validation_error_msg,
      }
    ]);
    
    this.base = (resp["base"] === Configuration.last_answer_keyword) ? lastAnswer : parseFloat(resp["base"] as string);
  }

  public execute(): number {
    return Math.pow(this.base, 2);
  }
}
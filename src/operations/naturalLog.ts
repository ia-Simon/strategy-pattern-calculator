import { Operation } from './operation';
import prompt from 'prompt';
import { Configuration } from '../config';

export class OpLogN implements Operation {
  private antiLog: number = 0;

  public async collectOperands(lastAnswer: number): Promise<void> {
    const resp = await prompt.get([
      {
        name: 'antiLog',
        description: 'Anti Log',
        required: true,
        pattern: Configuration.operand_validation_regex,
        message: Configuration.operand_validation_error_msg,
      }
    ]);
    
    this.antiLog = (resp["antiLog"] === Configuration.last_answer_keyword) ? lastAnswer : parseFloat(resp["antiLog"] as string);
  }

  public execute(): number {
    return Math.log(this.antiLog);
  }
}
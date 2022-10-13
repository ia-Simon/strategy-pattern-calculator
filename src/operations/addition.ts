import { Operation } from './operation';
import prompt from 'prompt';
import { Configuration } from '../config';

export class OpAdd implements Operation {
  private term1: number = 0;
  private term2: number = 0;

  public async collectOperands(lastAnswer: number): Promise<void> {
    const resp = await prompt.get([
      {
        name: 'term1',
        description: 'Termo 1',
        required: true,
        pattern: Configuration.operand_validation_regex,
        message: Configuration.operand_validation_error_msg,
      },
      {
        name: 'term2',
        description: 'Termo 2',
        required: true,
        pattern: Configuration.operand_validation_regex,
        message: Configuration.operand_validation_error_msg,
      }
    ]);
    
    this.term1 = (resp["term1"] === Configuration.last_answer_keyword) ? lastAnswer : parseFloat(resp["term1"] as string);
    this.term2 = (resp["term2"] === Configuration.last_answer_keyword) ? lastAnswer : parseFloat(resp["term2"] as string);
  }

  public execute(): number {
    return this.term1 + this.term2;
  }
}
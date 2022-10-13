
import { Operation } from './operation';

export class Nop implements Operation {
    
  public async collectOperands(ans: number): Promise<void> {}

  public execute(): number {
    return 0;
  }
}
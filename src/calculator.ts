import { Nop } from './operations';
import { Operation } from './operations/operation';

export class Calculator {
  private history: number[] = [];
  private operation: Operation = new Nop();

  private buildHistoryPosString(padding: number, pos: number): string {
    let charArr: string[] = [];
    for (let i = 0; i < padding - String(pos).length; i++) charArr.push(' ');

    return charArr.join("") + String(pos);
  }

  public setOperation(operation: Operation): void {
    this.operation = operation;
  }

  public async collectOperands(): Promise<void> {
    const lastAnswer = this.history[this.history.length - 1];
    await this.operation.collectOperands(lastAnswer || 0);
  }

  public calculate(): number {
    const result  = this.operation.execute();
    this.history.push(result);

    return result;
  }

  public showHistory(): void {
    console.log("\n| Histórico:");

    if (this.history.length > 0) {
      const padding = String(this.history.length).length + 1;

      let count = 0;
      for (let item of this.history) {
        console.log(`| ${this.buildHistoryPosString(padding, ++count)} ->    ${item}`);
      }
    } else {
      console.log("| --- Empty ---");
    }
  }
}

export interface Operation {
  collectOperands(lastAnswer: number): Promise<void>
  execute(): number;
}
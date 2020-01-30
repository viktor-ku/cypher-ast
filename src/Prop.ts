import {Eq, Serialize} from "./traits";

export class Prop implements Serialize, Eq<Prop> {
  constructor(
    public key: string,
    public value: string | number,
  ) {}

  build(): string {
    return `${this.key}: ${JSON.stringify(this.value)}`
  }

  equals(thing: Prop): boolean {
    return this.key === thing.key && this.value === thing.value
  }
}

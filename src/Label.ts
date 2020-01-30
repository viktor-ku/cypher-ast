import {Eq, Serialize} from "./traits";

export class Label implements Serialize, Eq<Label> {
  constructor(
    public name: string
  ) {}

  build(): string {
    return `:${this.name}`
  }

  equals(thing: Label): boolean {
    return this.name === thing.name
  }
}

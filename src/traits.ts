export interface Serialize {
  build(): string;
}

export interface Eq<T> {
  equals(thing: T): boolean;
}

import {Serialize} from "./traits";
import {Prop} from "./Prop";

export class Dict extends Map implements Serialize {
  props: Prop[]

  constructor(props?: Prop[]) {
    super();

    this.props = props || [];

    if (props) {
      for (const prop of props) {
        this.set(prop.key, prop.value)
      }
    }
  }

  build(): string {
    let q = '{'

    if (this.size) {
      const qProps = this.props.map(prop => prop.build());
      q += ` ${qProps.join(', ')} `
    }

    q += '}'
    return q
  }
}

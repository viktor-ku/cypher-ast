import {Label} from "./Label";
import {Dict} from "./Dict";
import {Serialize} from "./traits";

export class Node implements Serialize {
  private id: string
  private labels: Label[]
  private dict: Dict

  constructor(id?: string, labels?: Label[], dict?: Dict) {
    this.id = id || ''
    this.labels = labels || []
    this.dict = dict || new Dict()
  }

  build(): string {
    let q = '('

    q += this.id

    if (this.labels.length) {
      q += this.labels.map(label => label.build()).join('')
    }

    if (this.dict.size) {
      q += ' '
      q += this.dict.build()
    }

    q += ')'
    return q
  }
}

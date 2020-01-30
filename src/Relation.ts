import {Node} from "./Node";
import {Serialize} from "./traits";

enum Direction {
  Right = 1,
  Left,
}

type Point = Node | Relation;

export class Relation implements Serialize {
  static Direction = Direction;

  constructor(
    private points: [Point, Point],
    private dir: Direction = Direction.Right,
  ) {}

  build(): string {
    let q = ''

    const [from, to] = this.points;

    q += from.build()

    if (this.dir === Direction.Right) {
      q += '-->'
    } else {
      q += '<--'
    }

    q += to.build()

    return q
  }
}

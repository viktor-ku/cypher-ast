import it from 'ava'
import {Relation} from '../src/Relation'
import {Node} from '../src/Node'
import {Label} from '../src/Label'

it('build a directed relationship', t => {
  const rel = new Relation(
    [
      new Node('a'),
      new Node('b'),
    ],
  )

  t.is(rel.build(), '(a)-->(b)')
})

it('build a directed relationship with a label', t => {
  const rel = new Relation(
    [
      new Node('a'),
      new Node('b'),
    ],
    Relation.Direction.Right,
  )

  t.is(rel.build(), '(a)-[:Friend]->(b)')
})

it('build a reversed directed relationship', t => {
  const rel = new Relation(
    [
      new Node('a'),
      new Node('b'),
    ],
    Relation.Direction.Left,
  )

  t.is(rel.build(), '(a)<--(b)')
})

it('build a reversed directed relationship to another relationship', t => {
  const relOne = new Relation(
    [
      new Node('a'),
      new Node('b'),
    ],
  )
  const relTwo = new Relation(
    [
      relOne,
      new Node('c'),
    ],
    Relation.Direction.Left,
  )

  t.is(relTwo.build(), '(a)-->(b)<--(c)')
})

it('build a directed relationship to another relationship', t => {
  const relOne = new Relation(
    [
      new Node('a'),
      new Node('b'),
    ],
  )
  const relTwo = new Relation(
    [
      relOne,
      new Node('c'),
    ],
  )

  t.is(relTwo.build(), '(a)-->(b)-->(c)')
})

it('build a directed relationship from another relationship', t => {
  const relOne = new Relation(
    [
      new Node('a'),
      new Node('b'),
    ],
  )
  const relTwo = new Relation(
    [
      new Node('c'),
      relOne,
    ],
  )

  t.is(relTwo.build(), '(c)-->(a)-->(b)')
})

it('build a directed relationship from another relationship (reversed)', t => {
  const relOne = new Relation(
    [
      new Node('a'),
      new Node('b'),
    ],
  )
  const relTwo = new Relation(
    [
      new Node('c'),
      relOne,
    ],
    Relation.Direction.Left,
  )

  t.is(relTwo.build(), '(c)<--(a)-->(b)')
})

it('build a directed relationship between two relationships', t => {
  const relOne = new Relation(
    [
      new Node('a'),
      new Node('b'),
    ],
  )
  const relTwo = new Relation(
    [
      new Node('c'),
      new Node('d'),
    ],
    Relation.Direction.Left,
  )
  const rel = new Relation(
    [
      relOne,
      relTwo,
    ]
  )

  t.is(rel.build(), '(a)-->(b)-->(c)<--(d)')
})

it('build a directed relationship between two relationships and a node', t => {
  const relOne = new Relation(
    [
      new Node('a'),
      new Node('b'),
    ],
  )
  const relTwo = new Relation(
    [
      new Node(),
      new Node('d'),
    ],
    Relation.Direction.Left,
  )
  const relThree = new Relation(
    [
      relOne,
      relTwo,
    ]
  )
  const rel = new Relation(
    [
      relThree,
      new Node('oof', [new Label('Winner')])
    ],
    Relation.Direction.Left,
  )

  t.is(rel.build(), '(a)-->(b)-->()<--(d)<--(oof:Winner)')
})

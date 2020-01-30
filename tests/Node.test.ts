import it from 'ava'
import {Node} from '../src/Node'
import {Label} from "../src/Label";
import {Dict} from '../src/Dict'
import {Prop} from '../src/Prop'

it('should build an empty Node', t => {
  const node = new Node()
  t.is(node.build(), '()')
})

it('should build an empty Node with an id', t => {
  const node = new Node('node')
  t.is(node.build(), '(node)')
})

it('should make a node with a label and id', t => {
  const node = new Node(
    'p',
    [
      new Label('Person')
    ]
  )

  t.is(node.build(), '(p:Person)')
})

it('should make a node with many labels and id', t => {
  const node = new Node(
    'p',
    [
      new Label('Person'),
      new Label('Swedish')
    ]
  )

  t.is(node.build(), '(p:Person:Swedish)')
})

it('should make a node with id, label and props', t => {
  const node = new Node(
    'p',
    [
      new Label('Person')
    ],
    new Dict([
      new Prop('name', 'Andy'),
      new Prop('title', 'Developer'),
    ])
  )

  t.is(node.build(), '(p:Person { name: "Andy", title: "Developer" })')
})

it('should make a node with id, labels and props', t => {
  const node = new Node(
    'p',
    [
      new Label('Person'),
      new Label('Developer')
    ],
    new Dict([
      new Prop('name', 'Andy'),
      new Prop('title', 'Developer'),
    ])
  )

  t.is(node.build(), '(p:Person:Developer { name: "Andy", title: "Developer" })')
})

it('should make a node with id and props', t => {
  const node = new Node(
    'p',
    [],
    new Dict([
      new Prop('name', 'Andy'),
      new Prop('title', 'Developer'),
    ])
  )

  t.is(node.build(), '(p { name: "Andy", title: "Developer" })')
})

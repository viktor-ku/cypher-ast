import it from 'ava'
import {Dict} from '../src/Dict'
import {Prop} from "../src/Prop";

it('should build an empty Dict', t => {
  const dict = new Dict()
  t.is(dict.size, 0)
  t.is(dict instanceof Map, true)
  t.is(dict.build(), '{}')
})

it('should build an actual object', t => {
  const dict = new Dict([
    new Prop('name', 'John'),
    new Prop('v', 1),
  ])

  t.is(dict.size, 2)
  t.is(dict.get('name'), 'John')
  t.is(dict.get('v'), 1)
  t.is(dict.build(), '{ name: "John", v: 1 }')
})

import it from 'ava'
import {Prop} from '../src/Prop'

it('should build a Prop', t => {
  const prop = new Prop('v', 1)
  t.is(prop.key, 'v')
  t.is(prop.value, 1)
  t.is(prop.build(), 'v: 1')
})

it('should build a valid Prop with escaped string', t => {
  const prop = new Prop('name', 'John')
  t.is(prop.key, 'name')
  t.is(prop.value, 'John')
  t.is(prop.build(), 'name: "John"')
})

it('should be able to compare the two: equals', t => {
  const a = new Prop('name', 'John')
  const b = a;
  t.is(a.equals(b), true)
})

it('should be able to compare the two: not eq', t => {
  const a = new Prop('name', 'John')
  const b = new Prop('v', 1)
  t.is(a.equals(b), false)
})

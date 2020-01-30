import it from 'ava'
import {Label} from '../src/Label'

it('should constrcut a Label', t => {
  const label = new Label('Item')
  t.is(label.name, 'Item')
  t.is(label.build(), ':Item')
})

it('should compare two labels: equal', t => {
  const a = new Label('Item')
  const b = new Label('Item')
  t.is(a.equals(b), true)
})

it('should compare two labels: not equal', t => {
  const a = new Label('Item')
  const b = new Label('Thing')
  t.is(a.equals(b), false)
})

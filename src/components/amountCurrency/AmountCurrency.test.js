import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import AmountCurrency from './AmountCurrency';

test('renders AmountCurrency component without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render( <AmountCurrency /> );
  renderer.render( <AmountCurrency /> );
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

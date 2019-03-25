import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import About from './About';

test('renders About component without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render( <About /> );
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

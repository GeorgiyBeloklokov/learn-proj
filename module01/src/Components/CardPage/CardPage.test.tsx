import React from 'react';
import { render, screen } from '@testing-library/react';
import CardPage from './CardPage';

const surName = 'looo';

const name = 'blabla';

test('renders learn react link', () => {
  render(<CardPage name={name} surName={surName} />);
  const element = screen.findAllByText(/props.image/i);
  expect(element).toBeTruthy();
});

test('renders component', () => {
  render(<CardPage name={name} surName={surName} />);
  const card = screen.getByTestId('card');
  expect(card).toBeDefined();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import MediaCardPage from './Card';

const image = 'https://www.russiadiscovery.ru/upload/files/files/Kavkazskie_gory.jpg';

const text =
  'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica';

test('renders learn react link', () => {
  render(<MediaCardPage image={image} text={text} />);
  const element = screen.findAllByText(/props.image/i);
  expect(element).toBeTruthy();
});

test('renders component', () => {
  render(<MediaCardPage image={image} text={text} />);
  const card = screen.getByTestId('card');
  expect(card).toBeDefined();
});

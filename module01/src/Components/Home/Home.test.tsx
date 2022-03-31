import { render, screen } from '@testing-library/react';
import HomePage from './Home';

test('test card items render', () => {
  render(<HomePage />);
  const cards = screen.getAllByTestId('card-num');
  expect(cards.length).toBe(12);
});

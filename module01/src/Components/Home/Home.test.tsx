import { render, screen } from '@testing-library/react';
import Home from './Home';

test('test card items render', () => {
  render(<Home />);
  const cards = screen.getAllByTestId('card-num');
  expect(cards.length).toBe(12);
});

import { render, screen } from '@testing-library/react';
import CardPage from './CardPage';

const surName = 'looo';

const name = 'blabla';

test('renders learn react link', () => {
  render(<CardPage />);
  const element = screen.findAllByText(/props.image/i);
  expect(element).toBeTruthy();
});

test('renders component', () => {
  render(<CardPage />);
  const card = screen.getByTestId('card');
  expect(card).toBeDefined();
});

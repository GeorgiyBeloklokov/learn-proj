import { render, screen } from '@testing-library/react';
import Error404 from './Error404';

test('renders component', () => {
  render(<Error404 />);
  const component = screen.getByTestId('error404-test');
  expect(component).toBeDefined();
});

test('renders learn react link', () => {
  render(<Error404 />);
  const element = screen.findAllByText(/Go Home/i);
  expect(element).toBeTruthy();
});

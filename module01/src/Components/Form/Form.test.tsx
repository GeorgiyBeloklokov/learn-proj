import { render, screen } from '@testing-library/react';
import Form from './Form';

test('renders component', () => {
  render(<Form />);
  const component = screen.getByTestId('form-test');
  expect(component).toBeDefined();
});

test('renders learn react link', () => {
  render(<Form />);
  const element = screen.findAllByText(/Your Name../i);
  expect(element).toBeTruthy();
});

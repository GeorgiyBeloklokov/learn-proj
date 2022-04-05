import { render, screen } from '@testing-library/react';
import Form from './Form';

test('renders component', () => {
  render(<Form />);
  const component = screen.getByTestId('form-test');
  expect(component).toBeDefined();
});

test('renders learn react link', () => {
  render(<Form />);
  const element = screen.getByLabelText(/Date input/i);
  const buttonSubmit = screen.getByText('Submit form data');
  const inputName = screen.getByPlaceholderText(/Your Name../i);
  const inputSurName = screen.getByPlaceholderText(/Your Surname../i);
  expect(buttonSubmit).toBeInTheDocument();
  expect(inputName).toMatchSnapshot();
  expect(inputSurName).toMatchSnapshot();
  expect(element).toBeInTheDocument();
});

import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

test('rendering component', () => {
  render(<Form />);
  const component = screen.getByTestId('form-test');
  expect(component).toBeDefined();
});

test('testing inputs', () => {
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

test('testing button submit form', () => {
  const { getByPlaceholderText } = render(<Form />);
  expect(screen.queryByTestId('button-submit-form')).toBeDisabled();
  const nameInput = getByPlaceholderText('Your Name..') as HTMLInputElement;
  fireEvent.change(nameInput, { target: { value: 'test' } });
  expect(nameInput.value).toBe('test');
  const surNameInput = getByPlaceholderText('Your Surname..') as HTMLInputElement;
  fireEvent.change(surNameInput, { target: { value: 'test2' } });
  expect(surNameInput.value).toBe('test2');
  expect(screen.queryByTestId('button-submit-form')).toBeEnabled();
});

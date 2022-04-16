import { render, screen } from '@testing-library/react';
import Form from './Form';

test('renders component', () => {
  render(
    <Form
      id={0}
      firstName={''}
      surname={''}
      muiDatePicker={''}
      country={''}
      agreeCheckBox={false}
      giftFirst={false}
      giftSecond={false}
      giftThird={false}
      maleFemale={false}
      promotionNotification={false}
      image={null}
    />
  );
  const component = screen.getByTestId('form-test');
  expect(component).toBeDefined();
});

test('renders learn react link', () => {
  render(
    <Form
      id={0}
      firstName={''}
      surname={''}
      muiDatePicker={''}
      country={''}
      agreeCheckBox={false}
      giftFirst={false}
      giftSecond={false}
      giftThird={false}
      maleFemale={false}
      promotionNotification={false}
      image={null}
    />
  );
  const element = screen.getByLabelText(/Date input/i);
  const buttonSubmit = screen.getByText('Submit form data');
  const inputName = screen.getByPlaceholderText(/Your Name../i);
  const inputSurName = screen.getByPlaceholderText(/Your Surname../i);
  expect(buttonSubmit).toBeInTheDocument();
  expect(inputName).toMatchSnapshot();
  expect(inputSurName).toMatchSnapshot();
  expect(element).toBeInTheDocument();
});

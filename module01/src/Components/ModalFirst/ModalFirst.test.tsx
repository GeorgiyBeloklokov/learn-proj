import { render, screen } from '@testing-library/react';
import ModalFirst from './ModalFirst';

test('renders component', () => {
  render(
    <ModalFirst
      id={0}
      name={''}
      status={''}
      species={''}
      type={''}
      gender={''}
      origin={{
        name: '',
        url: '',
      }}
      location={{
        name: '',
        url: '',
      }}
      image={''}
      url={''}
      created={''}
      setState={function (): void {
        ('Function not implemented.');
      }}
      open={false}
    />
  );
  const component = screen.findByTestId('modal-first');
  expect(component).toBeTruthy();
});

test('renders learn react link', () => {
  render(
    <ModalFirst
      id={0}
      name={''}
      status={''}
      species={''}
      type={''}
      gender={''}
      origin={{
        name: '',
        url: '',
      }}
      location={{
        name: '',
        url: '',
      }}
      image={''}
      url={''}
      created={''}
      setState={function (): void {
        ('Function not implemented.');
      }}
      open={false}
    />
  );
  const element = screen.findAllByText(/Location Name:/i);
  expect(element).toBeTruthy();
});

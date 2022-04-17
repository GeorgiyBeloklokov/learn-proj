import { render, screen } from '@testing-library/react';
import CardPage from './CardPage';

test('renders learn react link', () => {
  render(
    <CardPage
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
    />
  );
  const element = screen.findAllByText(/props.image/i);
  expect(element).toBeTruthy();
});

test('renders component', () => {
  render(
    <CardPage
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
    />
  );
  const card = screen.getByTestId('card');
  expect(card).toBeDefined();
});

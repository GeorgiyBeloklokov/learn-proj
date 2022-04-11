import { fireEvent, getByTestId, render } from '@testing-library/react';
import Header from './Header';

it(' render correctly', () => {
  const { getByTestId, getByPlaceholderText } = render(
    <Header
      setState={function (): void {
        ('Function not implemented.');
      }}
    />
  );

  expect(getByTestId('search')).toBeTruthy();
  expect(getByPlaceholderText('Search…')).toBeTruthy();
});

describe('input value', () => {
  it('update on change', () => {
    const { getByPlaceholderText } = render(
      <Header
        setState={function (): void {
          ('Function not implemented.');
        }}
      />
    );
    const searchInput = getByPlaceholderText('Search…') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');
  });
});

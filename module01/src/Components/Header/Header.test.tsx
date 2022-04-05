import { fireEvent, render } from '@testing-library/react';
import Header from './Header';

it(' render correctly', () => {
  const { queryByTestId, getByPlaceholderText } = render(<Header />);

  expect(queryByTestId('search')).toBeTruthy();
  expect(getByPlaceholderText('Search…')).toBeTruthy();
});

describe('input value', () => {
  it('update on change', () => {
    const { getByPlaceholderText } = render(<Header />);
    const searchInput = getByPlaceholderText('Search…') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');
  });
});

import React from 'react';
import { fireEvent, getByPlaceholderText, render } from '@testing-library/react';
import SearchAppBar from './Header';

it(' render correctly', () => {
  const { queryByTestId, getByPlaceholderText } = render(<SearchAppBar />);

  expect(queryByTestId('search')).toBeTruthy();
  expect(getByPlaceholderText('Search…')).toBeTruthy();
});

describe('input value', () => {
  it('update on change', () => {
    const { getByPlaceholderText } = render(<SearchAppBar />);
    const searchInput = getByPlaceholderText('Search…') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');
  });
});

import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

it(' render correctly', () => {
  const { getByTestId, getByPlaceholderText } = render(
    <MemoryRouter>
      <Header
        setState={function (): void {
          ('Function not implemented.');
        }}
      />
    </MemoryRouter>
  );

  expect(getByTestId('search')).toBeTruthy();
  expect(getByPlaceholderText('Search…')).toBeTruthy();
});

describe('input value', () => {
  it('update on change', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Header
          setState={function (): void {
            ('Function not implemented.');
          }}
        />
      </MemoryRouter>
    );
    const searchInput = getByPlaceholderText('Search…') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');
  });
});

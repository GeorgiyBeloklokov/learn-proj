import { render, screen } from '@testing-library/react';
import Home from './Home';
// check if an array contains all objects
test('test card items render', async () => {
  render(
    <Home
      setState={function (): void {
        ('Function not implemented.');
      }}
      searchInputData={true}
    />
  );
  const cards = await screen.findAllByTestId('card-num');
  expect(cards.length).toBe(5);
});

import { render, screen } from '@testing-library/react';
import Home from './Home';
import axios from 'axios';

jest.mock('axios');

describe('character test', () => {
  let response: { data: { id: number; name: string }[] };
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
        },
        {
          id: 2,
          name: 'Ervin Howell',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
        },
      ],
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders learn react link', async () => {
    axios.get.mockReturnValue(response);
    render(
      <Home
        setState={function (): void {
          ('Function not implemented.');
        }}
        isSearchInputData={true}
      />
    );

    const card = await screen.findAllByTestId('card-home');
    expect(card.length).toBe(1);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug();
  });
});

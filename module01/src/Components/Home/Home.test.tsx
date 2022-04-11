import { render, screen } from '@testing-library/react';
import Home from './Home';
import axios from 'axios';

describe('character test', () => {
  let response: {
    data: {
      id: number;
      name: string;
      image: string;
      status: string;
      species: string;
      type: string;
      gender: string;
      origin: { name: string; url: string };
      location: { name: string; url: string };
      url: string;
      created: string;
    }[];
  };
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'axios',
          image:
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fxn----8sbiecm6bhdx8i.xn--p1ai%2F%25D0%25B3%25D0%25BE%25D1%2580%25D1%258B.html&psig=AOvVaw29BLbK_9fCU-OjbXCeiVbu&ust=1649710189119000&source=images&cd=vfe&ved=2ahUKEwi3ytq_r4r3AhVRwCoKHQ04DZ0QjRx6BAgAEAk',
          status: 'Iron man',
          species: 'Man',
          type: 'human',
          gender: 'female',
          origin: { name: 'Jhon', url: 'blabla' },
          location: { name: 'France', url: 'nonono' },
          url: 'blabla',
          created: '49-21-2321',
        },
      ],
    };
  });

  test('api test', async () => {
    axios.get.mockReturnValue(response);
    render(
      <Home
        setState={function (): void {
          ('Function not implemented.');
        }}
        isSearchInputData={true}
      />
    );
    const card = await screen.findAllByTestId('card');
    expect(card.length).toBe(1);
    expect(axios.get).toBeCalledTimes(2);
    screen.debug();
  });
});

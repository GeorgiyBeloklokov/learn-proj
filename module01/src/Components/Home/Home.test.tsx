import { render, screen } from '@testing-library/react';
import Home from './Home';
import axios from 'axios';

describe('character testing get and numbers of items', () => {
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
          origin: { name: 'John', url: 'blabla' },
          location: { name: 'France', url: 'nonono' },
          url: 'blabla',
          created: '49-21-2321',
        },
        {
          id: 2,
          name: 'axios',
          image:
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fxn----8sbiecm6bhdx8i.xn--p1ai%2F%25D0%25B3%25D0%25BE%25D1%2580%25D1%258B.html&psig=AOvVaw29BLbK_9fCU-OjbXCeiVbu&ust=1649710189119000&source=images&cd=vfe&ved=2ahUKEwi3ytq_r4r3AhVRwCoKHQ04DZ0QjRx6BAgAEAk',
          status: 'Iron man',
          species: 'Man',
          type: 'human',
          gender: 'female',
          origin: { name: 'John', url: 'blabla' },
          location: { name: 'France', url: 'nonono' },
          url: 'blabla',
          created: '49-21-2321',
        },
      ],
    };
  });

  test('api test', async () => {
    (axios.get as jest.Mock).mockReturnValue(response);
    render(
      <Home
        setIsSearchInputData={function (): void {
          ('Function not implemented.');
        }}
        isSearchInputData={false}
      />
    );
    const card = await screen.findAllByTestId('card-home');
    expect(card.length).toBe(2);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug();
  });
});

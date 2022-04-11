import { render, screen } from '@testing-library/react';
import Home from './Home';
import axios from 'axios';

jest.mock('axios');
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
    const card = await screen.findByTestId('cardNum');
    expect(card).toBe(1);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug();
  });
});

test('test card items render', async () => {
  render(
    <Home
      setState={function (): void {
        ('Function not implemented.');
      }}
      isSearchInputData={true}
    />
  );
  const cards = await screen.findAllByText('Some error ocurred');
  expect(cards.length).toBe(1);
});

/* jest.mock('axios');
const cards = [
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
];

describe('Home', () => {
  it('fetches news from an API', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { cards } }));
    render(
      <Home
        setState={function (): void {
          ('Function not implemented.');
        }}
        isSearchInputData={true}
      />
    );
    /* userEvent.click(screen.getByRole('button')); */
/* const items = await screen.findAllByTestId('cardNum');
    expect(items).toHaveLength(1);
    // Additional
    expect(axios.get).toHaveBeenCalledTimes(1);
    /* expect(axios.get).toHaveBeenCalledWith('http://hn.algolia.com/api/v1/search?query=React'); 
  });
  /* it('fetches news from an API and reject', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
    render(<App />);
    userEvent.click(screen.getByRole('button'));
    const message = await screen.findByText(/Something went wrong/);
    expect(message).toBeInTheDocument();
  });

  it('fetches news from an API (alternative)', async () => {
    const promise = Promise.resolve({ data: { hits } });
    axios.get.mockImplementationOnce(() => promise);
    render(<App />);
    userEvent.click(screen.getByRole('button'));
    await act(() => promise);
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  }); 
});
 */

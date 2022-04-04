interface Provider {
  id: number;
  surName: string;
  image: string;
  name: string;
}

export const mockCardDB: Array<Provider> = [
  {
    id: 1,
    surName:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    image: 'https://www.russiadiscovery.ru/upload/files/files/Kavkazskie_gory.jpg',
    name: 'antoni',
  },
];

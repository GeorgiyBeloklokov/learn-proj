interface Provider {
  id: number;
  newName: string;
  image: string;
  newSurName: string;
}

export const mockCardDB: Array<Provider> = [
  {
    id: 1,
    newSurName:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    image: 'https://www.russiadiscovery.ru/upload/files/files/Kavkazskie_gory.jpg',
    newName: 'antoni',
  },
];

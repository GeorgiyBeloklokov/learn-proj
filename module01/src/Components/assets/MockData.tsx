interface Provider {
  id: number;
  newName: string;
  image: string;
  newSurName: string;
}

export const mockCardDB: Array<Provider> = [
  {
    id: 1,
    newSurName: 'Lizards are ',
    image: 'https://www.russiadiscovery.ru/upload/files/files/Kavkazskie_gory.jpg',
    newName: 'Antony',
  },
];

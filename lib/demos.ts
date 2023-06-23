export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Cryptos',
    items: [
      {
        name: 'BTCUSD',
        slug: 'bitcoin',
        description:
          'Create meaningful Loading UI for specific parts of an app',
      },
      {
        name: 'ETHUSD',
        slug: 'ethereum',
        description: 'Create Error UI for specific parts of an app',
      },
    ],
  },
];

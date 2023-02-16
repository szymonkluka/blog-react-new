const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      author: 'Alicja Janis',
      publishedDate: new Date('02-07-2022'),
      category: 'Sport',
      description: 'new article 1',
      mainContent: 'Main content of the article1',
    },
    {
      id: '2',
      title: 'Article title2',
      author: 'Marika Dziebla',
      publishedDate: new Date('02-07-2022'),
      category: 'Movies',
      description: 'new article 2',
      mainContent: 'Main content of the article2',
    },
    {
      id: '3',
      title: 'Article title3',
      author: 'Maria Kozłowska',
      publishedDate: new Date('02-07-2022'),
      category: 'Travel',
      description: 'new article 3',
      mainContent: 'Main content of the article3',
    },

  ],

  categories: [
    'Sport', 'Movies', 'Travel',
  ],

};

export default initialState;
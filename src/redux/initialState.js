const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      author: 'Alicja Janis',
      publishedDate: new Date('02-07-2022'),
      category: 'sport',
      description: 'new article 1',
      mainContent: 'Main content of the article1',
    },
    {
      id: '2',
      title: 'Article title2',
      author: 'Marika Dziebla',
      publishedDate: new Date('02-07-2022'),
      category: 'movies',
      description: 'new article 2',
      mainContent: 'Main content of the article2',
    },
    {
      id: '3',
      title: 'Article title3',
      author: 'Maria Kozłowska',
      publishedDate: new Date('02-07-2022'),
      category: 'travel',
      description: 'new article 3',
      mainContent: 'Main content of the article3',
    }
  ],


};

export default initialState;
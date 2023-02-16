export const getAllCategories = ({ categories }) => categories;
export const getPostsByCategory = ({ posts }, category) => posts.filter(post => post.category === category);
export const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default: return statePart;
  }
};


export const getFilteredCards = ({ cards }, columnId) => cards.filter(card => card.columnId === columnId);

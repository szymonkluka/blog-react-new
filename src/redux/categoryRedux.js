export const getAllCategories = ({ categories }) => categories;
export const getCategoryByPost = ({ posts }, category) => posts.filter(post => post.category === category);
export const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default: return statePart;
  }
};

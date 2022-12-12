const initialState = {
  favorites: [],
  movies: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      const movie = state.movies.find((item) => item.id === action.payload.id);
      let favorites = [...state.favorites, movie];

      return {
        ...state,
        favorites,
      };
    case "DELETE_FROM_FAVORITES":
    case "FIND_MOVIE":
      const movies = [...action.payload.movies]
        return {
          ...state,
          movies
        };
    default:
      return state;
  }
}


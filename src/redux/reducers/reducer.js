const initialState = {
  title: "",
  listID: "",
  favs: [],
  movies: [],
  movieDetails: [],
  listMovies: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      const newState = { ...state };
            const id = action.payload.id;
            const match = newState.movies.find((item) => item.imdbID === id);
            if (match) {
                newState.favs = [...newState.favs, { ...match }];
            }
            return newState;
    case "DELETE_FROM_FAVORITES":
    case "FIND_MOVIE":
      return {
        ...state,
        movies: action.payload.movies,
    };
    default:
      return state;
  }
}


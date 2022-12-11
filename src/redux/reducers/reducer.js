const initialState = {
  favorites: [],
  movies: []
};
let moviez = []
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
      fetch(`http://www.omdbapi.com/?s=${action.payload.id}&apikey=28f6807c`)
        .then(res => { return res.json() })
        .then((data) => {
        //   moviez = [{
        //     title: data.Search[0].Title,
        //     imdbID: data.Search[0].imdbID,
        //     year: data.Search[0].Year,
        //     poster: data.Search[0].Poster
        //   },
        //   {
        //     title: data.Search[1].Title,
        //     imdbID: data.Search[1].imdbID,
        //     year: data.Search[1].Year,
        //     poster: data.Search[1].Poster
        //   }]
        console.log(data)
        })
      return state.movies = [...state,moviez];
    default:
      return state;
  }
}


export function addToFavorites(id) {
    return {
      type: "ADD_TO_FAVORITES",
      payload: {
        id: id,
      },
    };
  }

export function deleteFromFavorites(id){
    return {
        type: "DELETE_FROM_FAVORITES",
        payload: {
            id:id,
        }
    }
}

export default function findMyMovie(data){
  return {
      type: "FIND_MOVIE",
      payload: {
        movies: data,
    }
      
      
  }
}
export function findMovie(name){
  fetch(`http://www.omdbapi.com/?s=${name}&apikey=28f6807c`)
        .then(res => { return res.json() })
        .then((data) => {
        // console.log(data.Search)
       
        return findMyMovie(data.Search)
     
        })
}
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
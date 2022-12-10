import React, { Component } from 'react';
import './Favorites.css';


class Favorites extends Component {
    state = {
        title: 'Новый список',
        movies: [
            { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
        ]
    }
    render() {
        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.state.movies.map((item) => {
                        return (
                        <div className="fav-item">
                            <li key={item.id}>{item.title} ({item.year})</li>
                            <button className="deleteItem">X</button>
                        </div>
                        );
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}

export default Favorites;
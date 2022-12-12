import React, { Component } from 'react';
import './Favorites.css';
import { connect } from "react-redux";
import store from "../../redux/reducers/store";
import { deleteFromFavorites } from '../../redux/actions/action';

class Favorites extends Component {
    // state = {
    //     title: 'Новый список',
    //     movies: [
    //         { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
    //     ]
    // }

    render() {
        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.props.favorites.map((item) => {
                        return (
                            <div className="fav-item" key={item.id}>
                                <li>{item.title} ({item.year})</li>
                                <button onClick={this.props.deleteFromFavorites(item.id)} className="deleteItem">X</button>
                            </div>
                        );
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites,
    };
};


const mapDispatchToProps = dispatch => ({
    deleteFromFavorites: (id) => dispatch(deleteFromFavorites(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
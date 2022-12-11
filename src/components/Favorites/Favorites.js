import React, { Component } from 'react';
import './Favorites.css';
import { connect } from "react-redux";
import store from "../../redux/reducers/store"; 
  

class Favorites extends Component {
    // state = {
    //     title: 'Новый список',
    //     movies: [
    //         { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
    //     ]
    // }

    componentDidMount(){
        store.subscribe(()=>{
        if(store.getState().favorites.length !== 0) this.setState({movies: store.getState().favorites})
        }) }

    render() {
        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.props.favorites.map((item) => {
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

const mapStateToProps = (state) => {
    return {
      favorites: state.favorites,
    };
  };


  export default connect(mapStateToProps)(Favorites);
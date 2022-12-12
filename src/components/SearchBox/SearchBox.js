import React, { Component } from 'react';
import './SearchBox.css';
import { connect } from 'react-redux';
import findMovie from '../../redux/actions/action';

class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }

    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        console.log('aaaaa',this.state.searchLine)
        this.props.findMovie(this.state.searchLine)
    }

    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <div className="search-box__form" >
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="button"
                        onClick={this.searchBoxSubmitHandler}
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Искать
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
};
const mapDispatchToProps = dispatch => ({
    findMovie: (name) => dispatch(findMovie(name))
});



export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
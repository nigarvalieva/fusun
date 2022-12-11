import React, { Component } from 'react';
import './SearchBox.css';
import { connect } from 'react-redux';
import reducer from '../../redux/reducers/reducer';
import store from '../../redux/reducers/store';

class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
        store.dispatch(reducer(this.state.searchLine));
    }

    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }

    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
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
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}
 
const mapDispatchToProps = dispatch => ({
    reducer: (id) => dispatch(reducer(id))
  });
  const mapStateToProps = (state) => {
    return {
        goods: state.goods
    }
  };
  export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
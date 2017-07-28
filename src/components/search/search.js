import React, { Component } from 'react';
import Styles from './search.css';

class Search extends Component {
    render () {
        return (
            <div className={Styles.container}>
                <label>Search</label>
                <input type="text" />
            </div>
        )
    }
}

export default Search;
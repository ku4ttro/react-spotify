import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
    constructor (props) {
        super(props);
        this.state = {video: []};
    }

    componentWillMount() {
        const accessToken = `access_token=BQCrnfGLQBn7eY2Gs_6HNS2iFjZcMIhiPQQ9RUWXaDCmHh5_LqwSyibeC6h7H8CDDE9A6rFHmrzY8I3VZb7nsA`;
        const id = '51Blml2LZPmy7TTiAg47vQ';
        const endpoint = `https://api.spotify.com/v1/artists/${id}?${accessToken}`;

        axios.get(endpoint)
            .then(function(response) {
                this.setState({ video: response.data.images[0].url })   
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }


    render () {
        return (
            <div>
                <img src={this.state.video} alt='cenas' />
            </div>
        )
    }
}

export default List;
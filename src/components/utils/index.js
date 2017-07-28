import axios from 'axios';

const accessToken = `access_token=BQCrnfGLQBn7eY2Gs_6HNS2iFjZcMIhiPQQ9RUWXaDCmHh5_LqwSyibeC6h7H8CDDE9A6rFHmrzY8I3VZb7nsA`;
const id = '51Blml2LZPmy7TTiAg47vQ';
const endpoint = `https://api.spotify.com/v1/artists/${id}?${accessToken}`;

var helpers = {
    getArtistAlbuns: function () {
        return axios.get(endpoint)
            .then(function(response) {
                return {
                    image: response.data.images[0].url
                }    
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}

export default helpers
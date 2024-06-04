import axios from 'axios';

const authApi = axios.create({ //? asi ya se pueden hacer peticiones http
    baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
    params: {
        key: 'AIzaSyBSxbxvq2ogV15cprpmyFwxMwc9g6RQBeA'
    }
})

export default authApi;
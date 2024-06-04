import axios from 'axios';

const journalApi = axios.create({ //? asi ya se pueden hacer peticiones http
    baseURL: "https://vue-demos-e6253-default-rtdb.firebaseio.com"
})

journalApi.interceptors.request.use( (config) => { //? Validaciones para firebase

    config.params = {
        auth: localStorage.getItem('idToken')
    }

    return config

})

export default journalApi;
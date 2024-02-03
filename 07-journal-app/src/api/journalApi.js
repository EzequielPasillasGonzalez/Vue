import axios from 'axios';

const journalApi = axios.create({ //? asi ya se pueden hacer peticiones http
    baseURL: "https://vue-demos-e6253-default-rtdb.firebaseio.com"
})

export default journalApi;
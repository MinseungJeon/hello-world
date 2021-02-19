import axios from 'axios';

const instance = axios.create({
    baseURL: "https://vue-update-14f20-default-rtdb.firebaseio.com"
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
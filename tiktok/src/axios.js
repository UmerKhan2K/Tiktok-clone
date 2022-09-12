import axios from 'axios'

const instance=axios.create({
    baseURL:"https://tiktok-mern-backend-umer.herokuapp.com/",
});
export default instance;

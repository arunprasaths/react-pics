import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 2c0bc44e51aa176f229dab9680d6042219e9d13ec36c410a2fead0885e3da0d1'
    }
});

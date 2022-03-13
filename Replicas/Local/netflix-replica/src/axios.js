import axios from 'axios';
import request from './requests'

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3/' 
})
// instance.get(baseURL)

export default instance;
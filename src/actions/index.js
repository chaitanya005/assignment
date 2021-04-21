import { FETCH_IMAGES } from './types'
import axios from 'axios'


export function fetchImages(searchTerm) {
    let res = axios.get(`https://api.unsplash.com/search/photos?client_id=&query=${searchTerm}`)

    return {
        type: FETCH_IMAGES,
        payload: res
    }
}
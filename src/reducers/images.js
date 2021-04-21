import { FETCH_IMAGES } from '../actions/types'

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_IMAGES:
            const images = action.payload.data.results.map((url => url.urls.small))
            return [...images]
        default:
            return state
    }
}
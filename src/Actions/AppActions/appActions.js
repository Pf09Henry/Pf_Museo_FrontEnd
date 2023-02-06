import axios from "axios"


export function filterEventByPrice(payload) {
    return {
        type: 'FILTER_EVENT_BY_PRICE',
        payload
    }
}

export function filterEventByCategory(payload) {
    return {
        type: 'FILTER_EVENT_BY_CATEGORY',
        payload
    }
}


export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function postEvent(payload) {
    return async function (dispatch) {
        const response = await axios.post('http://localhost:3001/event/post', payload)
        console.log(response)
        return {
            type: 'POST_EVENT',
            response
        }
    }
}




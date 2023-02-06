import axios from "axios"


//ACA SUCEDE LA MAGIA, HACE UN GET AL DEPLOY DEL BACK EN DONDE LE PASO LA RUTA A LA QUE TIENE QUE LLAMAR PARA TRAERME LOS EVENTOS.
export function getEvents() {
    return async function(dispatch) {
        var json = await axios.get('https://pfmuseobackend.up.railway.app/events');
        console.log(json.data)
        return dispatch({
            type: 'GET_EVENTS',
            payload: json.data
        })
    }
}

export function getCategories() {
    return async function(dispatch) {
        var json = await axios.get('https://pfmuseobackend.up.railway.app/category');
        console.log(json.data)
        return dispatch({
            type: 'ET_CATEGORIES',
            payload: json.data
        })
    }
}


export function getGuides() {
    return async function(dispatch) {
        var json = await axios.get('https://pfmuseobackend.up.railway.app/guides');
        console.log(json.data)
        return dispatch({
            type: 'GET_GUIDES',
            payload: json.data
        })
    }
}




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
        const response = await axios.post('https://pfmuseobackend.up.railway.app/event/post', payload)
        console.log(response)
        return {
            type: 'POST_EVENT',
            response
        }
    }
}









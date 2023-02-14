import axios from "axios"


//ACA SUCEDE LA MAGIA, HACE UN GET AL DEPLOY DEL BACK EN DONDE LE PASO LA RUTA A LA QUE TIENE QUE LLAMAR PARA TRAERME LOS EVENTOS.
export function getEvents() {
    return async function (dispatch) {
        var json = await axios.get('https://pfmuseobackend.up.railway.app/events');
        console.log(json.data)
        return dispatch({
            type: 'GET_EVENTS',
            payload: json.data
        })
    }
}


export function getEventsName(name) {
    return async function (dispatch) {
        if (name) {
            let response = await axios.get('https://pfmuseobackend.up.railway.app/events');
            console.log(response.data)
            let events = response.data;
            let filteredEvents = events.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
            return dispatch({
                type: 'GET_EVENTS',
                payload: filteredEvents
            })
        }
    }
}

// export function getEventsName(id) {
//     return async function (dispatch) {
//         var json = await axios.get(`https://pfmuseobackend.up.railway.app/event/${id.toLowerCase()}`);
//         console.log(json.data)
//         return dispatch({
//             type: 'GET_EVENTS',
//             payload: json.data
//         })
//     }
// }

export function getCategories() {
    return async function (dispatch) {
        var json = await axios.get('https://pfmuseobackend.up.railway.app/category');
        console.log(json.data)
        return dispatch({
            type: 'GET_CATEGORIES',
            payload: json.data
        })
    }
}


export function getGuides() {
    return async function (dispatch) {
        var json = await axios.get('https://pfmuseobackend.up.railway.app/guides');
        console.log(json.data)
        return dispatch({
            type: 'GET_GUIDES',
            payload: json.data
        })
    }
}


export function filterEventByCategory(payload) {
    return {
        type: 'FILTER_EVENT_BY_CATEGORY',
        payload
    }
}

export function filterEventByPrice(payload) {
    return {
        type: 'FILTER_EVENT_BY_PRICE',
        payload
    }
}

export function orderByName(order) {
    return {
        type: 'ORDER_BY_NAME',
        payload: order
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

export function getEventsById(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`https://pfmuseobackend.up.railway.app/event/${id}`);
            return dispatch({
                type: 'GET_EVENT_DETAILS',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }

}









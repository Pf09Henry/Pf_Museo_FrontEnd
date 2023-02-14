const initialState = {
    details: [
        {
            "id": "084ac36b-1236-4d6e-b17e-2c68e9862191",
            "name": "Taller de máscaras, coplas y danza",
            "startDay": "5/11/2022",
            "endDay": "20/11/2022",
            "price": 600,
            "img": "https://www.cultura.gob.ar/media/uploads/1_1.jpeg",
            "status": null,
            "information": "Talleres de arte al aire libre para jugar, crear y divertirse junto al equipo educativo del Museo Nacional Terry.  Actividad a cargo de Virginia Chialvo, Martín Esquivel Viveros y Sinty Cruz Machaca",
            "guide": [
                {
                    "name": "Claudio",
                    "image": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
            ],
            "category": [
                {
                    "name": "Arte"
                }
            ]
        }
    ],
    eventos: [],
    alleventos: [],
    categorias: [],
    guias: [],


}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_EVENTS':
            return {
                ...state,
                eventos: action.payload, // cuando se dispara la accion, me va a llenar los dos estados
                alleventos: action.payload
            }

        case 'GET_CATEGORIES':
            return {
                ...state,
                categorias: action.payload

            }


        case 'GET_EVENT_DETAILS':
            return {
                ...state,
                details: action.payload
            }



        case 'GET_GUIDES':
            return {
                ...state,
                guias: action.payload

            }

        case 'FILTER_EVENT_BY_CATEGORY':
            const alleventos = state.alleventos;
            const statusFiltered = action.payload === 'All' ? alleventos : alleventos.filter(el => el.category[0].name === action.payload)
            return {
                ...state,
                eventos: statusFiltered,
            }

        case 'POST_EVENT':
            return {
                ...state,
                eventos: action.payload
            }

        case 'ORDER_BY_NAME':

            const sortedArr = action.payload === 'asc' ?
                [...state.eventos].sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                }) :
                [...state.eventos].sort((a, b) => {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                });
            return {
                ...state,
                eventos: sortedArr
            }

        case 'FILTER_EVENT_BY_PRICE':
            const filterPrice = action.payload === 'ascprec' ?
                state.eventos.sort(function (a, b) {
                    if (a.price < b.price) {
                        return 1;
                    }
                    if (b.price < a.price) {
                        return -1;
                    }
                    return 0;
                }) :
                state.eventos.sort(function (a, b) {
                    if (a.price < b.price) {
                        return -1;
                    }
                    if (b.price < a.price) {
                        return 1;
                    }
                    return 0;
                });
            return {
                ...state,
                eventos: filterPrice
            }


        default: return state;

    }
};

export default rootReducer;
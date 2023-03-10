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
    users: [],
    usersAll: [],
    cart: [],
    mail: [],
    guidesDetail: [],
    review: [],
    tickets: [],
    ticketsDetail: [],
    role: [],
    subscriptions: [],
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

        case "GET_SUBSCRIPTION":
            return {
                ...state,
                subscriptions: action.payload
            }

        case 'GET_ROLE':
            return {
                ...state,
                role: action.payload

            }

        case 'GET_TICKETS':
            return {
                ...state,
                tickets: action.payload

            }


        case 'GET_EVENT_DETAILS':
            return {
                ...state,
                details: action.payload
            }

        case 'GET_TICKET_DETAILS':
            return {
                ...state,
                ticketsDetail: action.payload
            }

        case 'GET_GUIDES_DETAILS':
            return {
                ...state,
                guidesDetail: action.payload
            }

        case 'GET_GUIDES':
            return {
                ...state,
                guias: action.payload

            }

        case 'GET_REVIEWS':
            return {
                ...state,
                review: action.payload

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

        case "POST_SUBSCRIPTION":
            return {
                ...state,
                subscriptions: action.payload
            }


        case 'POST_REVIEW':
            return {
                ...state,
                review: action.payload
            }

        case 'POST_CATEGORY':
            return {
                ...state,
                categorias: action.payload
            }

        case 'POST_GUIDE':
            return {
                ...state,
                guias: action.payload
            }

        case 'POST_USER':
            return {
                ...state,
                users: action.payload
            }

        case 'POST_EMAIL':
            return {
                ...state,
                mail: action.payload
            }

        case 'POST_TICKETS':
            return {
                ...state,
                tickets: action.payload
            }


        case 'DELETE_EVENT':
            const alleventosdelete = state.alleventos;
            const statusFilteredelete = alleventosdelete.filter(el => el.id !== action.payload)
            return {
                ...state,
                eventos: statusFilteredelete
            }

        case 'DELETE_REVIEW':
            const allReviewdelete = state.review;
            const statusFilterdelete = allReviewdelete.filter(el => el.id !== action.payload)
            return {
                ...state,
                review: statusFilterdelete
            }

        case 'DELETE_GUIDE':
            const allguidesdelete = state.guias;
            const statusFilteredeleteguide = allguidesdelete.filter(el => el.id !== action.payload)
            return {
                ...state,
                guias: statusFilteredeleteguide
            }


        case 'DELETE_USERS':
            const allusersdelete = state.users;
            const statusFilteredeleteusers = allusersdelete.filter(el => el.id !== action.payload)
            return {
                ...state,
                users: statusFilteredeleteusers
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
            const filterPrice = action.payload === 'max' ?
                [...state.eventos].sort(function (a, b) {
                    if (a.price < b.price) {
                        return 1;
                    }
                    if (b.price < a.price) {
                        return -1;
                    }
                    return 0;
                }) :
                [...state.eventos].sort(function (a, b) {
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
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload
            };
        case 'GET_USERS_ALL':
            return {
                ...state,
                usersAll: action.payload
            };

        case 'ADD_TO_CART':
            const carritoLocalStorage = localStorage.getItem('CART_V1')
            let carritoCopy = JSON.parse(carritoLocalStorage).concat(action.payload)
            const stringifyProduct = JSON.stringify(carritoCopy);
            localStorage.setItem('CART_V1', stringifyProduct)
            return {
                ...state,
                cart: carritoCopy
            }

        case 'REMOVE_TO_CART':
            const posicionCarrito = state.cart.findIndex(pr => pr === action.payload)
            const productos = [...state.cart]
            productos.splice(posicionCarrito, 1);

            return {
                ...state,
                cart: productos
            }
        default: return state;

    }
};

export default rootReducer;

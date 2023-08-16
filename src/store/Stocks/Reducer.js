import { FETCH_STOCKS_FAILURE, FETCH_STOCKS_REQUEST, FETCH_STOCKS_SUCCESS, SET_CURRENT_PAGE_NEXT, SET_CURRENT_PAGE_PERV } from "./ActionType"

const initialState = {
    loading: true,
    data: [],
    error: '',
    currentPage: 1
}

export const ReducerFetch = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STOCKS_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FETCH_STOCKS_SUCCESS: 
             return {
                loading: false,
                data: action.payload,
                error: ''
             }
        case FETCH_STOCKS_FAILURE: 
             return {
                loading: false,
                data: [],
                error: action.payload
             }
        default:
             return state
    }
}


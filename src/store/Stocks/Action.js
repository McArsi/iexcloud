import axios from "axios";
import { FETCH_STOCKS_FAILURE, FETCH_STOCKS_REQUEST, FETCH_STOCKS_SUCCESS } from "./ActionType"
import { API, token } from "../API";

const fetchStocksRequest = () => {
    return {
        type: FETCH_STOCKS_REQUEST
    }
};

const fetchStocksSuccess = (data) => {
    return {
        type: FETCH_STOCKS_SUCCESS,
        payload: data
    }
};

const fetchStocksFailure = (error) => {
    return {
        type: FETCH_STOCKS_FAILURE,
        payload: error
    }
}

export const fetchStocks = () => {
    return (dispatch)=> {
        dispatch(fetchStocksRequest);
        axios.get(API+token)
            .then(res => {
                let data = res.data;
                dispatch(fetchStocksSuccess(data));
            })
            .catch (err => {
                dispatch(fetchStocksFailure(err.message))
            })
    }
}



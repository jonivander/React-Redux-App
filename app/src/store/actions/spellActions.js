import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const fetchSpells = () => (dispatch) => {
    dispatch({
        type: FETCH_START })

    axios.get('https://potterapi.com/v1/spells?key=$2a$10$Mun.zBaRpy8j69OyEAyr4usly6n1FaGiOC2IHp7/LqYA0Ny1rxTTe')
        .then((res) => {
            dispatch({ type: FETCH_START, payload: res.data });
        })
        .catch((err) => console.log(err)); 
}

const thunk = (store) => (next) => (action) => {
    if (typeof action === 'object'){
        next(action);
    } else if (typeof action === 'function') {
        action(store.dispatch); 
    }
};
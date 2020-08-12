import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions';


const initialState = {
    spells: [],
    isFetching: false, 
    error: '',
}

export const spellReducer = (state = initialState, action) =>  {
    switch(action.type){
        case FETCH_START: 
            return {
                ...state, 
                isFetching: true, 
                error: '',
            }
        case FETCH_SUCCESS: 
            return {
                ...state, 
                spells: action.payload, 
                isFetching: false, 
                error: '',
            }
        case FETCH_FAIL: 
            return {
                ...state,  
                isFetching: false, 
                error: action.payload,

                
            }
    default: 
        return state;
    }
}
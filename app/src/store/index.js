import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import spellReducer from '../reducer'

export const store = createStore(spellReducer, applyMiddleware(thunk));
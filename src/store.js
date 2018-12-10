import {createStore} from 'redux'
import saveReducer from './App/openDribblePort/portReducer'

const intialState={
    savedPics: []
}

const store = createStore(
    function (state= intialState,action){
        let newState= state
        newState=saveReducer(state,action)
        return newState
    }
)

export default store;
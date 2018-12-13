import {save , unsave} from './portActions'



const saveReducer = function(state,action){
    if(action.type === save){
        return{
            ...state,
            savedPics:[
                ...state.savedPics,
                action.savedPix
            ]
        }
    }else if(action.type === unsave){
        return{
            ...state,
            savedPics:state.savedPics.filter(frame => frame !== action.savedPix)
        }
    }
    return state
}
export default saveReducer
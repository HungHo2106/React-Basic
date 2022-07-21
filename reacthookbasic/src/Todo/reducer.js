import {SET_JOB, ADD_JOB, DELETE_JOB} from './constants'

// 1. Tao initState bang useReducer
export const initState = {
    job: '',
    jobs: [],
}


// 2.Reducer
const reducer = (state, action) => {

    switch(action.type){
        case SET_JOB:
            return{
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return{
                ...state, 
                jobs:[...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const newJObs = [...state.jobs]

            newJObs.splice(action.payload, 1)
            return{
                ...state,
                jobs: newJObs
            }
        default:
            throw new Error(`Invalid action`)
    }
}

export default reducer;
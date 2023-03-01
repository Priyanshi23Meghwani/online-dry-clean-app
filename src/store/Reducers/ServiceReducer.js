const initialState = {
    services : []
}

export default function serviceReducer(state=initialState, action) {

    if(action.type === 'services/getall') {
        return {
            ...state,
            services : action.payload
        }
    }

    else {
        return state;
    }
}
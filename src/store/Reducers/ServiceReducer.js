const initialState = {
    services : [],
}

export default function serviceReducer(state=initialState, action) {

    if(action.type === 'services/getall') {
        return {
            ...state,
            services : action.payload
        }
    }

    else if (action.type === 'service/add') {
        return {
            ...state,
            services : action.payload
        }
    }

    else if (action.type === 'service/delete') {
        return {
            ...state,
            services: state.services.filter(
              (service) => service.id !== action.payload
            ),
    }
}
    else {
        return state;
    }
}
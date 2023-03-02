const initialState = {
    orderLineItem: null
}

export default function UserReducer(state = initialState, action) {
    if (action.type === 'orderLineItem/update') {
        return {
            ...state,
            orderLineItem: action.payload
        }
    }
    else {
        return state;
    }
}
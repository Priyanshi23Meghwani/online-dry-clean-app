const initialState = {
    users: [],
    user: null,
    newUser: null
}
export default function UserReducer(state = initialState, action) {
    if (action.type === 'user/fetchall') {
        return {
            ...state,
            users: action.payload
        }
    }
    else if (action.type === 'user/fetch') {
        return {
            ...state,
            user: action.payload
        }
    }
    else if (action.type === 'user/add') {
        return {
            ...state,
            newUser: action.payload
        }
    }
    else if (action.type === 'user/update') {
        return {
        ...state,
        user: action.payload
        }
        }
    else {
        return state;
    }
}
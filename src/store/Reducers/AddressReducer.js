const initialState = {
    address : null,
    newAddress : null
}

export default function AddressReducer(state = initialState,action){
    if(action.type === 'address/fetch'){
        return{
            ...state,
            address:action.payload
        }
    }
    else if(action.type === 'address/update'){
        return{
            ...state,
            address : action.payload
        }
    }
    else{
        return state;
    }

}
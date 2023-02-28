const initialState = {
    orders: [],
    order: null
}

export default function OrderReducer(state = initialState, action) {

    if (action.type === 'orders/fetchAll') { 
        return {
            ...state, orders: action.payload
        }
    }
    // else if(action.type==='medicine/fetchbyid'){
    //     return{
    //         ...state,medicine:action.payload
    //     }
    // }
    // else if(action.type==='medicine/add'){
    //     return{
    //         ...state,medicine:action.payload
    //     }
    // }
    else
        return state;

}

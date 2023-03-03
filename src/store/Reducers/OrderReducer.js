const initialState = {
    orders: [],
    order: null,
    newOrder:null,
    orderCancel:null
}

export default function OrderReducer(state = initialState, action) {

    if (action.type === 'orders/fetchAll') { 
        return {
            ...state, 
            orders: action.payload
        }
    }
    else if(action.type==='order/fetchById'){
        return{
            ...state,
            order:action.payload
        }
    }
    else if (action.type === 'order/add') {
        return {
            ...state,
            newOrder: action.payload
        }
    }
    else if(action.type === 'order/cancelorder'){
        return {
            ...state,
            orderCancel:action.payload
        }
    }
    else
        return state;

}

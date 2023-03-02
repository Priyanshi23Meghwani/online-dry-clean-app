import axios from 'axios';


export function updateOrderLineItem(orderLineItem) {

    return async (dispatch) => {
        try {
            const resp = await axios.put("http://localhost:8080/orderLineItem/" + orderLineItem.id, orderLineItem);
            dispatch({
                type: "orderLineItem/update",
                payload: resp.data
            });
            alert("OrderLineItem Updated!");
        }catch(err){
            alert(err);
        }
    };
    
}
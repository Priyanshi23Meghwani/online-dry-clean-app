import axios from 'axios';

export function fetchAllOrders() {

    return (dispatch) => {
        return axios.get('http://localhost:8080/getAllOrders')
            .then(resp =>
                dispatch({
                    type: 'orders/fetchAll',
                    payload: resp.data
                }))
    }
}

export function fetchOrderById(orderId) {
    return (dispatch) => {
        return axios.get("http://localhost:8080/orders/" + orderId).then(
            resp => {
                dispatch({
                    type: "order/fetchById",
                    payload: resp.data
                });
            }
        )
    }
}
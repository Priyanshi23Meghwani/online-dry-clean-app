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

export function addOrder(order) {
    return (dispatch) => {
        return axios.post("http://localhost:8080/addOrder", order)
            .then(resp => {
                alert("Order added");
                dispatch({
                    type: "order/add",
                    payload: resp.data
                })
            }
            ).catch(error => {
                alert("Order not placed.");
            })
    }
}
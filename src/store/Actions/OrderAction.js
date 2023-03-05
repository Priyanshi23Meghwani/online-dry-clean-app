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

export function fetchOrdersByUserId(userId) {
    return (dispatch) => {
        return axios.get('http://localhost:8080/user/orders/'+userId).then(
            resp => {
                dispatch({
                    type: 'order/fetchbyuserid',
                    payload: resp.data
                });
            })
    }

}

export function cancelOrder(orderId) {

    return (dispatch) => {
        return axios.put("http://localhost:8080/orders/cancelOrder/" + orderId).then(
            resp => {
                alert("Order is Cancelled");
                dispatch({
                    type: 'order/cancelorder',
                    payload: resp.data
                });
            }
        )
    }
}


export function updateOrderStatus(order) {

    return async (dispatch) => {
        try {
            const resp = await axios.put("http://localhost:8080/orders/changeStatus/" + order.id, order);
            dispatch({
                type: "status/update",
                payload: resp.data
            });
            alert("Status updated");
        } catch (err) {
            alert(err);
        }
    };

}

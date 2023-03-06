import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import { fetchOrderById} from '../../store/Actions/OrderAction';
import "./FetchOrderById.css";

function FetchOrderById() {

    const order = useSelector(state => state.OrderReducer.order);
    const dispatch = useDispatch();
    const { orderId } = useParams();

    useEffect(() => {
        dispatch(fetchOrderById(orderId));
    }, [orderId])

    return (
        <div className="all-order-card">
            {
                order !== null &&
                <div className="card-container">
                    <div >
                        <h2>Order ID: {order.id}</h2>
                        <p><strong>Amount: </strong>{order.amount}</p>
                        <p><strong>Order Date: </strong>{order.orderDate}</p>
                        <p><strong>Expected Delivery Date: </strong>{order.deliveryDate}</p>
                        <p><strong>Payment Status: </strong>{order.paymentStatus}</p>
                        <p><strong>Order Status: </strong>{order.orderStatus}</p>

                        <p><strong>Service ID:</strong>{order.service.id}</p>
                        <p><strong>Service Type:</strong> {order.service.type}</p>
                        <p><strong>Service Charges: </strong>{order.service.charges}</p>
                    </div>
                    <div>
                        <h5>Order Item Details:</h5>
                        <p><strong>ID:</strong> {order.orderLineItem.id}</p>
                        <p><strong>Name: </strong>{order.orderLineItem.name}</p>
                        <p><strong>Quantity:</strong> {order.orderLineItem.quantity}</p>
                        <p><strong>Material:</strong> {order.orderLineItem.material}</p>
                        <p><strong>Instructions: </strong>{order.orderLineItem.instructions}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default FetchOrderById;
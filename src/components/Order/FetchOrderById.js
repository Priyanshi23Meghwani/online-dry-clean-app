import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams,Link } from 'react-router-dom';
import { fetchOrderById } from '../../store/Actions/OrderAction';

function FetchOrderById(){

    const order = useSelector(state => state.OrderReducer.order);
    const dispatch = useDispatch();
    const { orderId } = useParams();

    useEffect(() => {
        dispatch(fetchOrderById(orderId));
    }, [orderId])

    return(
        <div>
            {
                order !== null &&
                <div>
                    {/* {console.log(order)} */}
                    <p>Order Id: {order.id}</p>
                    <p>Amount: {order.amount}</p>
                    <p>Order Date: {order.orderDate}</p>
                    <p>Expected Delivery Date: {order.deliveryDate}</p>
                    <p>Payment Status: {order.paymentStatus}</p>
                    <p>Order Status: {order.orderStatus}</p>

                    <p>Service ID: {order.service.id}</p>
                    <p>Service Type: {order.service.type}</p>
                    <p>Service Charges: {order.service.charges}</p>

                    <p>Order Item Details:</p>
                    <p>ID: {order.orderLineItem.id}</p>
                    <p>Name: {order.orderLineItem.name}</p>
                    <p>Quantity: {order.orderLineItem.quantity}</p>
                    <p>Material: {order.orderLineItem.material}</p> 
                    <p>Instructions: {order.orderLineItem.instructions}</p> 
                    <p><Link to={`/orders/cancel`}>Cancel Order</Link></p>
                </div>}
        </div>
    )
}

export default FetchOrderById;
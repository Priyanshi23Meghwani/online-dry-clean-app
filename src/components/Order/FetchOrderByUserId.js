import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchOrdersByUserId, cancelOrder } from '../../store/Actions/OrderAction';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./FetchOrderByUserId.css";

function FetchOrderByUserId() {
    const orders = useSelector(state => state.OrderReducer.orders);
    const { userId } = useParams();
    const dispatch = useDispatch();

    // fetching all orders of logged in user
    useEffect(() => {
        dispatch(fetchOrdersByUserId(userId));
    }, [userId]);

    // controls for cancel order modal 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="all-order-card">
            <h1><strong><center>My Orders</center></strong></h1>
            <div className='card-rows'>
                {
                    orders !== null && orders.map((order) => (
                        <div key={order.id} className="card">
                            <div className='card-body ' >
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
                            <div className='details card-body '>
                                <h5><strong>Order Item Details:</strong></h5>
                                <p><strong>ID:</strong> {order.orderLineItem.id}</p>
                                <p><strong>Name: </strong>{order.orderLineItem.name}</p>
                                <p><strong>Quantity:</strong> {order.orderLineItem.quantity}</p>
                                <p><strong>Material:</strong> {order.orderLineItem.material}</p>
                                <p><strong>Instructions: </strong>{order.orderLineItem.instructions}</p>
                                <p>{order.orderStatus === "Pending" ? <button className="cancel-order-button"><Link style={{ color: 'white', textDecoration: 'none' }} to={`/order/details/update/${order.id}`} > Update Order details</Link></button> : ""}</p>
                                <p>{order.orderStatus === "Pending" ? <button className="cancel-order-button" onClick={() => { handleShow() }}>Cancel Order</button> : ""}</p>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Cancel Order</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Are you sure you want to cancel this order?</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={() => { dispatch(cancelOrder(order.id)); handleClose(); }}>
                                            Cancel Order
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default FetchOrderByUserId;
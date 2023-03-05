import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchOrderById, cancelOrder } from '../../store/Actions/OrderAction';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import "./FetchOrderById.css";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#fff',
    border: '2px solid #000',
    p: 4,
};


function FetchOrderById() {

    const order = useSelector(state => state.OrderReducer.order);
    const dispatch = useDispatch();
    const { orderId } = useParams();
    const items = JSON.parse(localStorage.getItem('myuser'));
    const isValidForUpdate = order?.orderStatus === "Pending" || order?.orderStatus === "Delivered";

    useEffect(() => {
        dispatch(fetchOrderById(orderId));
    }, [orderId])

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOk = () => {
        // do something when "OK" button is clicked
        handleClose();
    };
    // const [open, setOpen] = React.useState(false);
    // const handleCancelOpen = () => { setOpen(true); };
    // const handleCancelClose = () => { setOpen(false); };

    return (
        <div className="all-order-card">
            {
                order !== null &&
                <div className="card-container">
                    {/* {console.log(order)} */}
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

                        {items && items.role == "customer" ?
                            <button className="cancel-order-button" onClick={handleOpen}>Cancel Order</button> : ""}
                        <Modal open={open} onClose={handleClose}>
                            <div sx={style}>
                                <h2 id="simple-modal-title">Cancel Order</h2>
                                <p id="simple-modal-description">
                                Are you sure you want to cancel this order?
                                </p>
                                <Button variant="contained"  color="primary" onClick={() => { dispatch(cancelOrder(orderId)); handleClose(); }}>Cancel Order</Button>
                                <Button variant="contained" color="secondary"  onClick={() => { handleClose() }}>Close</Button>
                            </div>
                        </Modal>

                        
                        {items && items.role == "customer" ?
                            <p>{!isValidForUpdate && <Link to={`/order/details/update/${order.id}`} > Update Order details</Link>}</p> : ""}
                    </div>
                </div>
            }
        </div>
    )
}

export default FetchOrderById;
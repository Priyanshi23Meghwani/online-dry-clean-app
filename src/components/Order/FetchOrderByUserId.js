import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchOrdersByUserId, cancelOrder } from '../../store/Actions/OrderAction';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./FetchOrderByUserId.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function FetchOrderByUserId() {
    const orders = useSelector(state => state.OrderReducer.orders);
    const { userId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrdersByUserId(userId));
    }, [userId]);

    const [open, setOpen] = React.useState(false);
    const handleCancelOpen = () => { setOpen(true); };
    const handleCancelClose = () => { setOpen(false); };

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
                                <p>{order.orderStatus === "Pending" ? <button className="cancel-order-button"><Link style={{color:'white',textDecoration:'none'}}to={`/order/details/update/${order.id}`} > Update Order details</Link></button> : ""}</p>
                                <p>{order.orderStatus === "Pending" ? <button className="cancel-order-button" onClick={handleCancelOpen}>Cancel Order</button> : ""}</p>

                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    open={open}
                                    onClose={handleCancelClose}
                                    closeAfterTransition
                                    slots={{ backdrop: Backdrop }}
                                    slotProps={{
                                        backdrop: {
                                            timeout: 500,
                                        },
                                    }}
                                >
                                    <Fade in={open}>
                                        <Box sx={{ ...style, ...{ width: 'auto' } }}>
                                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                                Are you sure you want to cancel this order?
                                            </Typography>
                                            <Button variant="contained" onClick={() => { dispatch(cancelOrder(order.id)); handleCancelClose(); }} >Cancel Order</Button>
                                            <Button variant="contained" onClick={() => { handleCancelClose() }} >Close</Button>
                                        </Box>
                                    </Fade>
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
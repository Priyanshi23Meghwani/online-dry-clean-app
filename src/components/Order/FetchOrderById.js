import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchOrderById, cancelOrder } from '../../store/Actions/OrderAction';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


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

function FetchOrderById() {

    const order = useSelector(state => state.OrderReducer.order);
    const dispatch = useDispatch();
    const { orderId } = useParams();
    

    console.log(order);
    const isValidForUpdate = order?.orderStatus === "Pending" || order?.orderStatus === "Delivered";

    useEffect(() => {
        dispatch(fetchOrderById(orderId));
    }, [orderId])

    const [open, setOpen] = React.useState(false);
    const handleCancelOpen = () => {setOpen(true);};
    const handleCancelClose = () => {setOpen(false); };
    

    return (
        <div>
            {
                order !== null &&
                <div>
                    {/* {console.log(order)} */}
                    <p>Order ID: {order.id}</p>
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

                    {/* <p><Link to={`/orders/cancel`}>Cancel Order</Link></p> */}
                    <button onClick={handleCancelOpen}>Cancel Order</button>
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
                            <Box sx={style}>
                                <Typography id="transition-modal-title" variant="h6" component="h2">
                                    Are you sure you want to cancel this order?
                                </Typography>
                                <Button variant="contained" onClick={() => {dispatch(cancelOrder(orderId)); handleCancelClose();}} >Cancel Order</Button>
                                <Button variant="contained" onClick={() => {handleCancelClose()}} >Close</Button>
                            </Box>
                        </Fade>
                    </Modal>

                    <p>{!isValidForUpdate && <Link to={`/order/details/update/${order.id}`} > Update Order details</Link>}</p>
                </div>}
        </div>
    )
}

export default FetchOrderById;
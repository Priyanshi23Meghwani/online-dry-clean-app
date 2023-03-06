import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersByStatus } from "../../store/Actions/OrderAction";
import Forbidden from "../Dashboards/Forbidden";

const allStatus = [
    "Pending",
    "Picked up",
    "In Processing",
    "Ready for Dispatch",
    "Dispatched",
    "Delivered",
    "Cancelled"
]

function ViewOrderByStatus() {

    const items = JSON.parse(localStorage.getItem('myuser'));
    const [orderStatus, setOrderStatus] = useState("");
    const dispatch = useDispatch();
    const orders = useSelector(state => state.OrderReducer.orders);

    // fetching all orders with selected order status
    useEffect(() => {
        if (orderStatus) {
            dispatch(fetchOrdersByStatus(orderStatus));
        }
    }, [dispatch, orderStatus]);

    // for updating status
    const handleStatusChange = (event) => {
        setOrderStatus(event.target.value);
    }

    return (
        <div>
        {items.role === "admin"?
        <div className="container" style={{ marginTop: '150px' }}>
            <h3 style={{ textAlign: 'center', margin: '10px' , fontSize: '48px', fontWeight: 'bold'}}> View Orders By Status</h3>
            <div className="form-group">
            <label>Select Status</label>
            <select id="status" className="form-control" value={orderStatus} onChange={handleStatusChange}>
                <option value="">---Select---</option>
                {allStatus.map((orderStatus) => (
                    <option key={orderStatus} value={orderStatus}>
                        {orderStatus}
                    </option>
                ))}
            </select>
        </div>
            <div className='card-columns'>
            
            {
                 orders !== null && orders.map((order) => (
                     <div key={order.id} className="card" style={{height:'380px'}}>
                         <div className='card-body ' style={{fontSize: '20px'}}>
                             <h2>Order ID: {order.id}</h2>     
                             <p><strong>Order Status: </strong>{order.orderStatus}</p>
                         </div>
                         <div className='details card-body '>
                             <h5><strong>Order Item Details:</strong></h5>
                             <p><strong>ID:</strong> {order.orderLineItem.id}</p>
                             <p><strong>Name: </strong>{order.orderLineItem.name}</p>
                             <p><strong>Quantity:</strong> {order.orderLineItem.quantity}</p>
                             <p><strong>Material:</strong> {order.orderLineItem.material}</p>
                             <p><strong>Instructions: </strong>{order.orderLineItem.instructions}</p>
                         </div>
                     </div>
                 ))
             }
            </div>
           
        </div>: <Forbidden/>}</div>
    );

}
export default ViewOrderByStatus;
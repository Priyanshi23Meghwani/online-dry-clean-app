import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOrderById } from "../../store/Actions/OrderAction";
import { updateOrderStatus } from "../../store/Actions/OrderAction";
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
function ChangeOrderStatus(){

    const [id, setId] = useState("");
    const [orderStatus, setOrderStatus] = useState("");

    const { orderId } = useParams();
    const dispatch = useDispatch();
    const order = useSelector(state => state.OrderReducer.order);

    const items = JSON.parse(localStorage.getItem('myuser'));

    useEffect(() => {
        
        dispatch(fetchOrderById(orderId));
    }, [dispatch, orderId]);

    useEffect(() => {
        if (order) {
            setId(order.id);
            setOrderStatus(order.orderStatus);
        }
    }, [order]);

    const update = () => {
        const payload = {
            id: orderId,
            orderStatus: orderStatus,
        }
        dispatch(updateOrderStatus(payload));
    }

    return(
        <div>
        {items.role === "admin"?
        <div>
             <div>
                <label>Order Id</label>
                <input type="number" name="userId" value={id}
                    onChange={event => setId(event.target.value)} disabled />
            </div>
            <div>
                    <label>Order Status</label>
                    <select value={orderStatus} onChange={(event) => setOrderStatus(event.target.value)}>
                        <option value="">---Select---</option>
                        {allStatus.map((orderStatus) => (
                            <option key={orderStatus} value={orderStatus}>{orderStatus}</option>
                        ))}
                    </select>
                </div>
                <button onClick={update}>Update</button>

        </div>: <Forbidden/>}</div>
    )
}
export default ChangeOrderStatus
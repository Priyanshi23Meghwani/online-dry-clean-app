import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOrderById } from "../../store/Actions/OrderAction";
import { updateOrderStatus } from "../../store/Actions/OrderAction";


const allStatus = [
    "Pending",
    "Picked up",
    "In Processing",
    "Ready for Dispatch",
    "Dispatched",
    "Delivered"
]
function ChangeOrderStatus() {

    const [id, setId] = useState("");
    const [orderStatus, setOrderStatus] = useState("");

    const { orderId } = useParams();
    const dispatch = useDispatch();
    const order = useSelector(state => state.OrderReducer.order);

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

    return (
        <div className="container">
            <div className="form-group">
                <label>Order Id</label>
                <input type="number" name="orderId" id="orderId" className="form-control" value={id}
                    onChange={(event) => setId(event.target.value)} disabled />
            </div>
            <div className="form-group">
                <label >Order Status</label>
                <select id="orderStatus" className="form-control" value={orderStatus}
                    onChange={(event) => setOrderStatus(event.target.value)} >
                    <option value="">---Select---</option>
                    {allStatus.map((status) => (
                        <option key={status} value={status}>
                            {status}
                        </option>
                    ))}
                </select>
            </div>
            <button className="btn btn-primary" onClick={update}>
                Update
            </button>
        </div>
    );

}
export default ChangeOrderStatus
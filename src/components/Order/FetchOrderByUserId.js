import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOrderByUserId } from "../../store/Actions/OrderAction";


 function FetchOrderByUserId() {
    const orders = useSelector(state => state.OrderReducer.orders);
    const dispatch = useDispatch();
    const { userid } = useParams();

    useEffect(() => {
        dispatch(fetchOrderByUserId(userid));
    }, [userid])


    return (
        <div className="container" style={{margin: '30px'}}>
            <table className='table '>
                <thead className="thead-dark">
                    <tr>
                        <th>Order Id</th>
                        <th>Amount</th>
                        <th>Service Type</th>
                        <th>Service charges</th>
                        <th>Item Name</th>
                        <th>Item Quantity</th>
                        <th>Item Material</th>
                        <th>Instruction</th>
                        <th></th>
                    </tr>
                </thead>
                {
                    orders.length > 0 &&
                    orders.map(order =>
                        <tbody>
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.amount}</td>
                                <td>{order.service.type}</td>
                                <td>{order.service.charges}</td>
                                <td>{order.orderLineItem.name}</td>
                                <td>{order.orderLineItem.quantity}</td>
                                <td>{order.orderLineItem.material}</td>
                                <td>{order.orderLineItem.instructions}</td>
                                
                                <td>View</td>
                                {/* <td><Link to={/order/details/${order.id}}>View</Link></td> */}
                            </tr>
                        </tbody>

                    )
                }
            </table>
            {/* <p>User Name: {order.users.name}</p>
                    <p>User Email: {order.users.email}</p>
                    <p>Contact Number: {order.users.contactNo}</p>
                    <p>Service Type: {order.service.type}</p>
                    <p>Service Charges: {order.service.charges}</p>
                    <p>Item Name: {order.orderLineItem.name}</p>
                    <p>Item Quantity: {order.orderLineItem.quantity}</p>
                    <p>Item Material: {order.orderLineItem.material}</p>
                    <p>Intructions: {order.orderLineItem.instructions}</p> */}

        </div>
    )
}

export default FetchOrderByUserId;
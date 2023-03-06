import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllOrders } from '../../store/Actions/OrderAction';
import Forbidden from '../Dashboards/Forbidden';


function FetchAllOrders() {

    // fetching user obj from local storage to verify user role
    const items = JSON.parse(localStorage.getItem('myuser'));
    const allOrders = useSelector(state=>state.OrderReducer.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllOrders());
    }, [])

    return (
        
        // component to be rendered if role is admin
        <div>
        {items.role === "admin"?
        <div>
            <h1 style={{textAlign:'center', margin:'200px 0 40px 0'}}>All Orders</h1>
            <table className='table  table-hover'>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                {
                    allOrders.length > 0 &&
                    allOrders.map(order =>
                        <tbody>
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.amount}</td>
                                <td>{order.orderStatus}</td>
                                {/* <td>View</td> */}
                                <td><Link to={`/orders/details/${order.id}`}>View</Link></td>
                                <td><Link to={`/order/status/${order.id}`}>Change Status</Link></td>
                            </tr>
                        </tbody>

                    )
                }
            </table>

        </div> : <Forbidden/>}</div>
    )
}

export default FetchAllOrders;
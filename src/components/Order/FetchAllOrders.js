import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllOrders } from '../../store/Actions/OrderAction';


function FetchAllOrders() {

    const allOrders = useSelector(state=>state.OrderReducer.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllOrders());
    }, [])

    return (
        // <div>Hello</div>
        <div>
            <h1>All Orders</h1>
            <table className='table  table-dark table-hover'>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Amount</th>
                        <th>Status</th>
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
                            </tr>
                        </tbody>

                    )
                }
            </table>

        </div>
    )
}

export default FetchAllOrders;
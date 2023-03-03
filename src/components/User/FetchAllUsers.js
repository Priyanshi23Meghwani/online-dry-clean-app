import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchAllUsers } from "../../store/Actions/UserActions";


function FetchAllUsers() {
    const users = useSelector(state => state.UserReducer.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [])

    return (
        <div>
            <h1>All Users</h1>
            <table className='table table-dark table-hover'>
                <thead>
                    <tr>
                    <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.contactNo}</td>
                            <td>
                                <Link to={`/user/${user.id}`}>View</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
)
    
}
export default FetchAllUsers;


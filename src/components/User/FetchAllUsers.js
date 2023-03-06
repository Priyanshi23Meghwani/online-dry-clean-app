import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchAllUsers } from "../../store/Actions/UserActions";
import Forbidden from "../Dashboards/Forbidden";


function FetchAllUsers() {

    const items = JSON.parse(localStorage.getItem('myuser'));
    const users = useSelector(state => state.UserReducer.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [])


    return (
        <div>
        {items.role === "admin"?
        <div style={{margin:'150px 0'}}>
            <h1 style={{textAlign:'center',marginBottom:'40px'}}>All Users</h1>
            <table className='table  table-hover'>
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
        </div> : <Forbidden/>}</div>
)
    
}
export default FetchAllUsers;


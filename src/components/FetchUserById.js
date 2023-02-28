import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {fetchUser } from '../store/Actions/UserActions';
function FetchUserById() {
    const user = useSelector(state => state.UserReducer.user);
    const dispatch = useDispatch();
    const { userId } = useParams();
    useEffect(() => {
        dispatch(fetchUser(userId));
    }, [userId])
    return (
        <div>
            {
                user !== null &&
                <div>
                    <p>userId : {user.id}</p>
                    <p>Name : {user.name}</p>
                    <p>Email : {user.email}</p>
                    <p>Contact Number : {user.contactNo}</p>
                    <p>Password : {user.password}</p>
                    <p>Contact No : {user.contactNo}</p>
                    <p>Address Id : {user.address.id}</p>
                    <p>Door no : {user.address.doorNo}</p>
                    <p>Street : {user.address.street}</p>
                    <p>Area : {user.address.area}</p>
                    <p>City : {user.address.city}</p>
                    <p>State : {user.address.state}</p>
                    <p>Pincode : {user.address.pincode}</p>
                </div>}
        </div>)
}
export default FetchUserById;



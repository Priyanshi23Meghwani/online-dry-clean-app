
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchUser } from '../../store/Actions/UserActions';

import levi from '../../assets/levi.png';
import './FetchUserById.css';
function FetchUserById() {
    const user = useSelector(state => state.UserReducer.user);
    const dispatch = useDispatch();
    const { userId } = useParams();

    useEffect(() => {
        dispatch(fetchUser(userId));
    }, [userId]);

    return (
        <div className="colorful-bar">
            {/* <div className="container"> */}
            {user !== null &&

                //   <div className="card p-4">
                <div className="container">
                    {/* <h2 className="text-center mb-4">My Profile</h2> */}
                    <div className="row">
                        <div className="col-md-4">
                            <img src={levi} alt="User" className="profile-pic" />
                        </div>
                        <div className='col-md-8'>
                            <div className="text">
                                {/* <p><strong>User ID:</strong> {user.id}</p> */}
                                <p> {user.name}</p>
                                <p>{user.email}</p>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-md-6'>
                            <div className="text-1">
                                <p><strong>User ID:</strong> {user.id}</p>
                                <p><strong>Contact Number:</strong> {user.contactNo}</p>
                                {/* <p><strong>Password:</strong> {user.password}</p> */}
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <Link to={`/user/update/${user.id}`}>
                                <button className="btn-1 btn-small">Update User Details</button>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-2">
                                <h5 className="address"><u><strong>Address Details</strong></u></h5>
                                <p><strong>Door No:</strong> {user.address.doorNo}</p>
                                <p><strong>Street:</strong> {user.address.street}</p>
                                <p><strong>Area:</strong> {user.address.area}</p>
                                <p><strong>City:</strong> {user.address.city}</p>
                                <p><strong>State:</strong> {user.address.state}</p>
                                <p><strong>Pincode:</strong> {user.address.pincode}</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Link to={`/updateAddress/${user.address.id}`}>
                                <button className="btn-2 btn-small">Update Address Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
            {/* </div> */}
        </div >
    );
}

export default FetchUserById;
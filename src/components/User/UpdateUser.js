
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, updateUser } from '../../store/Actions/UserActions';
import { useParams } from 'react-router-dom';

function UpdateUser() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contactNumber, setContactNumber] = useState("");

    const { userId } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.UserReducer.user);

    useEffect(() => {
        dispatch(fetchUser(userId));
    }, [dispatch, userId]);

    useEffect(() => {
        if (user) {
            setId(user.id);
            setName(user.name);
            setEmail(user.email);
            setPassword(user.password);
            setContactNumber(user.contactNo);
        }
    }, [user]);

    const updateHandle = () => {
        const payload = {
            id: userId,
            name: name,
            email: email,
            password: password,
            contactNo: contactNumber
        }
        dispatch(updateUser(payload));
    }
    const validateForm = () => {
        return (
            name &&
            email &&
            password &&
            contactNumber 
        );
    };

    return (
        <div style={{ maxWidth: "500px", margin: "150px auto" }}>
            <h1 style={{ textAlign: "center" }}>Update User</h1>
            <form>
                <div className="form-group">
                    <label>User Id</label>
                    <input type="number" id="userId" name="userId" value={id} onChange={event => setId(event.target.value)} disabled className="form-control" />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={event => setName(event.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" id="email" name="email" value={email} onChange={event => setEmail(event.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" id="password" name="password" value={password} onChange={event => setPassword(event.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Contact Number</label>
                    <input type="number" id="contactNumber" name="contactNumber" value={contactNumber} onChange={event => setContactNumber(event.target.value)} className="form-control" />
                </div>
                <button type="button" onClick={updateHandle} className="btn btn-primary btn-block" disabled={!validateForm()}>Update</button>
            </form>
        </div>
    )
}
export default UpdateUser;
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser,updateUser } from '../../store/Actions/UserActions';
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

    const update = () => {
        const payload = {
            id: userId,
            name: name,
            email: email,
            password: password,
            contactNo: contactNumber
        }
        dispatch(updateUser(payload));
    }
    return (
        <div>
            <h1>Heya</h1>
            <div>
                <label>User Id</label>
                <input type="number" name="userId" value={id}
                    onChange={event => setId(event.target.value)} disabled />
            </div>
            <div>
                <label>Name</label>
                <input type="text" name="Name" value={name}
                    onChange={event => setName(event.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="Email" value={email}
                    onChange={event => setEmail(event.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="text" name="Password" value={password}
                    onChange={event => setPassword(event.target.value)} />
            </div>
            <div>
                <label>ContactNumber</label>
                <input type="number" name="ContactNumber" value={contactNumber}
                    onChange={event => setContactNumber(event.target.value)} />
            </div>
            <button onClick={update}>Update</button>

        </div>
    )
}
export default UpdateUser;
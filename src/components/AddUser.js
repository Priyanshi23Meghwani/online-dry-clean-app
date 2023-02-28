import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/Actions/UserActions';

function AddUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [role, setRole] = useState("");
    const [doorNo, setDoorNo] = useState("");
    const [street, setStreet] = useState("");
    const [area, setArea] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");


    // const [address, setAddress] = useState({

    //     doorNo: 0,
    //     street: "",
    //     area: "",
    //     city: "",
    //     state: "",
    //     pincode: 0
    // })

    const dispatch = useDispatch();

    const register = () => {
        const payload = {
            name: name,
            email: email,
            password: password,
            contactNo: contactNumber,
            role: role,
            address: {

                doorNo: doorNo,
                street: street,
                area: area,
                city: city,
                state: state,
                pincode: pincode

            }
        }
        dispatch(addUser(payload))

    }
    return (
        <div className="container">
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
            <div>
                <label>Role</label>
                <select value={role} onChange={event => setRole(event.target.value)}>
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                </select>

            </div>
            <div>
                <label>DoorNumber</label>
                <input type="number" name="doorNo" value={doorNo}
                    onChange={event => setDoorNo(event.target.value)} />
            </div>
            <div>
                <label>Street</label>
                <input type="text" name="street" value={street}
                    onChange={event => setStreet(event.target.value)} />
            </div>
            <div>
                <label>Area</label>
                <input type="text" name="area" value={area}
                    onChange={event => setArea(event.target.value)} />
            </div>
            <div>
                <label>City</label>
                <input type="text" name="city" value={city}
                    onChange={event => setCity(event.target.value)} />
            </div>
            <div>
                <label>State</label>
                <input type="text" name="state" value={state}
                    onChange={event => setState(event.target.value)} />
            </div>
            <div>
                <label>Pincode</label>
                <input type="text" name="pincode" value={pincode}
                    onChange={event => setPincode(event.target.value)} />
            </div>
            <button onClick={register}>Register</button>
        </div>
    )


}
export default AddUser;
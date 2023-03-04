import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {fetchAddress,updateAddress} from '../../store/Actions/AddressAction';

const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal"
];
function UpdateAddress() {

    const [id, setId] = useState("");
    const [doorno, setDoorNo] = useState('');
    const [street, setStreet] = useState('');
    const [area, setArea] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');

    const { addressId } = useParams();
    const dispatch = useDispatch();
    const address = useSelector(state => state.AddressReducer.address);

    useEffect(() => {
        dispatch(fetchAddress(addressId));
    }, [dispatch, addressId]);

    useEffect(() => {
        if (address) {
            setId(address.id)
            setDoorNo(address.doorNo);
            setStreet(address.street);
            setArea(address.area);
            setCity(address.city);
            setState(address.state);
            setPincode(address.pincode);
        }
    }, [address]);

    const handleButton = () => {
        const payload = {
            "id": id,
            "doorNo": doorno,
            "street": street,
            "area": area,
            "city": city,
            "state": state,
            "pincode": pincode
        }

        dispatch(updateAddress(payload));
    }

    return (
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
             <h1 style={{ textAlign: "center" }}>Update Address Details</h1>
            <div className="form-group">
                <label>Id:</label>
                <input type="text" className="form-control" name='id' value={id} disabled />
            </div>
            <div className="form-group">
                <label>Door No:</label>
                <input type="text" className="form-control" name='doorNo' value={doorno}
                    onChange={event => setDoorNo(event.target.value)} />
            </div>
            <div className="form-group">
                <label>Street:</label>
                <input type="text" className="form-control" name='street' value={street}
                    onChange={event => setStreet(event.target.value)} />
            </div>
            <div className="form-group">
                <label>Area:</label>
                <input type="text" className="form-control" name='area' value={area}
                    onChange={event => setArea(event.target.value)} />
            </div>
            <div className="form-group">
                <label>City:</label>
                <input type="text" className="form-control" name='city' value={city}
                    onChange={event => setCity(event.target.value)} />
            </div>
            <div className="form-group">
                <label>State</label>
                <select name="state" value={state} onChange={(event) => setState(event.target.value)}>
                    <option value="">Select a state</option>
                    {states.map((state) => (
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label>Pincode:</label>
                <input type="text" className="form-control" name='pincode' value={pincode}
                    onChange={event => setPincode(event.target.value)} />
            </div>
            <button onClick={handleButton} className="btn btn-primary btn-block">Update</button>
        </div>
    )
}

export default UpdateAddress;
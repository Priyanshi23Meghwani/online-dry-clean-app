
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/Actions/UserActions";
import "../Order/AddOrder.css";

const style = {
    boxShadow: '5px 8px 14px 2px rgba(219, 219, 219, 1)',
    width:'60%',
    marginTop:'150px',
    marginBottom: '150px'

}

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

function AddUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [doorNo, setDoorNo] = useState("");
    const [street, setStreet] = useState("");
    const [area, setArea] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");

    const dispatch = useDispatch();
    
    const addUserHandler = () => {
        const payload = {
            name,
            email,
            password,
            contactNo: contactNumber,
            address: {
                doorNo,
                street,
                area,
                city,
                state,
                pincode,
            },
        };
        dispatch(addUser(payload));
    };

    const validateForm = () => {
        return (
            name &&
            email &&
            password &&
            contactNumber &&
            doorNo &&
            street &&
            area &&
            city &&
            state &&
            pincode &&
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) &&
            /^[0-9]+$/.test(contactNumber) &&
            /^[0-9]+$/.test(pincode)
        );
    };

    return (
        <div className="container" style={style}>
            <h1 style={{ textAlign: "center" }}>Add User</h1>
            <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>Contact Number</label>
                <input type="tel" name="contactNumber" value={contactNumber} onChange={(event) => setContactNumber(event.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>Door No</label>
                <input type="text" name="doorNo" value={doorNo} onChange={(event) => setDoorNo(event.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>Street</label>
                <input type="text" name="street" value={street} onChange={(event) => setStreet(event.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>Area</label>
                <input type="text" name="area" value={area} onChange={(event) => setArea(event.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>City</label>
                <input type="text" name="city" value={city} onChange={(event) => setCity(event.target.value)} className="form-control" />
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
                <label>Pincode</label>
                <input type="text" name="pincode" value={pincode} onChange={(event) => setPincode(event.target.value)} className="form-control" />
            </div>
            <button className="add-order-form-button" onClick={addUserHandler} disabled={!validateForm()}>Add User</button>
        </div>
    );
}

export default AddUser
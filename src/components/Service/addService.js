import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addService } from "../../store/Actions/ServiceActions";
import "./addService.css";

function AddService() {
  const [type, setType] = useState("");
  const [charges, setCharges] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const reqPayload = {
      type: type,
      charges: charges
    }
    dispatch(addService(reqPayload))
  }

  const validateForm = () => {
    return (
      type &&
      Number(charges) > 0
    );
  };
  return (
    <div className="add-service-container">
      <h2 className="add-service-heading">Add Service</h2>
      <div className="add-service-input-container">
        <label className="add-service-label">Service Type</label>
        <input 
          className="add-service-input" 
          type="text" 
          name="Type" 
          value={type}
          onChange={event => setType(event.target.value)} 
        />
      </div>
      <div className="add-service-input-container">
        <label className="add-service-label">Service Charges</label>
        <div className="add-service-input-charge-container">
          <span className="add-service-input-charge-sign">Rs</span>
          <input 
            className="add-service-input-charge" 
            type="number" 
            name="Charges" 
            value={charges}
            onChange={event => setCharges(event.target.value)} 
          />
        </div>
      </div>
      <button className="add-service-submit-button" onClick={handleSubmit} disabled={!validateForm()}>Save</button>
        {/* Save
      </button> */}
    </div>
  )
}

export default AddService;
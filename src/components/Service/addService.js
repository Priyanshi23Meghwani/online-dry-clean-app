import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addService } from "../../store/Actions/ServiceActions";
import Forbidden from "../Dashboards/Forbidden";
import "./addService.css";

function AddService() {

  const items = JSON.parse(localStorage.getItem('myuser'));
  const [type, setType] = useState("");
  const [charges, setCharges] = useState(0);
  const dispatch = useDispatch();

  // on submitting the form
  const handleSubmit = () => {
    const reqPayload = {
      type: type,
      charges: charges
    }
    dispatch(addService(reqPayload))
  }

  // form validations 
  const validateForm = () => {
    return (
      type &&
      Number(charges) > 0
    );
  };

  return (
    // component to be rendered if role is admin
    <div>
      {items.role === "admin" ?
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
                min={1}
                name="Charges"
                value={charges}
                onChange={event => setCharges(event.target.value)}
              />
            </div>
          </div>
          <button className="add-service-submit-button" onClick={handleSubmit} disabled={!validateForm()}>Save</button>
          {/* Save
      </button> */}
        </div> : <Forbidden />}</div>
  )
}

export default AddService;
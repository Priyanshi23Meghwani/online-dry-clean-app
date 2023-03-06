import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteService } from "../../store/Actions/ServiceActions";
import "./deleteService.css";
import Forbidden from "../Dashboards/Forbidden";

function DeleteService() {

  const items = JSON.parse(localStorage.getItem('myuser'));
  const [serviceId, setServiceId] = useState("");
  const dispatch = useDispatch();

    // on submitting the form
  const handleSubmit = () => {
    const reqPayload = {};
    dispatch(deleteService(serviceId, reqPayload));
  };

    // form validations 
  const validateForm = () => {
    return (
      serviceId > 0
    );
  };

  return (
    // component to be rendered if role is admin
    <div>
    {items.role === "admin"?
    <div className="delete-service-container">
      <h2 className="delete-heading">Delete Service</h2>
      <div className="container mt-4">
        <form className="p-4 bg-light rounded">
          <div className="form-group">
            <label htmlFor="serviceId">Service Id</label>
            <input
              type="text"
              className="form-control"
              id="serviceId"
              value={serviceId}
              onChange={(event) => setServiceId(event.target.value)}
            />
          </div>
          <button
            type="button"
            className="delete-service-button"
            onClick={handleSubmit} disabled={!validateForm()}>Delete</button>

          {/* Delete
        </button> */}
        </form>
      </div>
    </div>: <Forbidden/> }</div>
  );
}

export default DeleteService;
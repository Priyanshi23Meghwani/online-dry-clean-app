import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteService } from "../../store/Actions/ServiceActions";
import "./deleteService.css";

function DeleteService() {
  const [serviceId, setServiceId] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const reqPayload = {};
    dispatch(deleteService(serviceId, reqPayload));
  };

  const validateForm = () => {
    return (
      serviceId > 0
    );
  };

  return (
    <div className="delete-service-container">
      <h2 className="delete-heading">Add Service</h2>
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
    </div>
  );
}

export default DeleteService;
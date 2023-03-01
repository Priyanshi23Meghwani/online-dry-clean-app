import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getAllServices } from "../../store/Actions/ServiceActions";

function GetAllServices() {

    const services = useSelector(state => state.serviceReducer.services);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllServices());
    },[])

    return(
        <div>
            <h3> All Services</h3>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th>Id</th>
                    <th>Type</th>
                    <th>Charges</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.length > 0 &&
                        services.map(i =>
                            <tr key = {i.id}>
                                <td>{i.id}</td>
                                <td>{i.type}</td>
                                <td>{i.charges}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}


export default GetAllServices;
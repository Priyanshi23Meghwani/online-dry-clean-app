import "./Header.css";
import { useNavigate } from "react-router-dom";
import "./AdminOrderControls.css";
import Forbidden from "./Forbidden";

function AdminOrderControls() {

    // fetching localstorage user object to verify user role
    const items = JSON.parse(localStorage.getItem('myuser'));
    const navigate = useNavigate();
    
    return (
        // if the role is admin this component will be rendered otherwise forbidden page will be shown
        <div>
        {items.role === "admin"?
        <div className="order-controls-container" >
            <div className="header-buttons" style={{ display: 'flex', flexDirection: 'row' }}>

                <button className="header-buttons-btn" onClick={() => navigate("/orders/all")}>View All Orders</button>
                <button className="header-buttons-btn" onClick={() => navigate("/users")}>View All Users</button>
                <button className="header-buttons-btn" onClick={() => navigate("/orders/status/")}>View Orders By Status</button>

            </div>
        </div>: <Forbidden/> }
        </div>
    )
}
export default AdminOrderControls;
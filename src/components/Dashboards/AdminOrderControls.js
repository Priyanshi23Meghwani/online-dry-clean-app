import "./Header.css";
import { useNavigate } from "react-router-dom";
import "./AdminOrderControls.css";

function AdminOrderControls(){
    const navigate = useNavigate();
    return(
        <div className="order-controls-container" >
            <div className="header-buttons" style={{ display: 'flex', flexDirection: 'row' }}>
                <button className="header-buttons-btn" onClick={()=>navigate("/orders/all")}>View All Orders</button>
                {/* <button className="header-buttons-btn" onClick={()=>navigate("/user/orders/:userId")}>View Orders By UserId</button> */}
                <button className="header-buttons-btn" onClick={()=>navigate("/orders/status/")}>View Orders By Status</button>
                
            </div>
        </div>
    )
}
export default AdminOrderControls;
import "./Header.css";
import { useNavigate } from "react-router-dom";

function AdminOrderControls(){
    const navigate = useNavigate();
    return(
        <div style={{margin:'50px 0',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <div className="header-buttons">
                <button className="header-buttons-btn" onClick={()=>navigate("/orders/all")}>View All Orders</button>
                <button className="header-buttons-btn" onClick={()=>navigate("/service/delete")}>View Orders By UserId</button>
                <button className="header-buttons-btn" onClick={()=>navigate("/service/delete")}>View Orders By Status</button>
                
                
            </div>
        </div>
    )
}
export default AdminOrderControls;
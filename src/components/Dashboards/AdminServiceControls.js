import "./Header.css";
import { useNavigate } from "react-router-dom";

function AdminServiceControls(){
    const navigate = useNavigate();
    return(
        <div style={{margin:'50px 0',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <div className="header-buttons">
                <button className="header-buttons-btn" onClick={()=>navigate("/service/add")}>Add New Service</button>
                <button className="header-buttons-btn" onClick={()=>navigate("/service/delete")}>Delete Service</button>
            </div>
        </div>
    )
}
export default AdminServiceControls;
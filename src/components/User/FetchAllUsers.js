import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchAllUsers } from "../../store/Actions/UserActions";

function FetchAllUsers() {
    const users = useSelector(state => state.UserReducer.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [])

    return (
        <div >
            {
                users.length > 0 &&
                users.map(c =>
                    <div key={c.id}>
                        <p> {c.name}<br></br>{c.email}<br></br>
                            <Link to={`/user/${c.id}`}>View</Link></p>
                    </div>
                )
            }
        </div>
    )
}
export default FetchAllUsers;


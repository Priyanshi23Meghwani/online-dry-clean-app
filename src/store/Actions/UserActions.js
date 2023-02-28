import axios from 'axios';

export function fetchAllUsers() {

    return (dispatch) => {
        return axios.get("http://localhost:8080/getAllUsers").then(
            resp => {
                dispatch({
                    type: "user/fetchall",
                    payload: resp.data
                });
            }
        )
    }
}
export function fetchUser(userId) {
    return (dispatch) => {
        return axios.get("http://localhost:8080/user/" + userId).then(
            resp => {
                dispatch({
                    type: "user/fetch",
                    payload: resp.data
                });
            }
        )
    }
}
export function addUser(user){
    return (dispatch) => {
        return axios.post("http://localhost:8080/addUser", user)
        .then(resp => {
            alert("User added");
            dispatch({
                type: "user/add",
                payload: resp.data
            })
        }
        ).catch(error => {
            alert("Registration Failed");
        })
    }
}

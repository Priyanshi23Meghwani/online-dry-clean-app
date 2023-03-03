import axios from 'axios';

export function fetchAllUsers() {

    return async (dispatch) => {
        try {
            const resp = await axios.get("http://localhost:8080/getAllUsers")
            dispatch({
                type: "user/fetchall",
                payload: resp.data
            });
        }
        catch (err){
            alert(err)
        }
    }
}

//     return (dispatch) => {
//         return axios.get("http://localhost:8080/getAllUsers").then(
//             resp => {
//                 dispatch({
//                     type: "user/fetchall",
//                     payload: resp.data
//                 });
//             }
//         )
//     }
// }

// export function fetchUser(userId) {
//     return (dispatch) => {
//         return axios.get("http://localhost:8080/user/" + userId).then(
//             resp => {
//                 dispatch({
//                     type: "user/fetch",
//                     payload: resp.data
//                 });
//             }
//         )
//     }
// }
export function fetchUser(userId) {
    return async (dispatch) => {
        try {
            const resp = await axios.get(`http://localhost:8080/user/${userId}`);
            dispatch({
                type: "user/fetch",
                payload: resp.data,
            });
        } catch (error) {
            // Handle error
        }
    };
}
export function addUser(user) {
    return async (dispatch) => {
        try {
            const resp = axios.post("http://localhost:8080/addUser", user);
            dispatch({
                type: "user/add",
                payload: resp.data
            });
            alert("User added");
        } catch(err){
            alert("Registration Failed"+err);
        }
    }
}

// export function updateUser(user) {
//     return (dispatch) => {
//         return axios.put("http://localhost:8080/user/" + user.id, user)
//             .then(resp => {
//                 alert("User updated");
//                 dispatch({
//                     type: "user/update",
//                     payload: resp.data
//                 });
//             })
//             .catch(error => {
//                 alert("Update Failed");
//             });
//     };
// }

export function updateUser(user) {

    return async (dispatch) => {
        try {
            const resp = await axios.put("http://localhost:8080/user/" + user.id, user);
            dispatch({
                type: "user/update",
                payload: resp.data
            });
            alert("User updated");
        } catch (err) {
            alert(err);
        }
    };

}

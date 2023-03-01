import axios from 'axios';

export function getAllServices() {

    return(dispatch) => {

        return axios.get("http://localhost:8080/getAllServices").then(
            resp => {
                dispatch({
                    type : "services/getall",
                    payload : resp.data
                })
            }
        )
    }

}
import axios from 'axios';

export function fetchAddress(addressId){
    return (dispatch => {
        return axios.get('http://localhost:8080/address/'+ addressId).then(resp=>{
            dispatch({
                type:"address/fetch",
                payload:resp.data
            });
        })
    })
}

export function updateAddress(address){
    return(dispatch)=>{
        return axios.put('http://localhost:8080/address/'+address.id,address)
        .then(resp =>{
            alert("Address Updated");
             dispatch({
                type : "address/update",
                payload : resp.data
            });
        })
        .catch(error => alert('Unable to update address'));
    };
}
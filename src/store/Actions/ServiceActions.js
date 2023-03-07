import axios from 'axios';

// export function getAllServices() {

//     return(dispatch) => {

//         return axios.get("http://localhost:8080/getAllServices").then(
//             resp => {
//                 dispatch({
//                     type : "services/getall",
//                     payload : resp.data
//                 })
//             }
//         )
//     }
// }

export function getAllServices() {
    return async (dispatch) => {
      try {
        const resp = await axios.get("http://localhost:8080/getAllServices");
        dispatch({
          type: "services/getall",
          payload: resp.data,
        });
      } catch (error) {
        alert(error);
      }
    };
  }
  



// export function addService(serviceId) {
    
//     return(dispatch) => {

//         return axios.post("http://localhost:8080/addNewService", serviceId).then(
//             resp => {
//                 alert("service added");
//                 dispatch({
//                     type : "service/add",
//                     payload : resp.data
//                 })
//             }
//         ).catch(error => {
//             alert("Service not added");
//         })
//     }
// }

export function addService(serviceId) {
    return async (dispatch) => {
      try {
        const resp = await axios.post("http://localhost:8080/addNewService", serviceId);
        alert("service added");
        dispatch({
          type: "service/add",
          payload: resp.data,
        });
      } catch (error) {
        alert("Service not added");
      }
    };
  }
  

// export function deleteService(serviceId) {
//     return (dispatch) => {
//       return axios
//         .delete("http://localhost:8080/service/" + serviceId)
//         .then((resp) => {
//           alert("Service deleted");
//           dispatch({
//             type: "service/delete",
//             payload: serviceId,
//           });
//         })
//         .catch((error) => {
//           alert("Service not deleted");
//         });
//     };
//   }
 
export function deleteService(serviceId) {
    return async (dispatch) => {
      try {
        const resp = await axios.delete(`http://localhost:8080/service/${serviceId}`);
        alert("Service deleted");
        dispatch({
          type: "service/delete",
          payload: serviceId,
        });
      } catch (error) {
        alert("Service not deleted");
      }
    };
  }
  
  
  
  

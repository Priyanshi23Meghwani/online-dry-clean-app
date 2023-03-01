import axios from 'axios';
export const loginUser = (payload, navigate) => async (dispatch) => {
    try {
      const resp = await axios.post('http://localhost:8080/auth/login', payload);
      const loggedInUser = resp.data;
      const myObj = {
        userId: loggedInUser.userId,
        name: loggedInUser.name,
        role: loggedInUser.role,
      };
      localStorage.setItem('myuser', JSON.stringify(myObj));
      const role = loggedInUser.role;
  
      if (role === 'customer') {
        navigate('/customer');
      }
      if (role === 'admin') {
        navigate('/admin');
      }
  
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: loggedInUser,
      });
    } catch (error) {
      alert(error.response.data);
      dispatch({
        type: 'LOGIN_FAIL',
      });
    }
  };
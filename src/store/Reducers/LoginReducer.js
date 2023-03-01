const initialState = {
    isLoggedIn: false,
    user: {},
  };
  
  export const LoginReducer = (state = initialState, action) => {
    if (action.type === 'LOGIN_SUCCESS') {
      return {
        isLoggedIn: true,
        user: action.payload,
      };
    } else if (action.type === 'LOGIN_FAIL') {
      return {
        isLoggedIn: false,
        user: {},
      };
    } else {
      return state;
    }
  };
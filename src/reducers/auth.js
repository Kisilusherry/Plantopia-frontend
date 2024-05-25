const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload, error: null };
    case 'LOGIN_FAILURE':
      return { ...state, error: action.error };
    case 'SIGNUP_SUCCESS':
      return { ...state, user: action.payload, error: null };
    case 'SIGNUP_FAILURE':
      return { ...state, error: action.error };
    case 'FORGOT_PASSWORD_SUCCESS':
      return { ...state, message: action.payload, error: null };
    case 'FORGOT_PASSWORD_FAILURE':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default authReducer;

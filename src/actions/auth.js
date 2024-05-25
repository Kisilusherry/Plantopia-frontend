export const forgotPassword = (email) => async (dispatch) => {
  try {
    const response = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    dispatch({ type: 'FORGOT_PASSWORD_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FORGOT_PASSWORD_FAILURE', error });
  }
};

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      navigate('/profile');
    } else {
      dispatch({ type: 'LOGIN_FAILURE', error: data });
    }
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', error });
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      dispatch({ type: 'SIGNUP_SUCCESS', payload: data });
      navigate('/profile');
    } else {
      dispatch({ type: 'SIGNUP_FAILURE', error: data });
    }
  } catch (error) {
    dispatch({ type: 'SIGNUP_FAILURE', error });
  }
};

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuth: !!localStorage.getItem("token"),
  loading: false,
  error: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: null };

    case "AUTH_SUCCESS":
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        user: action.payload.user,
        isAuth: true
      };

    case "AUTH_ERROR":
      return { ...state, loading: false, error: action.payload };

    case "LOGOUT":
      return {
        token: null,
        user: null,
        isAuth: false,
        loading: false,
        error: null
      };

    default:
      return state;
  }
}

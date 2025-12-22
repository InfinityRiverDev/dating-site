const initialState = {
  feed: [],
  matches: [],
  matchPopup: null,
  loading: false
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "USERS_LOADING":
      return { ...state, loading: true };

    case "SET_FEED":
      return { ...state, feed: action.payload, loading: false };

    case "REMOVE_USER":
      return {
        ...state,
        feed: state.feed.filter(u => u._id !== action.payload)
      };

    case "SHOW_MATCH":
      return { ...state, matchPopup: action.payload };

    case "HIDE_MATCH":
      return { ...state, matchPopup: null };

    case "SET_MATCHES":
      return { ...state, matches: action.payload };

    default:
      return state;
  }
}

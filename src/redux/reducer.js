// State object
const initialState = {
  user: {
    id: 1,
    name: "Tony Stark",
    image: "https://i1.wp.com/themarvelreport.com/wp-content/uploads/2019/05/Tony-Stark-Iron-Man.jpg?fit=1280%2C720",
    hobbies: ["Being Rich, Having a Super Suit, Shawarma"]
  }
};

// Action type variables
const GET_USER = "GET_USER";

// Action creators
export function getUser(userObj) {
  return {
    type: GET_USER,
    payload: userObj
  };
}

// Reducer function
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  // Switch statement, passed action.type
  switch (type) {
    case GET_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
}

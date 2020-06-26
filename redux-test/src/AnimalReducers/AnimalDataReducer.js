// create reducer function here passing in state and action where action determines
//the type of operation as well as the payload that contains the data to use for the update
//const

const initStore = {
  animals: [],
};

//fetch data and pass in as payload

export default function reducer(state = initStore, action) {
  let { type, payload } = action; //object destructuring

  let animals = [];

  switch (type) {
    case "FETCH_ANIMALS":
      return {
        ...state,
        animals: payload.animals,
      };

    case "ADD_ANIMAL":
      break;
    case "DELETE_ANIMAL":
      break;
    default:
      return { ...state };
  }
}

//we call these functions through out the handler (where we make requests to the API) by calling the stores dispatch function
export const fetchAnimals = (animals) => {
  return {
    type: "FETCH_ANIMALS",
    payload: animals,
  };
};

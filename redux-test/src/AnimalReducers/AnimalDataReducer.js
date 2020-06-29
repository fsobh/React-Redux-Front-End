// create reducer function here passing in state and action where action determines
//the type of operation as well as the payload that contains the data to use for the update
//const

const initStore = {
  animals: [],
};

//fetch data and pass in as payload

export default function reducer(state = initStore, action) {
  let { type, payload } = action; //object destructuring

  switch (type) {
    case "FETCH_ANIMALS":
      return {
        ...state,
        animals: payload,
      };

    case "ADD_ANIMAL":
      return {
        ...state,
        animals: payload, //
      };

    case "DELETE_ANIMAL":
      return {
        ...state,
        animals: payload, //
      };

    case "EDIT_ANIMAL":
       return {
        ...state,
        animals: payload, //
      };  
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

export const addAnimal = (animals) => {
  return {
    type: "ADD_ANIMALS",
    payload: animals,
  };
};

export const deleteAnimal = (animals) => {
  return {
    type: "DELETE_ANIMALS",
    payload: animals,
  };
};

export const editAnimal = (animals) => {
  return {
    type: "EDIT_ANIMALS",
    payload: animals,
  };
};

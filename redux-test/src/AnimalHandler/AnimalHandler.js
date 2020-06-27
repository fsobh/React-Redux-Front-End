import axios from "axios";
import {
  fetchAnimals,
  addAnimal,
  deleteAnimal,
} from "../AnimalReducers/AnimalDataReducer";
import store from "../Store";

const getAllAnimals = async () => {
  try {
    const data = await axios({
      method: "GET",
      url: "http://localhost:4000/api/v1/animals/getAnimals",
    });

    store.dispatch(fetchAnimals(data.data));
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
const addNewAnimal = async (animal) => {
  try {
    const data = await axios({
      method: "POST",
      url: "http://localhost:4000/api/v1/animals/addAnimal",
      data: {
        name: animal.name,
        type: animal.type,
      },
    });

    store.dispatch(addAnimal(data.data)); // since this endpoint return the new list of animals after adding //
  } catch (error) {
    console.error(error);
  }
};

const delAnimal = async (id) => {
  try {
    const data = await axios({
      method: "GET",
      url: `http://localhost:4000/api/v1/animals/deleteAnimal/${id}`,
    });

    store.dispatch(deleteAnimal(data.data)); // since this endpoint return the new list of animals after adding //
  } catch (error) {
    console.error(error);
  }
};

export default { getAllAnimals, addNewAnimal, delAnimal };

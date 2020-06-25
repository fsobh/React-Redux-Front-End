import axios from "axios";

const getAllAnimals = () => {
  axios
    .get("http://localhost:3000/api/v1/animals/getAnimals")
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => {});
};

export default { getAllAnimals };

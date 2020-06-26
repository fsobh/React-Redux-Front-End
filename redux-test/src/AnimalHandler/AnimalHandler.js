import axios from "axios";

const getAllAnimals = async () => {
  try {
  const data = await axios({
    method: "GET",
    url:
      "http://localhost:4000/api/v1/animals/getAnimals",
  
  })

  console.log(data)
}
catch(error) {

  console.error(error)
}
};

export default { getAllAnimals };

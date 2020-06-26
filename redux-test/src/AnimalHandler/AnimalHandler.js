import axios from "axios";

const getAllAnimals = () => {
  axios({
    method: "GET",
    url:
      "https://50bn43q6f2.execute-api.us-east-2.amazonaws.com/dev/get_stops/0",
    headers: {
      Authorization: "4674cc54-bd05-11e7-abc4-cec278b6b50a",
    },
  })
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { getAllAnimals };

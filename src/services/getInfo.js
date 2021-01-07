const axios = require("axios");
const API_URL = "https://hirng-x2021.glitch.me/api";

export async function getData() {
  return  axios.get(
      `${API_URL}`,
      {
          headers: {
              Accept: "application/json",
             "Content-Type": 'application/json'
          }
      }
  )
}


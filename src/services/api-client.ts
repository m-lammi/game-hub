import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e273dacbb17446b5b554b4e984abdde6",
  },
});

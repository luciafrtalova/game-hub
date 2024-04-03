import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0d2786b15222478f9c1673e555d4d457",
  },
});

import axios from "axios";

export const GetUserRequest = async () => {
  return axios({
    url: "",
    headers: {
      //   "x-access-token": token.value,
    },
    method: "GET",
  });
};

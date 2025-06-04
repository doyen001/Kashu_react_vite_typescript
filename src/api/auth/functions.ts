import axios from "axios";

const signUpUser = async (data: any) => {
  const response = await axios.post(
    "https://devapi.tabpoint.us/v23/guests?i18n=en",
    data
  );
  return response.data;
};

export {
    signUpUser,
}
import { useContext } from "react";

import UserProvider from "../context/UserProvider";

const useUser = () => {
  return useContext(UserProvider);
}

export default useUser;
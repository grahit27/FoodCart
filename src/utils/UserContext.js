import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Tester",
    email: "tester@123.com",
  },
});
export default UserContext;

import { createContext } from "react";

const context = {
  api: { percen: 0, handlePercen: (value) => {} },
};

const MyContext = createContext(context);

export default MyContext;

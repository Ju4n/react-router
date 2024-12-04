import { Route, Routes } from "react-router-dom";
import FormOne from "../pages/form-one";
import FormTwo from "../pages/form-two";
import FormThree from "../pages/form-three";

const Main = () => {
  return (
      <Routes>
        <Route path="/">
          <Route path="form-one" element={<FormOne />} />
          <Route path="form-two" element={<FormTwo />} />
          <Route path="form-three" element={<FormThree />} />
        </Route>
      </Routes>
  );
};

export default Main;

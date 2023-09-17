import { NotFound } from "@/pages";
import { Route, Routes } from "react-router-dom";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const RoutesError = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesError;

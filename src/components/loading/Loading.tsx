import { ImSpinner8 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-50 dark:bg-gray-900">
      <ImSpinner8 className="text-2xl text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />
      <span className="sr-only">Cargando...</span>
    </div>
  );
};

export default Loading;

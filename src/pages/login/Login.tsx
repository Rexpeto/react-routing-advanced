import { PrivateRoutes, PublicRoutes } from "@/models";
import { createUser } from "@/redux/slices/user.slice";
import { loginService } from "@/services";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

interface dataUser {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<dataUser>({ email: "", password: "" });
  const navigate = useNavigate();

  const login = async () => {
    try {
      const result = await loginService(data);
      dispatch(createUser(result?.data));
      navigate(`/${PrivateRoutes.DASHBOARD}`, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value.toLowerCase() });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data?.email) return console.log("Debe colocar un correo electronico");

    if (!data?.password) return console.log("Debe colocar la contraseña");

    login();
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to={`/${PublicRoutes.LOGIN}`}
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-8 h-8 mr-2" src="logo.svg" alt="logo" />
          Vypers
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Iniciar sesión
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Correo
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 xl:py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none transition duration-150"
                  placeholder="name@company.com"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={(e) => handleChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 xl:py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none transition duration-150"
                />
              </div>
              <div className="flex items-center justify-between">
                <Link
                  to={`/${PublicRoutes.FORGOT_PASSWORD}`}
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-blue-500"
                >
                  Olvidé mi contraseña
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-150"
              >
                Iniciar
              </button>
              <p className="flex gap-2 text-sm font-light text-gray-500 dark:text-gray-400">
                ¿No tienes una cuenta?
                <Link
                  to={`/${PublicRoutes.REGISTER}`}
                  className="font-medium text-primary-600 hover:underline dark:text-blue-500 transition-all duration-150"
                >
                  Registrarse
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

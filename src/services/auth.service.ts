import { axiosPrivate } from "@/config";

/*
 * Login of user
 * @param {string} email
 * @param {string} password
 * returns UserInfo with jwt
 * */
export const loginService = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return axiosPrivate.post(`/auth/login`, {
    email,
    password,
  });
};

import React, { useState, useEffect } from "react";
// import Image from "./../img/img.jpg";
import LoadingState from "../components/loading";
import { app } from "../config/firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
// import { UserState } from "../slices/userSlice";
import { setUser } from "../slices/userSlice";
import userSlice, { UserState } from "../slices/userSlice";

interface AuthProps {}

const Auth: React.FC<AuthProps> = () => {
  const [authType, setAuthType] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleAuth = async (e: any) => {
    e.preventDefault();
    const { email, password } = e.target;
    const auth = getAuth(app);
    setLoading(true);

    if (!authType) {
      await signInWithEmailAndPassword(auth, email.value, password.value)
        .then((res) => {
          const { displayName, email, uid } = res.user;
          dispatch(setUser({ displayName, email, uid }));
          localStorage.setItem(
            "user",
            JSON.stringify({ displayName, email, uid })
          );
          setLoading(false);
        })
        .catch((err) => {
          alert(err.message);

          setLoading(false);
        });
    } else {
      await createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((res) => {
          const { displayName, email, uid } = res.user;

          dispatch(setUser({ displayName, email, uid }));
          localStorage.setItem(
            "user",
            JSON.stringify({ displayName, email, uid })
          );
          setLoading(false);
        })
        .catch((err) => {
          alert(err.message);

          setLoading(false);
        });
    }
  };

  if (loading) {
    return <LoadingState caption="Authenticating" />;
  }

  return (
    <div className="w-full h-screen flex  justify-center items-center bg-left-bottom bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/210661/pexels-photo-210661.jpeg?auto=compress&cs=tinysrgb&w=600')] ">
      <div className="p-4 w-full max-w-sm bg-gray-300 rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8">
        <form className="space-y-6" onSubmit={handleAuth}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            {authType ? "Sig-Up to Shopli" : "Sign-In to Shopli "}
          </h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@company.com"
              required={true}
              // onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your password
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required={true}
              // onChange={handleChange}
              autoComplete="none"
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  onChange={() => setShow(!show)}
                />
              </div>
              {/* <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Remember me
              </label> */}
            </div>
            <a
              href="#"
              className="ml-5 text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              show Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {!authType ? "Login to your account" : "Register your account"}
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <a
              href="#"
              className="text-blue-700 hover:underline dark:text-blue-500"
              onClick={() => setAuthType(!authType)}
            >
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;

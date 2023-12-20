"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();
const ContextProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [signup, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  // sign up user
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (signup.password.length < 6) {
        setError(true);
        setMessage("Password must be at least 6 characters");
        setLoading(false);
      } else {
        const response = await axios.post("/api/signup", signup);

        setLoading(false);
        setError(response.data.status !== 201);
        setMessage(response.data.message);

        if (response.data.message === "User created successfully") {
          router.push("/loginpage");
          setSignUp({
            name: "",
            email: "",
            password: "",
          });
        }
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/login", login);

      setLoading(false);
      setError(response.data.status !== 201);
      setMessage(response.data.message);

      if (response.data.message === "User login successfully") {
        router.push("/");
        setLogin({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 3500);
    }
  }, [error]);

  return (
    <Context.Provider
      value={{
        signup,
        setSignUp,
        handleSignUpSubmit,
        loading,
        error,
        message,
        login,
        setLogin,
        handleLoginSubmit,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

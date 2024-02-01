"use client";
import { Context } from "@/Context/Context";
import Loader from "@/components/Loader";
import TestUser from "@/components/TestUser";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Login = () => {
  const { loading, error, message, login, setLogin, handleLoginSubmit } =
    useContext(Context);
  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Welcome to Shop 🛒
            </h1>

            <p className="mt-4 text-gray-500">
              Login to your account to continue shopping
            </p>
          </div>
          {error && (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 "
              role="alert"
            >
              <span className="font-medium">Danger alert!</span> {message}
            </div>
          )}
          <form
            onSubmit={handleLoginSubmit}
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          >
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 border p-4 pe-12 text-sm shadow-sm"
                  placeholder="test@gmail.com"
                  required
                  name="email"
                  value={login.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 border p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  required
                  name="password"
                  value={login.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                No account?
                <Link className="underline mx-1" href={"/signupPage"}>
                  Sign up
                </Link>
              </p>

              <button
                type="submit"
                className="inline-block rounded-lg bg-[#394149] px-10 md:px-20 py-3 text-sm font-medium text-white"
              >
                {loading ? <Loader /> : "Login"}
              </button>
            </div>
          </form>
          <TestUser />
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <Image
            fill="cover"
            alt="Welcome"
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Login;

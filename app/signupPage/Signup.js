"use client";
import { Context } from "@/Context/Context";
import Loader from "@/components/Loader";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Signup = () => {
  const { signup, setSignUp, handleSignUpSubmit, loading, error, message } =
    useContext(Context);

  const handleChnage = (e) => {
    setSignUp({ ...signup, [e.target.name]: e.target.value });
  };
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt="Pattern"
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
            layout="fill"
            objectFit="cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <Link className="block text-blue-600 w-16" href="/">
              <span className="sr-only">Home</span>
              <svg
                id="logo-70"
                width="68"
                height="20"
                viewBox="0 0 78 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z"
                  className="ccustom"
                  fill="#394149"
                ></path>
                <path
                  d="M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z"
                  className="ccustom"
                  fill="#394149"
                ></path>
              </svg>
            </Link>

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to Shop 🛒
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Signup to get started with Shop
            </p>
            {error && (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 "
                role="alert"
              >
                <span className="font-medium">Danger alert!</span> {message}
              </div>
            )}

            <form
              onSubmit={handleSignUpSubmit}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-800"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="name"
                  required
                  value={signup.name}
                  onChange={handleChnage}
                  placeholder="name"
                  className="mt-1 h-10 px-2  w-full rounded-md border-gray-200 bg-white border text-sm text-gray-800 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-800"
                >
                  {" "}
                  Email{" "}
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  required
                  value={signup.email}
                  onChange={handleChnage}
                  placeholder="test@gmail.com"
                  className="mt-1 h-10 px-2 w-full rounded-md border-gray-200 bg-white border text-sm text-gray-800 shadow-sm"
                />
              </div>

              <div className="col-span-6 ">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-800"
                >
                  {" "}
                  Password{" "}
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  required
                  value={signup.password}
                  onChange={handleChnage}
                  placeholder="*********"
                  className="mt-1 h-10 px-2 w-full rounded-md border-gray-200 bg-white border text-sm text-gray-800 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    required
                    className="h-5 w-5 rounded-md border-gray-200 bg-white border shadow-sm"
                  />

                  <span className="text-sm text-gray-800">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  className="inline-block shrink-0 rounded-md border border-[#394149] bg-[#13161a] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#394149] focus:outline-none focus:ring active:text-[#000000]"
                  type="submit"
                >
                  {loading ? <Loader /> : " Create an account"}
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link
                    href="/loginpage"
                    className="text-gray-800 underline mx-1"
                  >
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Signup;

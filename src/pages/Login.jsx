import React from "react";
import { useState } from "react";
import GoogleBtn from "../components/atoms/GoogleBtn";
import NavPar from "../components/molecules/NavPar";
import DescAuth from "../components/atoms/DescAuth";
import { loginUser } from "../service/api-auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password });
      if (res && res.user) {
        localStorage.setItem("token", "fake-token");
        localStorage.setItem("user", JSON.stringify(res.user));
        navigate("/admin");
      }
    } catch {
      setError("Email atau Kata Sandi salah");
    }
  };
  return (
    <>
      <NavPar />
      <div className="h-full px-3 py-5 mt-20 mb-20 w-1/3 mx-auto bg-white border-2 border-gray-200 rounded-md ">
        <DescAuth
          mainTitle="Masuk ke Akun"
          subTitle="Yuk, lanjutin belajarmu di videobelajar."
        />
        <div className="mt-9 md:mx-auto md:w-full md:max-w-md">
          <form
            onSubmit={handleSubmit}
            className="space-y-3"
            action="#"
            method="POST"
          >
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
              <label
                htmlFor="email"
                className="dm-sans-fonts block text-sm/6 font-light text-gray-400"
              >
                E-mail <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="dm-sans-fonts block text-sm/6 font-light text-gray-400"
                >
                  Kata Sandi <span className="text-red-600">*</span>
                </label>
              </div>
              <div className="mt-2 flex justify-end items-center relative">
                <div className="absolute mr-0 w-10 text-gray-400">
                  <i className="fa fa-eye-slash" aria-hidden="true"></i>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-end mt-4 mb-6">
                <a
                  className="text-sm/6 font-light dm-sans-fonts text-gray-500"
                  href=""
                >
                  Lupa Password?
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <button
                type="submit"
                className="flex w-full justify-center rounded-lg bg-green-500 px-3 mt-3 mb-2 py-1.5 text-sm/6 font-semibold dm-sans-fonts2 text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 cursor-pointer"
              >
                Masuk
              </button>

              <button
                type="button"
                onClick={() => navigate("/register")}
                className="flex w-full justify-center rounded-lg bg-green-100 px-3 mt-3 mb-2 py-1.5 text-sm/6 font-semibold dm-sans-fonts2 text-green-500 shadow-xs hover:bg-green-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100 cursor-pointer"
              >
                Daftar
              </button>
            </div>
          </form>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-light dm-sans-fonts text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 cursor-default">
              atau
            </span>
          </div>
          <GoogleBtn />
        </div>
      </div>
    </>
  );
}

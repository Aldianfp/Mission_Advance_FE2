import React from "react";
import logo from "../../assets/image/icon-video-belajar.png";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mt-15">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="Beranda.html" className="flex justify-items-start">
              <img src={logo} alt="videobelajar" />
            </a>
            <div className="w-100">
              <h2 className="mt-8 mb-6 text-sm font-extralight text-gray-900 dark:text-white dm-sans-fonts2">
                Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
              </h2>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white dm-sans-fonts">
                Jl. Usman Effendi No. 50 Lowokwaru, Malang
              </h2>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white dm-sans-fonts">
                +62-877-7123-1234
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-extralight text-gray-900 dark:text-white dm-sans-fonts2">
                Kategori
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-bold dm-sans-fonts3">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Digital &amp; Teknologi
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Pemasaran
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Manajemen Bisnis
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Pengembangan Diri
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Desain
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-extralight text-gray-900 dark:text-white dm-sans-fonts2">
                Perusahaan
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-bold dm-sans-fonts3">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Tentang Kami
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Kebijakan Privasi
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Ketentuan Layanan
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Bantuan
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-extralight text-gray-900 dark:text-white dm-sans-fonts2">
                Komunitas
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-bold dm-sans-fonts3">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Tips Sukses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 dm-sans-fonts3">
            @2023 Gerobak Sayur All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 ">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 bg-white p-2 border-2 border-gray-400 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="bg-black"
                stroke="bg-black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin-icon lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="sr-only">Linkedin page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 bg-white p-2 border-2 border-gray-400 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="bg-black"
                stroke="bg-black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook-icon lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-900 dark:hover:text-white ms-5 bg-white p-2 border-2 border-gray-400 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram-icon lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-900 dark:hover:text-white ms-5 bg-white p-2 border-2 border-gray-400 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter-icon lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

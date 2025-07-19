import React from "react";
import ctaBackground from "../../assets/image/background2.jpg";

export default function CTA() {
  return (
    <>
      <section class="relative max-w-screen-xl mx-auto py-2 px-3 mt-15 text-white p-8 rounded-md min-h-[400px] flex items-center justify-center text-center overflow-hidden">
        <div class="absolute inset-0 bg-black/60"></div>
        <img
          src={ctaBackground}
          alt=""
          class="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div class="relative max-w-2xl mx-auto text-center text-white">
          <p class="uppercase text-sm tracking-widest mb-2 dm-sans-fonts3">
            Newsletter
          </p>
          <h2 class="text-3xl sm:text-4xl font-bold mb-4 poppins-semibold">
            Mau Belajar Lebih Banyak?
          </h2>
          <p class="mb-6 text-gray-200 dm-sans-fonts">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik hariesok.id
          </p>

          <form
            action="#"
            method="POST"
            class="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-3xl rounded-lg mx-auto bg-white dm-sans-fonts"
          >
            <input
              type="email"
              name="email"
              placeholder="Masukkan Emailmu"
              required
              class="flex-1 px-4 py-3 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-100"
            />
            <button
              type="submit"
              class="bg-yellow-500 hover:bg-yellow-500 text-white font-semibold px-5 py-2 mr-3 rounded-md transition dm-sans-fonts2 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

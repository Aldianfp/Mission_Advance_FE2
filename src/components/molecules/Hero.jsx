import React from "react";
import cardBackground from "../../assets/image/background.jpg";

export default function Hero() {
  return (
    <>
      <section className="relative max-w-screen-xl mx-auto py-2 px-3 mt-15 text-white p-8 rounded-2xl min-h-[400px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <img
          src={cardBackground}
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl poppins-bold">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>
          <p className="dm-sans-fonts3 mt-6 text-sm max-w-2xl">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
          <a
            href="#"
            className="dm-sans-fonts2 mt-8 inline-block bg-green-500 hover:bg-green-600 text-white text-md font-semibold py-3 px-6 rounded-full shadow-lg transition"
          >
            Temukan Video Course untuk Dipelajari!
          </a>
        </div>
      </section>
    </>
  );
}

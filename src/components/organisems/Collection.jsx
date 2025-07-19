import Card from "../molecules/Card";
import { useEffect } from "react";
import useContentsStore from "../../store/store";

export default function Collection() {
  const { contents, fetchContents } = useContentsStore();
  useEffect(() => {
    fetchContents();
  }, [fetchContents]);

  return (
    <>
      <section className="py-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <header className="mb-6">
          <h2 className="text-3xl font-bold poppins-semibold">
            Koleksi Video Pembelajaran Unggulan
          </h2>
          <p className="text-gray-500 mt-2 dm-sans-fonts3">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </header>

        <nav
          className="flex space-x-6 border-b border-gray-50 mb-8"
          aria-label="sec nav"
        >
          <button className="pb-2 border-b-2 border-red-500 text-red-500 font-semibold dm-sans-fonts3">
            Semua Kelas
          </button>
          <button className="pb-2 text-gray-500 hover:text-black transition dm-sans-fonts3">
            Pemasaran
          </button>
          <button className="pb-2 text-gray-500 hover:text-black transition dm-sans-fonts3">
            Desain
          </button>
          <button className="pb-2 text-gray-500 hover:text-black transition dm-sans-fonts3">
            Pengembangan Diri
          </button>
          <button className="pb-2 text-gray-500 hover:text-black transition dm-sans-fonts3">
            Bisnis
          </button>
        </nav>

        {contents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {contents.map((content) => (
              <Card
                key={content.id}
                id={content.id}
                title={content.title}
                subtitle={content.subtitle}
                avatar={content.avatar}
                person={content.person}
                personjob={content.personjob}
                price={content.price ? `Rp.${content.price}` : "Gratis"}
                photos={content.photos || "https://via.placeholder.com/300"}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            Tidak ada konten tersedia.
          </p>
        )}
      </section>
    </>
  );
}

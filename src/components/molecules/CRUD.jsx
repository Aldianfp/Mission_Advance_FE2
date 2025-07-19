import React, { useState } from "react";
import Swal from "sweetalert2";

export default function CRUD({ contents, deleteContent, updateContent }) {
  const [updatedContents, setUpdatedContents] = useState(contents);

  const handleChange = (id, field, value) => {
    setUpdatedContents((prevContents) =>
      prevContents.map((content) =>
        content.id === id ? { ...content, [field]: value } : content
      )
    );
  };

  const handleUpdate = (id) => {
    const updatedContent = updatedContents.find((content) => content.id === id);
    updateContent(id, updatedContent);
  };
  return (
    <>
      <section className="mt-5 py-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center p-5">
          <div className="flex flex-row items-center p-5">
            <h1 className="text-2xl font-semibold mb-4">CRUD Data Content</h1>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {updatedContents.map((content) => (
              <div
                key={content.id}
                className="bg-white shadow-lg rounded-lg p-6 w-64 hover:transform hover:scale-105 transition-transform"
              >
                <div className="mb-4">
                  <label className="text-lg font-semibold">
                    Content Title <span className="text-red-600">*</span> :
                  </label>
                  <input
                    type="text"
                    onChange={(e) =>
                      handleChange(content.id, "title", e.target.value)
                    }
                    value={content.title}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                    placeholder="Card Title"
                  />
                  <label className="text-lg font-semibold">
                    Content SubTitle <span className="text-red-600">*</span> :
                  </label>
                  <input
                    type="text"
                    onChange={(e) =>
                      handleChange(content.id, "subtitle", e.target.value)
                    }
                    value={content.subtitle}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                    placeholder="Subtitle"
                  />
                  <label className="text-lg font-semibold">
                    Content Price <span className="text-red-600">*</span> :
                  </label>
                  <input
                    type="text"
                    onChange={(e) =>
                      handleChange(content.id, "price", e.target.value)
                    }
                    value={content.price}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Price"
                  />
                </div>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 cursor-pointer"
                  onClick={() => {
                    Swal.fire({
                      title: "Apa anda yakin ingin menghapus data ini?",
                      text: "Data tidak bisa dikembalikan setelah dihapus!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, hapus!",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        deleteContent(content.id),
                          Swal.fire({
                            title: "Data Berhasil Dihapus!",

                            icon: "success",
                          });
                      }
                    });
                  }}
                >
                  Hapus
                </button>
                <button
                  className="px-4 py-2 ml-11 bg-blue-500 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
                  onClick={() => {
                    Swal.fire({
                      title: "Ingin Menyimpan Perubahan?",
                      showDenyButton: true,
                      showCancelButton: true,
                      confirmButtonText: "Simpan",
                      denyButtonText: `Jangan Simpan`,
                    }).then((result) => {
                      /* Read more about isConfirmed, isDenied below */
                      if (result.isConfirmed) {
                        handleUpdate(content.id),
                          Swal.fire("Saved!", "", "success");
                      } else if (result.isDenied) {
                        Swal.fire("Changes are not saved", "", "info");
                      }
                    });
                  }}
                >
                  Simpan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

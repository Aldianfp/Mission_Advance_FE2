import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CRUD from "../components/molecules/CRUD";

import useContentsStore from "../store/store";

export default function Admin() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const {
    contents,
    fetchContents,
    addContent,
    updateContent,
    deleteContent,
    loading,
    error,
  } = useContentsStore();

  useEffect(() => {
    fetchContents();
  }, [fetchContents]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="flex justify-end p-4">
        <h1 className="text-xl">Halo, {user?.name}</h1>
        <button
          onClick={logout}
          className=" bg-red-500 text-white px-4 py-2 rounded cursor-pointer ml-5"
        >
          Logout
        </button>
      </div>
      <div className="flex justify-center p-4">
        <h1 className="text-3xl font-semibold">Admin - Manage Contents | </h1>
        <button
          className="px-6 py-2 ml-5 bg-green-500 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
          onClick={addContent}
        >
          Tambahkan Content
        </button>
      </div>

      <CRUD
        contents={contents}
        deleteContent={deleteContent}
        updateContent={updateContent}
      />
    </>
  );
}

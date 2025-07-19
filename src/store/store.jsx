import { create } from "zustand";
import {
  getContents,
  postContent,
  deleteContent,
  putContent,
} from "../service/api";

const newContent = {
  title: "New Learning Video",
  subtitle: "Subtitle of the learning video.",
  avatar: "https://via.placeholder.com/50",
  person: "Admin",
  personjob: "Instructor",
  price: "300",
  photos: "https://via.placeholder.com/600/24f355",
};

const useContentsStore = create((set, get) => ({
  contents: [],
  loading: false,
  error: null,

  fetchContents: async () => {
    set({ loading: true });

    try {
      const response = await getContents(
        "https://686bba5be559eba90873cafa.mockapi.io/content"
      );
      set({ contents: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  addContent: async () => {
    set({ loading: true });

    try {
      const response = await postContent(
        "https://686bba5be559eba90873cafa.mockapi.io/content",
        newContent
      );
      set((state) => ({
        contents: [...state.contents, response.data],
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  updateContent: async (id, data) => {
    const updatedContent = data;
    try {
      await putContent(
        `https://686bba5be559eba90873cafa.mockapi.io/content/${id}`,
        updatedContent
      );
      const state = get();
      const updatedContents = state.contents.map((content) =>
        content.id === id ? { ...content, data } : content
      );
      set(() => ({ contents: updatedContents }));
    } catch (error) {
      set({ error: error.message });
    }
  },
  deleteContent: async (id) => {
    set({ loading: true });

    try {
      await deleteContent(
        `https://686bba5be559eba90873cafa.mockapi.io/content/${id}`
      );

      set((state) => ({
        contents: state.contents.filter((content) => content.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useContentsStore;

// store.ts
import { create } from "zustand";

interface StoreState {
  id: string | null; // Use the User interface here
  updateId: (id: string | null) => void; // Use the User interface for updateUser's parameter
}

const ProjectStore = create<StoreState>((set) => ({
  id: null,
  updateId: (data: string | null) => {
    set((state) => ({ id: data })); // Use the User interface for updateUser's parameter
  },
}));

export default ProjectStore;

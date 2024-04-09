// store.ts
import { create } from "zustand";

// Define a type for the user object
interface User {
  id: string;
  name: string;
  idImage: string;
}

interface StoreState {
  user: User; // Use the User interface here
  updateUser: (user: User) => void; // Use the User interface for updateUser's parameter
}

const UserStore = create<StoreState>((set) => ({
  user: {
    id: "",
    name: "",
    idImage: "",
  },

  updateUser: (data: User) => {
    set((state) => ({ user: data })); // Use the User interface for updateUser's parameter
  },
}));

export default UserStore;

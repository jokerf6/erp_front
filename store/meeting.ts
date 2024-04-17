// store.ts
import { create } from "zustand";

interface StoreState {
  id: string;
  updateId: (data: string) => void;
  users: any; // Use the User interface here
  updateUsers: (users: any) => void; // Use the User interface for updateUser's parameter
}

const MeetingStore = create<StoreState>((set) => ({
  id: "",
  updateId: (data: string) => {
    set((state) => ({ id: data })); // Use the User interface for updateUser's parameter
  },
  users: [],
  updateUsers: (data: any) => {
    set((state) => ({ users: data })); // Use the User interface for updateUser's parameter
  },
}));

export default MeetingStore;

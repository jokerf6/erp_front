// store.ts
import create from "zustand";

interface StoreState {
  TaskSHeight: Array<{
    id: string;
    top: number;
    left: number;
    right: number;
    bottom: number;
  }>;
  UpdateTaskSHeight: (e: any) => void;
  EmptyTaskSHeight: () => void;
}

const TasksHeightStore = create<StoreState>((set) => ({
  TaskSHeight: [],
  EmptyTaskSHeight: () => set({ TaskSHeight: [] }), // Set TaskSHeight to an empty array
  UpdateTaskSHeight: (task) =>
    set((state) => ({
      TaskSHeight: [...state.TaskSHeight, task],
    })),
}));

export default TasksHeightStore;

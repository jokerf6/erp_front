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
}

const TasksHeightStore = create<StoreState>((set) => ({
  TaskSHeight: [],
  UpdateTaskSHeight: (task) =>
    set((state) => ({
      TaskSHeight: state.TaskSHeight.includes(task)
        ? state.TaskSHeight
        : [...state.TaskSHeight, task],
    })),
}));

export default TasksHeightStore;

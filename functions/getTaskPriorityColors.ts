export default function getTaskPriorityColors(priority: string) {
    return priority === "low" 
    ? "bg-priority-low-bg-20 text-priority-low-text"
    : priority === "medium"
      ? "bg-priority-low-bg-20 text-priority-low-text" // TODO: Colors for Medium Priority?
      : priority === "high"
        ? "bg-priority-high-bg-10 text-priority-high-text"
        : "bg-priority-completed-bg-20 text-priority-completed-text"
}
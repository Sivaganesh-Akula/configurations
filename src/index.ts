export function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
}

export interface Task {
  title: string;
  dueDate: Date;
  completed: string;
}

export function calculateTaskProgress(tasks: Array<Task>) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  return (completedTasks / tasks.length) * 100;
}

export function getTaskSummary(tasks: Array<Task>) {
  return tasks.map((task) => ({
    title: task.title,
    dueDate: formatDate(task.dueDate),
    status: task.completed ? "Completed" : "Pending",
  }));
}

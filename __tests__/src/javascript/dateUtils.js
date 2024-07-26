export function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

export function calculateTaskProgress(tasks) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  return (completedTasks / tasks.length) * 100;
}

export function getTaskSummary(tasks) {
  return tasks.map((task) => ({
    title: task.title,
    dueDate: formatDate(task.dueDate),
    status: task.completed ? "Completed" : "Pending",
  }));
}

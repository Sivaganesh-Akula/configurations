import { formatDate, calculateTaskProgress, getTaskSummary } from "./dateUtils";

function main() {
  console.log("Main module loaded");

  const userName = "Siva Ganesh";

  const today = new Date();
  console.log(`Today's date is ${formatDate(today)}`);

  const tasks = [
    { title: "Task 1", dueDate: new Date(), completed: true },
    { title: "Task 2", dueDate: new Date(), completed: false },
  ];

  const progress = calculateTaskProgress(tasks);
  console.log(`Task Progress: ${progress.toFixed(2)}%`);

  const taskSummary = getTaskSummary(tasks);
  console.log("Task Summary:", taskSummary);
}

main();

import { formatDate, calculateTaskProgress, getTaskSummary } from "./dateUtils";
import { greetUser, toUpperCase } from "./stringUtils";

function admin() {
  console.log("Admin module loaded");

  const adminName = "Admin User";
  console.log(greetUser(toUpperCase(adminName)));

  const today = new Date();
  console.log(`Today's date is ${formatDate(today)}`);

  const allTasks = [
    { title: "Task 1", dueDate: new Date(), completed: true },
    { title: "Task 2", dueDate: new Date(), completed: false },
    { title: "Task 3", dueDate: new Date(), completed: true },
    { title: "Task 4", dueDate: new Date(), completed: false },
  ];

  const progress = calculateTaskProgress(allTasks);
  console.log(`Overall Task Progress: ${progress.toFixed(2)}%`);

  const taskSummary = getTaskSummary(allTasks);
  console.log("All Tasks Summary:", taskSummary);
}

admin();

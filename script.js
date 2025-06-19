const tasks = [
  "Go skydiving",
  "Visit Japan",
  "Write a book",
  "Run a marathon",
  "Learn to play guitar",
  "Watch Northern Lights",
  "Go on a road trip across USA",
  "Scuba dive in the Great Barrier Reef",
  "Build my dream house",
  "Learn a new language"
];

const bucketList = document.getElementById("bucketList");

tasks.forEach(task => {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const label = document.createElement("span");
  label.textContent = task;

  checkbox.addEventListener("change", () => {
    label.classList.toggle("completed", checkbox.checked);
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  bucketList.appendChild(li);
});

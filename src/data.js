export default class Data {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.index !== id);
    this.updateStorage();
  }

  removeCompletedTasks(status) {
    this.tasks = this.tasks.filter((task) => task.completed !== status);
    this.updateStorage();
  }

  updateStorage() {
    if (this.tasks) {
      for (let i = 0; i < this.tasks.length; i += 1) {
        this.tasks[i].index = i + 1;
      }
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      return;
    }
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  updateTaskStatus(id, eventState) {
    this.tasks[id - 1].completed = eventState;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  editTask(id, newDescription) {
    this.tasks[id - 1].description = newDescription;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

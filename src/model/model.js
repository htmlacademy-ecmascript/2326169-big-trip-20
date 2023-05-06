import { getTasks } from '../mock/tasks';

const TASK_COUNT = 5;

export default class TasksModel {
  tasks = Array.from({length: TASK_COUNT}, getTasks);

  getTasks() {
    return this.tasks;
  }
}

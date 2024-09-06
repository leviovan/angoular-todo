import { Status } from "../types/todo";

export const toggleStatus = (todoStatuses: Status): Status => {
  return todoStatuses === 'active' ? 'completed' : 'active'
}
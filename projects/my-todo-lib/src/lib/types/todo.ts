export type Status = 'active' | 'completed' | ''

export interface Todo {
  id: number
  title: string,
  status: Status,
}
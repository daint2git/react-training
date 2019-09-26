export interface ITodo {
  id: number
  name: string
  isDone: boolean
}

export interface ITodoState {
  todos: ITodo[]
}

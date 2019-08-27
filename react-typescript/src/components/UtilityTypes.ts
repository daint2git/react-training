/**
 * Partial<T>
 */
// interface Todo {
//   title: string
//   description: string
// }

// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Object {
//   return { ...todo, ...fieldsToUpdate }
// }

// const todo1 = {
//   title: 'organize desk',
//   description: 'clear clutter',
// }

// const todo2 = updateTodo(todo1, {
//   description: 'throw out trash',
// })

// console.log(todo2)

/**
 * Readonly<T>
 */
// interface Todo {
//   title: string
// }

// const todo: Readonly<Todo> = {
//   title: 'Delete inactive users',
// }

// todo.title = 'Hello'

/**
 * Record<K,T>
 */
// interface PageInfo {
//   title: string
// }

// type Page = 'home' | 'about' | 'contact'

// const x: Record<Page, PageInfo> = {
//   about: { title: 'about' },
//   contact: { title: 'contact' },
//   home: { title: 'home' },
// }

// console.log(x)

/**
 * Pick<T,K>
 */
// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }

// type TodoPreview = Pick<Todo, 'title' | 'completed'>

// const todo: TodoPreview = {
//   title: 'Clean room',
//   completed: false,
// }

// console.log(todo)

/**
 * Omit<T,K>
 */
// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }

// type TodoPreview = Omit<Todo, 'description'>

// const todo: TodoPreview = {
//   title: 'Clean room',
//   completed: false,
// }

// console.log(todo)

import BirdStore from './BirdStore'
import RepoStore from './RepoStore'
import LoaderStore from './LoaderStore'
import TodoStore2 from './TodoStore2'
import ObservableTodoStore from './ObservableTodoStore'
import TodoStore from './TodoStore'

TodoStore2.addTodo('read MobX tutorial')
console.log(TodoStore2.report())

TodoStore2.addTodo('try MobX')
console.log(TodoStore2.report())

TodoStore2.todos[0].completed = true
console.log(TodoStore2.report())

TodoStore2.todos[1].task = 'try MobX in own project'
console.log(TodoStore2.report())

TodoStore2.todos[0].task = 'grok MobX tutorial'
console.log(TodoStore2.report())

console.log('*****')

ObservableTodoStore.addTodo('read MobX tutorial')
ObservableTodoStore.addTodo('try MobX')
ObservableTodoStore.todos[0].completed = true
ObservableTodoStore.todos[1].task = 'try MobX in own project'
ObservableTodoStore.todos[0].task = 'grok MobX tutorial'

console.log('*****')

const stores = {
  BirdStore,
  RepoStore,
  LoaderStore,
  TodoStore,
}

if (process.env.NODE_ENV === 'development') {
  // For easier debugging
  window.__APP_STATE__ = stores
}

export default stores

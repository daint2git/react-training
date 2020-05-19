import { observable, computed, action, autorun } from 'mobx'

class Todo {
  id = Date.now() + Math.random()
  @observable title = ''
  @observable finished = false

  constructor(title) {
    this.title = title
  }
}

class TodoStore {
  @observable todos = []

  constructor() {
    autorun(() => {
      console.log('Tasks left: ' + this.unfinishedTodoCount)
    })
  }

  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length
  }

  @action
  addTodo() {}
}

const todoStore = new TodoStore()

todoStore.todos.push(new Todo('Study Reactjs'), new Todo('Study Vuejs'))

export default todoStore

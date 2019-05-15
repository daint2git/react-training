import app from 'firebase/app'
import 'firebase/database'

import { firebaseConfig } from './keys'

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
    this.database = app.database()
  }

  todos = () => this.database.ref(`todos`)
}

export default new Firebase()

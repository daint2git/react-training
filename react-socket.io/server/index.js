const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const port = (process.env.PORT || 6969)
server.listen(port, () => console.log('Server running in port ' + port))

const usersOnline = []

io.on('connection', socket => {
  console.log(`${socket.id} connected`)

  // lắng nghe khi có người login
  socket.on('login', name => {
    // kiểm tra xem tên đã tồn tại hay chưa
    if (usersOnline.find(it => it.name === name)) {
      socket.emit('loginFaill')
    } else {
      const newUser = { id: socket.id, name }
      socket.emit('loginSuccess', newUser)
      usersOnline.push(newUser)
      io.sockets.emit('updateUsersOnline', usersOnline)
    }
  })

  // lắng nghe khi người dùng thoát
  socket.on('disconnect', () => {
    console.log(`${socket.id} disconnected`)
    const index = usersOnline.findIndex(it => it.id === socket.id)
    usersOnline.splice(index, 1)
    io.sockets.emit('updateUsersOnline', usersOnline)
  })

  // lắng nghe khi người dùng gửi tin nhắn mới
  socket.on('newMessage', message => io.sockets.emit('newMessage', message))
})

app.get('/', (req, res) => res.send('Home page. Server running okay.'))
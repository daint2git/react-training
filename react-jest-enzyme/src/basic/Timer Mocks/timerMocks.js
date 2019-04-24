function timerGame(callback) {
  console.log('Ready....go!')
  setTimeout(() => {
    console.log('Times up -- stop!')
    callback && callback()
  }, 1000)
}

function infiniteTimerGame(callback) {
  console.log('infiniteTimerGame Ready....go!')

  setTimeout(() => {
    console.log('infiniteTimerGame Times up! 10 seconds before the next game starts...')
    callback && callback()

    // Schedule the next game in 10 seconds
    setTimeout(() => {
      console.log('infiniteTimerGame inner')
      infiniteTimerGame(callback)
    }, 10000)
  }, 1000)
}

export { timerGame, infiniteTimerGame }

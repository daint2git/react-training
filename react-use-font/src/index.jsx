import React from 'react'
import ReactDOM from 'react-dom'
import webfontloader from 'webfontloader'
import './index.css'

function App() {

  React.useEffect(() => {
    webfontloader.load({
      google: {
        families: ['Droid Sans', 'Chilanka']
      }
    })
  }, [])

  return (
    <div>
      <div className="font-link">font link</div>
      <div className="font-loader">font loader</div>
      <div style={{ fontFamily: 'Chilanka' }}>font loader</div>
      <div className="font-face-gm">font face</div>
    </div>
  )
}

ReactDOM.render(<App />,  document.getElementById('app'),)
import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const Msg = ({ closeToast }) => (
  <div>
    Lorem ipsum dolor
    <button type="button">Retry</button>
    <button type="button" onClick={closeToast}>
      Close
    </button>
  </div>
)

class Toast extends Component {
  notifyA = () => toast('Wow so easy !', { containerId: 'A' })

  notifyB = () => toast('Wow so easy !', { containerId: 'B' })

  notifyC = () => {
    toast('Default Notification !')

    toast.success('Success Notification !', {
      position: toast.POSITION.TOP_CENTER,
    })

    toast.error('Error Notification !', {
      position: toast.POSITION.TOP_LEFT,
    })

    toast.warn('Warning Notification !', {
      position: toast.POSITION.BOTTOM_LEFT,
    })

    toast.info('Info Notification !', {
      position: toast.POSITION.BOTTOM_CENTER,
    })

    toast('Custom Style Notification with css class!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: 'foo-bar',
    })
  }

  closeAfter15 = () => toast('YOLO', { autoClose: 15000 })

  closeAfter7 = () => toast('7 Kingdoms', { autoClose: 7000 })

  render() {
    return (
      <div>
        <ToastContainer
          enableMultiContainer
          containerId={'A'}
          position={toast.POSITION.BOTTOM_LEFT}
        />
        <ToastContainer
          enableMultiContainer
          containerId={'B'}
          position={toast.POSITION.TOP_RIGHT}
        />

        <button type="button" onClick={this.notifyA}>
          Notify A !
        </button>
        <button type="button" onClick={this.notifyB}>
          Notify B !
        </button>
        <button type="button" onClick={this.notifyC}>
          Notify C !
        </button>
        <button type="button" onClick={this.closeAfter15}>
          Close after 15 seconds
        </button>
        <button type="button" onClick={this.closeAfter7}>
          Close after 7 seconds
        </button>
        <button type="button" onClick={() => toast(<Msg />)}>
          Hello
        </button>

        <ToastContainer autoClose={8000} />
      </div>
    )
  }
}

export default Toast

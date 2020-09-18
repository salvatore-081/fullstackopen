import React from "react"

const Notification = ({ message, messageType }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={message.includes("Error") ? "messageRed" : "messageGreen"}>
      {message}
    </div>
  )
}

export default Notification

import React from "react"

const Find = props => {
  return (
    <React.Fragment>
      find countries{" "}
      <input value={props.find} onChange={props.handleFindChange} />
    </React.Fragment>
  )
}

export default Find

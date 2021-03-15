import React from 'react'

export default function Loading() {
  return (
    <div style={{ margin: 20 }}>
      <img src={window.location.origin + "/load.gif"} alt="loading" />
    </div>
  )
}

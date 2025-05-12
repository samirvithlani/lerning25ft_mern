import React from 'react'

export const Footer = () => {

    var footerStyle = {
        backgroundColor: "lightgreen",
        height: "50px",
        width: "100%",
        position: "fixed",
        bottom: "0px",
        textAlign: "center",
        zIndex: "1"
    }

  return (
    <div style={footerStyle}>
        <h1>FOOTER</h1>
    </div>
  )
}

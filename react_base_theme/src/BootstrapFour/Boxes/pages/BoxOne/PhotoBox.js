import React from 'react'
import PhotoTravel from '../../components/PhotoPlaceholder/PhotoTravel';


const boxTwo = {
  display: "flex",
  justifyContent: "center",
  margin: "10px",
  padding: "10px",
  minWidth: "230px",
  height: "295px",
  border: "1px solid #eee",
  position: "relative",
}
const caption = {
  position: "absolute",
  top: "55%",
  color: "#fff",
  background: "rgb(248, 249, 250, 0.21)",
  width: "100%",
  textAlign: "center",
  fontWeight: "200"
}

function PhotoBox() {
  return (
    <div style={boxTwo}>
      <PhotoTravel
        className="d-block w-100"
        width="230px"
        height="275px"
      />
      <h2 style={caption}>Text Image</h2>
    </div>
  )
}

export default PhotoBox

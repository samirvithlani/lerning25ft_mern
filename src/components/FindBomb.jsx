import React, { useState, useMemo } from "react";

export const FindBomb = () => {
  const gridSize = 5;
  const totalTiles = gridSize * gridSize;
  const [clickedTitles, setclickedTitles] = useState([]) //rerender

  const handleClick = (index)=>{
    //alert(index) index = 0
    setclickedTitles([...clickedTitles,index])
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>FIND BOMB</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, 50px)`,
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: totalTiles }).map((_, index) => {
          return (
            <div
              key={index}
              //onClick={() => handleTileClick(index)}
              onClick={()=>{handleClick(index)}}
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                //backgroundColor: clickedTiles.includes(index) ? "#ddd" : "#fff",
                backgroundColor:clickedTitles.includes(index) ? "#ddd":"#fff",
                cursor: "pointer",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

//export default FindBomb;

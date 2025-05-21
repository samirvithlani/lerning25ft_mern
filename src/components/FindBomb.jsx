import React, { useState, useMemo } from "react";

export const FindBomb = () => {
  const gridSize = 5;
  const totalTiles = gridSize * gridSize;
  const [clickedTitles, setclickedTitles] = useState([]) //rerender
  const [gameOver, setgameOver] = useState(false)
  const [message, setmessage] = useState("find bomb")

  
  var bombPos = useMemo(()=>Math.floor(Math.random()*totalTiles),[])
  
  console.log(bombPos)

  const handleClick = (index)=>{
    //alert(index) index = 0
    setclickedTitles([...clickedTitles,index])
    setmessage("searching....")
    if(index == bombPos){
        setgameOver(true)
        setmessage("game over")
        window.location.reload()
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{message}</h1>
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
            >
                {
                    gameOver && (bombPos == index && "💣")
                }
            </div>
          );
        })}
      </div>
    </div>
  );
};

//export default FindBomb;

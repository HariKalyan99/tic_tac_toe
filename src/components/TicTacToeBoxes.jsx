import React from "react";

const TicTacToeBoxes = ({ box, collectUser }) => {
  return (
    <>
      {box?.active ? (
        <div
          style={{
            width: "100px",
            height: "100px",
            border: "1px solid",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(255, 210, 0)",
          }}
        >
          <span style={{ fontSize: "3rem" }}>{box.user}</span>
        </div>
      ) : (
        <div
          style={{
            width: "100px",
            height: "100px",
            border: "1px solid",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
          }}
          onClick={() => collectUser(box.id)}
        >
          <span style={{ fontSize: "3rem" }}>{box.user}</span>
        </div>
      )}
    </>
  );
};

export default TicTacToeBoxes;

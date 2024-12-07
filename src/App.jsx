import { useEffect, useState } from "react";
import TicTacToeBoxes from "./components/TicTacToeBoxes";

function App() {
  const [ticTacBoxes, setTicTacBoxes] = useState([]);
  const [showUser, setShowUser] = useState(false);
  const [userReflect, setUserReflect] = useState("");

  useEffect(() => {
    let arr = [];
    for (let i = 1; i < 10; i++) {
      let ticObj = {
        id: i,
        user: "",
        active: false,
      };
      arr.push(ticObj);
    }
    setTicTacBoxes(arr);
  }, []);

  useEffect(() => {
    if(userReflect > 0){
      if(showUser){
        ticTacBoxes.filter(x => x.id === userReflect)[0].user = "X";
        ticTacBoxes.filter(x => x.id === userReflect)[0].active = true;
        setTicTacBoxes([...ticTacBoxes]);
      }else{
        ticTacBoxes.filter(x => x.id === userReflect)[0].user = "O";
        ticTacBoxes.filter(x => x.id === userReflect)[0].active = true;
        setTicTacBoxes([...ticTacBoxes]);
      }
    }
  }, [showUser])

  const ticTacTransform = (arr) => {
    // console.log(arr);
  }

  const collectUser = (id) => {
    setUserReflect(id);
    setShowUser(!showUser);
  }

  return (
    <div
      style={{
        width: "320px",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {ticTacBoxes?.length > 0 &&
        ticTacBoxes?.map((box, _) => <TicTacToeBoxes collectUser={collectUser} key={_} box={box} />)}
    </div>
  );
}

export default App;

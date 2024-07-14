import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const checkWinner = (currentState) => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (currentState[a] != null && currentState[a] === currentState[b] && currentState[a] === currentState[c]) {
        return currentState[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (state[index] != null || winner || isDraw) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "0";
    const gameWinner = checkWinner(copyState);
    setState(copyState);
    setIsXTurn(!isXTurn);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (!copyState.includes(null)) {
      setIsDraw(true);
    }
  };

  const gameRestart = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
    setIsDraw(false);
  };

  return (
    <div className="bodycontainer">
      <div className="left">
        <div className="leftcontainer">
          <div className="board-container">
            <div className="up">
              <h3>Tic-Tac-Toe</h3>
            </div>
            <div className="middle">
              <div className="board-row">
                <Square onClick={() => handleClick(0)} value={state[0]} />
                <Square onClick={() => handleClick(1)} value={state[1]} />
                <Square onClick={() => handleClick(2)} value={state[2]} />
              </div>
              <div className="board-row">
                <Square onClick={() => handleClick(3)} value={state[3]} />
                <Square onClick={() => handleClick(4)} value={state[4]} />
                <Square onClick={() => handleClick(5)} value={state[5]} />
              </div>
              <div className="board-row">
                <Square onClick={() => handleClick(6)} value={state[6]} />
                <Square onClick={() => handleClick(7)} value={state[7]} />
                <Square onClick={() => handleClick(8)} value={state[8]} />
              </div>
            </div>
            <div className="down">
              <button onClick={gameRestart} className="restartbtn">
                Restart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="rightcontainer">
          <div className="up">
            <h3>Logs</h3>
            <h3>{winner ? `Winner: ${winner}` : isDraw ? "Match Draw" : `${isXTurn ? "X" : "0"} Turn`}</h3>
          </div>
          <div className="middleright">
            {winner && <div className="winner-message">Congratulations! {winner} wins!</div>}
            {isDraw && <div className="draw-message">It's a draw!</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;

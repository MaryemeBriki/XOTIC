import React, { createContext, useState, useCallback } from 'react';

const MyContext = createContext();

const initialGameState = {
  currentPlayer: 'X',
  board: Array(9).fill(null),
  winner: null,
};

const MyContextProvider = ({ children }) => {
  const [gameState, setGameState] = useState(initialGameState);

  const makeMove = useCallback(
    (index) => {
      // Check if the move is valid and the game is still ongoing
      if (!gameState.board[index] && !gameState.winner) {
        const newBoard = [...gameState.board];
        newBoard[index] = gameState.currentPlayer;

        // Check for a winner after each move
        const winner = calculateWinner(newBoard);

        setGameState((prevGameState) => ({
          ...prevGameState,
          board: newBoard,
          currentPlayer: prevGameState.currentPlayer === 'X' ? 'O' : 'X',
          winner,
        }));
      }
    },
    [gameState]
  );

  const resetGame = useCallback(() => {
    setGameState(initialGameState);
  }, []);
  const setWinner = useCallback((newWinner) => {
    setGameState((prevGameState) => ({
      ...prevGameState,
      winner: newWinner,
    }));
  }, []);
  // Helper function to check for a winner
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  return (
    <MyContext.Provider value={{ gameState, makeMove, resetGame ,setWinner}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };

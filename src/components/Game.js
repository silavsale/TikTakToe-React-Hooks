import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helpers';

const styles = {
    width: '200px',
    margin: '20px auto'
}
const button = {
    textAlign: 'center',
    color: 'white',
    fontSize: '25px',
    backgroundColor: 'lightblue',
    width: '200px',
    margin: '20px auto',
    border: '2px solid darkblue',
    borderRadius: '10px',
    padding: '10px'
}

const divStyle = {
    margin: 'auto',
    textAlign: 'center',
    color: 'white',
    fontSize: '25px',
    backgroundColor: 'lightblue',
    padding: '10px',
    border: '2px solid darkblue',
    borderRadius: '10px',
};

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXiNext] = useState(true);
    const winner = calculateWinner(board);


    const handleClick = i => {
        const boardCopy = [...board];
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXiNext(!xIsNext);
    }
    const jumpTo = () => {

    }
    const renderMoves = () => (
        <button style={button} onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )

    return (
        <>
            <h1 className="board">
                TIC TAC TOE
            </h1>
            <Board squares={board} onClick={handleClick} />
            <div style={styles} >
                <p style={divStyle}>{winner ? 'Winned: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game;
import React, { useState } from 'react';
import './game.css'
import Board from '../Board/board';
import {calculateWinner} from '../utils/winner';
import Step from '../Step/step';

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index) =>{
        const boardCopy = [...board]
        // Определить был ли клик по ячейке или игра закончилась
            if(winner || boardCopy[index]) return;
        // Определить чей ход
            boardCopy[index] = xIsNext ? 'X' : 'O';
        // Обносить стейт
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return (
            <button className='start__btn' onClick={() => setBoard(Array(9).fill(null))}>Новая игра</button>
        )
    }
  
    return (
        <div className='wrapper'>
            {startNewGame()} 
            <Board squares = {board} click = {handleClick}/>
            {
                 board.includes(null)
                ? <Step winner={winner} xIsNext={xIsNext}/>
                : <p className='stepXO'>Ничья ХО</p>
            }
           
            {/* <p className='game__info'>
            {
             winner ? 'Победил ' + winner : 'Сейчас ходит ' + ( xIsNext ? 'X' : 'O')
            }
            {console.log(xIsNext + ' game')}
            {console.log(winner + ' game')}
            </p> */}
        </div>
    );
}

export default Game;

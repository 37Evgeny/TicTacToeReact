import React, { useState } from 'react';
import './game.css'
import Board from '../Board/board';
import {calculateWinner} from '../utils/winner';
import Step from '../Step/step';
import Toggle from '../Toggle/toggle';

const Game = () => {
    //стейт доски создаем массив из девяти ячеек
    const [board, setBoard] = useState(Array(9).fill(null));
    // определяем чей ход
    const [xIsNext, setXIsNext] = useState(true);
    // определение победителя
    const winner = calculateWinner(board);
    // стейт темы два значения 
    const [theme, setTheme] = useState("dark");

    // Изменение темы
    const switchTheme = () => {
        setTheme((cur) => (cur === 'light' ? 'dark' : 'light'));
    };

    // определяем клип по ячейке и чей ход
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
    // Очищает поле
    const startNewGame = () => {
        return (
            <button className='start__btn' onClick={() => setBoard(Array(9).fill(null))}>Новая игра</button>
        )
    }
  
    return (
        <div className='wrapper' id={theme}>
            <Toggle switchTheme = {switchTheme}/>
            {startNewGame()} 
            <Board squares = {board} click = {handleClick}/>
            {
                 board.includes(null)
                ? <Step winner={winner} xIsNext={xIsNext}/>
                : <p className='stepXO'>Ничья ХО</p>
            }
        </div>
    );
}

export default Game;

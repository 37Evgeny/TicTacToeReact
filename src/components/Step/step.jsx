import React from 'react';
import './step.css'

const Step = ({winner, xIsNext}) => {

    let stepWinner = winner;
    let stepXIsNext = xIsNext;
    
    return (
        <p className='game__info'>
        {
             stepWinner ? 'Победил ' + stepWinner : 'Сейчас ходит ' + ( stepXIsNext ? 'X' : 'O')
        }
    </p>
    );
}

export default Step;

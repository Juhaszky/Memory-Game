import React, { useEffect, useState } from 'react';
import Card from '../card/card';
import { useSelector } from 'react-redux';
const Board = () => {
    const level = useSelector(state => state.settings.level);
    const [cardAmount, setCardAmount] = useState(0);
    useEffect(() => {
        switch (+level) {
            case 0:
                setCardAmount(8);
                break;
            case 1:
                setCardAmount(12);
                break;
            case 2:
                setCardAmount(14);
                break;
            default:
                setCardAmount(16);
        }
    }, [level]);



    return (
        <div className="game-board flex flex-wrap gap-3 justify-center">
            {Array.from({ length: cardAmount }).map((card, idx) =>
                (<Card key={idx} cardNumber={idx}/>))}
        </div>
    );
}

export default Board;

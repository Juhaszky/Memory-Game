import React, { useEffect, useState } from 'react';
import Card from '../card/card';
import { useSelector } from 'react-redux';
const Board = () => {
    const level = useSelector(state => state.settings.level);
    const [cardAmount, setCardAmount] = useState(0);
    useEffect(() => {
        switch (+level) {
            case 0:
                setCardAmount(4);
                break;
            case 1:
                setCardAmount(6);
                break;
            case 2:
                setCardAmount(8);
                break;
            default:
                setCardAmount(4);
        }
    }, [level]);



    return (
        <div className="game-board flex flex-wrap gap-3 justify-center">
            {Array.from({ length: cardAmount }).map((card, idx) =>
                (<Card key={idx} />))}
        </div>
    );
}

export default Board;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { flipCard, resetFlips } from "../../features/game/gameSlice";

const Card = ({ cardNumber }) => {
    const dispatch = useDispatch();
    const flippedCards = useSelector(state => state.game.flippedCards);

    const isSelected = flippedCards.includes(cardNumber);
    const twoSelected = flippedCards.length === 2;

    const selectCard = () => {
        if (flippedCards.includes(cardNumber)) return;
        const willBeSecondFlip = flippedCards.length === 1;

        dispatch(flipCard(cardNumber));

        if (willBeSecondFlip) {
            setTimeout(() => {
                dispatch(resetFlips());
            }, 1000);
        }
        console.log(`selected card: ${cardNumber}`);
    }
    return (

        <div onClick={selectCard} className={`card flex w-full justify-items items-center sm:w-52 w-24 sm:h-52 h-40 bg-slate-400 p-3 rounded-md shadow-lg ${isSelected ? 'bg-red-200' : ''} ${twoSelected ? 'pointer-events-none' : ''}`}>
            <p>Card Title - {cardNumber}</p>
        </div>
    )
}
export default Card;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { flipCard, resetFlips, setRevealCard } from "../../features/game/gameSlice";

const Card = ({ cardNumber, image }) => {
    const dispatch = useDispatch();
    const flippedCards = useSelector(state => state.game.flippedCards);
    const revealedCards = useSelector(state => state.game.revealedCards);
    const gameIsRunning = useSelector(state => state.game.gameStatus);

    const isSelected = flippedCards.find((cardData) => cardData.cardNumber === cardNumber);
    const alreadyFound = revealedCards.find((cardData) => cardData.cardNumber === cardNumber);
    const twoSelected = flippedCards.length === 2;


    const selectCard = () => {
        if (gameIsRunning !== 'playing') return;

        if (flippedCards.find((cardData) => cardData.cardNumber === cardNumber)) return;
        const willBeSecondFlip = flippedCards.length === 1;

        dispatch(flipCard({ cardNumber: cardNumber, photoId: image.id }));
        if (willBeSecondFlip) {
            if (flippedCards.find((cardData) => cardData.photoId === image.id)) {
                dispatch(setRevealCard([flippedCards[0], { cardNumber: cardNumber, photoId: image.id }]));
            }
            setTimeout(() => {
                dispatch(resetFlips());
            }, 1000);

        }
    }
    return (

        <div onClick={selectCard} className={`card flex w-full justify-center items-center sm:w-52 w-24 sm:h-52 h-40 bg-slate-400 p-3 rounded-md shadow-lg ${twoSelected ? 'pointer-events-none' : ''}`}>
            {/* <p>Card Title - {cardNumber}</p> */}
            <img src={image?.src} className={`  w-15 h-15 ${isSelected || alreadyFound ? '' : 'hidden'} `}></img>
        </div>
    )
}
export default Card;
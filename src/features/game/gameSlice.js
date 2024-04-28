import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: "game",
    initialState: {
        gameStatus: "stopped",
        cards: 8,
        flippedCards: [],
        revealedCards: [],
        images: []
    },
    reducers: {
        flipCard: (state, action) => {
            if (state.flippedCards.length === 2) state.flippedCards = []; // Return state if two cards are already flipped
            const cardNumber = action.payload; // Assuming payload is the card number or identifier
            if (state.flippedCards.includes(cardNumber)) {
                // Remove the card from flippedCards array
                state.flippedCards = state.flippedCards.filter(card => card !== cardNumber);
            } else {
                // Add the card to flippedCards array
                state.flippedCards = [...state.flippedCards, cardNumber];
            }
        },
        resetFlips: (state) => {
            state.flippedCards = [];
        },
        startGame: (state) => {
            state.gameStatus = "playing"
        },
        stopGame: (state) => {
            state.gameStatus = "stopped";
            state.revealedCards = [];
            state.images = [];
        },
        setImage: (state, action) => {
            const newImage = action.payload;
            state.images = [...state.images, newImage];
        },
        setCard: (state, action) => {
            state.cards = action.payload;
        },
        setCardDefault: (state) => {
            state.cards = 8;
        },
        setRevealCard: (state, action) => {
            const newCards = action.payload;
            state.revealedCards = [...state.revealedCards, ...newCards];
        }
    }
});
export const { flipCard, resetFlips, startGame, stopGame, setImage, setCard, setRevealCard } = gameSlice.actions

export default gameSlice.reducer
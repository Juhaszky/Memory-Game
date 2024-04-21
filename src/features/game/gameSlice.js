import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: "game",
    initialState: {
        gameStatus: "playing" | "stopped",
        flippedCards: []
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
        }
    }
});
export const { flipCard, resetFlips } = gameSlice.actions

export default gameSlice.reducer
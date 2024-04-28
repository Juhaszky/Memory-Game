import React, { useEffect, useState } from 'react';
import Card from '../card/card';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setImage, setCard } from '../../features/game/gameSlice';

const Board = () => {
    const dispatch = useDispatch();
    const selectedLevel = useSelector(state => state.settings.level);
    const totalCards = useSelector(state => state.game.cards);
    //const [totalCards, setTotalCards] = useState(8);
    const fetchedImages = useSelector(state => state.game.images);

    useEffect(() => {
        switch (+selectedLevel) {
            case 0:
                dispatch(setCard(8));
                //setTotalCards(8);
                break;
            case 1:
                dispatch(setCard(12));
                //setTotalCards(12);
                break;
            case 2:
                dispatch(setCard(14));
                //setTotalCards(14);
                break;
            default:
                dispatch(setCard(16));
            //setTotalCards(16);
        }

    }, [selectedLevel]);

    useEffect(() => {

        const remainingImagesToFetch = calculateRemainingImages();
        if (remainingImagesToFetch > 0) {
            fetchImageForLevel(remainingImagesToFetch).then((data) => {
                const images = data.photos.map((photo) => ({
                    src: photo.src.small,
                    id: photo.id
                }
                ));
                console.log(images);
                const duplicatedImages = duplicateImageArr(images);
                //duplicatedImages.forEach((img) => dispatch(setImage(img)));
                const shuffledImages = shuffleArray(duplicatedImages);
                shuffledImages.forEach((img) => dispatch(setImage(img)));
            })
        }
    }, [totalCards]);

    const calculateRemainingImages = () => {
        const fetchedImagesCount = fetchedImages.length / 2;
        const requiredImagesCount = totalCards / 2;
        return requiredImagesCount - fetchedImagesCount;
    };
    const duplicateImageArr = (arr) => {
        return arr.reduce((acc, current) => [...acc, current, current], []);
    };
    const shuffleArray = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    const fetchImageForLevel = async (remainingImagesToFetch) => {

        const response = await axios.get(`https://api.pexels.com/v1/search?query=animals&per_page=${remainingImagesToFetch}`, {
            headers: {
                "Authorization": "Ggjn6fkS1QasVdoyef5sFKjyfnyJabzNgFTTXkxdomw6nRJAFPCA3Q9z"
            }
        });
        return response.data;
    }
    return (
        <div className="game-board flex flex-wrap gap-3 justify-center">
            {Array.from({ length: totalCards }).map((card, idx) =>
                (<Card key={idx} cardNumber={idx} image={fetchedImages[idx]} />))}
        </div>
    );
}

export default Board;

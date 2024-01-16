
import geographyImg from './images/geography.jpg';
import historyImg from './images/history.jpg';
import sportsImg from './images/sports.jpg';
import fileAndTvImg from './images/film_and_tv.jpg';
import foodAndDrinkImg from './images/food_and_drink.jpg';
import scienceImg from './images/science.jpg'
import generalKnowledgeImg from './images/general_knowledge.jpg';

const criteriaData = [
    {
        categoryParams: 'general_knowledge',
        imageSrc: generalKnowledgeImg,
        category: 'General Knowledge'
    },

    {
        categoryParams: 'science',
        imageSrc: scienceImg,
        category: 'Science'
    },

    {
        categoryParams: 'food_and_drink',
        imageSrc: foodAndDrinkImg,
        category: 'Foods & Drinks'
    },

    {
        categoryParams: 'film_and_tv',
        imageSrc: fileAndTvImg,
        category: 'Film & TV'
    },

    {
        categoryParams: 'geography',
        imageSrc: geographyImg,
        category: 'Geography'
    },

    {
        categoryParams: 'history',
        imageSrc: historyImg,
        category: 'History'
    },

    {
        categoryParams: 'sport_and_leisure',
        imageSrc: sportsImg,
        category: 'Sports'
    }

]

export default criteriaData;
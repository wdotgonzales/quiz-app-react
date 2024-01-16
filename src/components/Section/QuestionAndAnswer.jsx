import './css/QuestionAndAnswer.css';
import { useState, useEffect, useRef } from 'react';
const QuestionAndAnswer = ({ triviaQuestions, setTriviaQuestions, setIsTriviaChosen }) => {

    const [currentQuestion, setCurrentQuestion] = useState();
    const [currentChoices, setCurrentChoices] = useState();
    const [didQuizStart, setDidQuizStart] = useState(false);

    const [round, setRound] = useState(0);
    const [defaultRoundCount, setDefaultRoundCount] = useState();

    const [timeLimit, setTimeLimit] = useState(20);
    const [intervalId, setIntervalId] = useState(null);
    const [score, setScore] = useState(0);

    const chosenChoice = useRef();

    function mergeAndShuffle(item, array) {
        // Merge the item into the array
        const newArray = [...array, item];
        // Shuffle the array
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    function newRound() {
        setRound((currentRound) => {
            const newRound = currentRound + 1;
            return newRound;
        });
    }

    function newQuestionsAndChoices() {
        setCurrentQuestion(triviaQuestions[0]);
        setCurrentChoices(mergeAndShuffle(triviaQuestions[0].correctAnswer, triviaQuestions[0].incorrectAnswers))
        setDidQuizStart(true);
    }

    useEffect(() => {
        if (triviaQuestions.length > 0) {
            newQuestionsAndChoices();

            if (!defaultRoundCount) {
                setDefaultRoundCount(triviaQuestions.length)
            }
        } else {
            setDidQuizStart(false);
        }
    }, [triviaQuestions])


    useEffect(() => {
        if (currentQuestion && currentChoices) {
            newRound();
        }
    }, [currentQuestion, currentChoices])

    useEffect(() => {
        if (timeLimit <= 0) {
            getAnswer('');
        }
    }, [timeLimit])

    function getAnswer(choice) {
        checkIfAnswerIsCorrect(choice);
        chosenChoice.current.classList.remove('hover:bg-white')
        chosenChoice.current.classList.add('bg-green-500');
        chosenChoice.current.classList.add('text-white');
        setTimeout(() => {
            setTriviaQuestions((prevQuestions) => prevQuestions.slice(1));
        }, 1500);
        setTimeLimit(20);
        clearInterval(intervalId)

    }

    function countDownTimeLimit() {
        const intrValId = setInterval(() => {
            setTimeLimit((prevTime) => {
                return prevTime - 1;
            })
        }, 1000);

        setIntervalId(intrValId)
    }

    useEffect(() => {
        if (round) {
            countDownTimeLimit();
        }
    }, [round])

    function checkIfAnswerIsCorrect(choice) {
        if (triviaQuestions[0].correctAnswer === choice) {
            setScore((prevScore) => {
                return prevScore + 1;
            })
        }
    }
    return (
        <div className="mt-5 max-w-[95%] m-auto">
            {
                didQuizStart
                    ?
                    <>
                        <div className='flex justify-between mb-3'>
                            <p className='text-[18px]'>Round : <b>{round} / {defaultRoundCount}</b></p>
                            <p className='text-[18px]'>Time Left : <span className='bg-red-700 text-white pt-[10px] pl-[10px] pr-[10px] pb-[7px] rounded-full'>{timeLimit}</span></p>
                        </div>
                        <p className="text-center text-[28px] mb-6">{currentQuestion.question.text}</p>
                        <div>
                            {
                                currentChoices
                                    .map((choice) => {
                                        console.log(currentQuestion.correctAnswer)
                                        return (
                                            <div ref={choice == currentQuestion.correctAnswer ? chosenChoice : undefined} key={choice} onClick={() => getAnswer(choice)} className="border-2 border-gray-700 p-2 bg-gray-200 mb-3 hover:bg-white" id='choices'>
                                                <p className="text-center text-[25px] mt-2">{choice}</p>
                                            </div>
                                        )
                                    })
                            }
                        </div>
                    </>
                    :
                    round >= defaultRoundCount
                        ? <div class="flex flex-col items-center max-w-[50%] m-auto mt-[4em]">
                            <p id='scoreText' class='text-[25px] lg:text-[40px] text-center'>Score :</p>
                            <p id='scoreText' class='text-[65px] lg:text-[95px] text-center'>{score} / {defaultRoundCount}</p>

                            <button type="button" onClick={() => setIsTriviaChosen(false)} class="text-white text-[25px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 mt-4">Play Again</button>
                        </div>

                        : <div className='flex items-center justify-center'>
                            <div class="loader"></div>
                        </div>

            }
        </div>
    )
}

export default QuestionAndAnswer;












{/* <div className="mt-5 max-w-[95%] m-auto">
            {
                triviaQuestions.length !== 0
                    ?
                    currentQuestion
                        ?
                        <>
                            <div className='flex justify-between mb-3'>
                                <p className='text-[18px]'>Round : <b>1/5</b></p>
                                <p className='text-[18px]'>Time Left : {timeLimit}</p>
                            </div>
                            <p className="text-center text-[28px] mb-6">{currentQuestion.question.text}</p>
                            <div>
                                {
                                    mergeAndShuffle(currentQuestion.correctAnswer, currentQuestion.incorrectAnswers)
                                        .map((choice) => {
                                            return (
                                                <div key={choice} onClick={() => test()} className="border-2 border-gray-700 p-2 bg-gray-200 mb-3" id='choices'>
                                                    <p className="text-center text-[25px] mt-2">{choice}</p>
                                                </div>
                                            )
                                        })
                                }
                            </div>
                        </>
                        :
                        <p>Loading...</p>
                    :
                    <>
                        <p>It's Over</p>
                        <button onClick={() => setIsTriviaChosen(false)}>Restart</button>
                    </>
            }
        </div> */}
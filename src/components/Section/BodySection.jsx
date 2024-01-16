import Criteria from "./Criteria";
import criteriaData from "./criteriaData";
import QuestionAndAnswer from "./QuestionAndAnswer";
import { useEffect, useState } from "react";

const BodySection = () => {
    // Checks if trivia is already choosen or not
    const [isTriviaChosen, setIsTriviaChosen] = useState(false);

    // Get triviaInfo
    const [triviaInfo, setTriviaInfo] = useState({
        triviaCategoryParams: null,
        triviaCategory: null
    });
    // Place holder for questions
    const [triviaQuestions, setTriviaQuestions] = useState([]);


    useEffect(() => {
        async function fetchTriviaApi() {
            if (triviaInfo.triviaCategoryParams !== null) {
                const url = `https://the-trivia-api.com/v2/questions?categories=${triviaInfo.triviaCategoryParams}&limit=10`;
                const response = await fetch(url);
                const questions = await response.json();
                setTriviaQuestions(questions);
            }
        }

        fetchTriviaApi();
    }, [triviaInfo.triviaCategoryParams])


    if (isTriviaChosen) {
        return (
            <QuestionAndAnswer
                triviaQuestions={triviaQuestions}
                setTriviaQuestions={setTriviaQuestions}

                setIsTriviaChosen={setIsTriviaChosen}
            ></QuestionAndAnswer>
        )
    } else {
        return (
            <div className="mt-5">
                <p className="text-center font-bold text-[30px] mt-4">Select a Trivia</p>
                <div className="grid md:grid-cols-3 gap-4 p-4">
                    {
                        criteriaData.map((singleCriteria) => {
                            const { categoryParams, imageSrc, category } = singleCriteria;

                            return <Criteria
                                key={categoryParams}
                                categoryParams={categoryParams}
                                imageSrc={imageSrc}
                                category={category}

                                setIsTriviaChosen={setIsTriviaChosen}
                                setTriviaInfo={setTriviaInfo}
                                triviaInfo={triviaInfo}>
                            </Criteria>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default BodySection;
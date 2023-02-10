import Question from "./Question"
import { useEffect, useState } from "react"
import { nanoid } from "nanoid";

export default function Quiz(props) {

    useEffect(() => {
        fetchData();
    }, [])

    const [data, setData] = useState([]);

    async function fetchData() {
        const response = await fetch("https://opentdb.com/api.php?amount=5&category=23&difficulty=hard&type=multiple");
        let fetchedData = await response.json();
        setData(addId(fetchedData.results));
        
    }
    console.log(data);
    function addId(arr) {
        return arr.map(question => ({
            question: question.question,
            answers: shuffle([
                { value: question.correct_answer, correct: true, id: nanoid(), clicked: false },
                ...question.incorrect_answers.map(answer => {
                    return { value: answer, correct: false, id: nanoid(), clicked: false }
                })
            ]),
            id: nanoid()
        }))
    }


    function chooseAnswer(idAnswer, idQuestion) {
        setData(oldData => {
            return oldData.map(question => {
                return question.id === idQuestion ?
                    {
                        ...question, answers: question.answers.map(answer => {
                            return answer.id === idAnswer ?
                                { ...answer, clicked: !answer.clicked } :
                                { ...answer, clicked: false };
                        })
                    }
                    : question

            })
        }


        )
    }

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }


    const [isChecked, setIsChecked] = useState(false);


    const questions = data.map(piece => {
        return (
            <Question
                key={piece.id}
                id={piece.id}
                question={piece.question}
                answers={piece.answers}
                choose={chooseAnswer}
                checked={isChecked}
                toggle={props.toggle}
            />
        )
    })

    return (

        <main className="main-quiz">
            {questions}

            {!isChecked ?
                <button onClick={() => setIsChecked(true)} className="check-button">Check answers</button> :
                <div className="again-container">
                    <p>You scored somewhat correct answers</p>
                    <button className="again-button" onClick={props.toggle}>Play again</button>
                </div>
            }

        </main>
    )
}
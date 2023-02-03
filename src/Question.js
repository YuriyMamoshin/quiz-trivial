import Answer from "./Answer";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function Question(props) {

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

    const [answerData, setAnswerData] = useState(
        shuffle([
            { value: props.correct, correct: true, id: nanoid(), clicked: false },
            ...props.incorrect.map(answer => {
                return { value: answer, correct: false, id: nanoid(), clicked: false }
            })
        ])
    );


    function chooseAnswer(id) {
        setAnswerData(oldData => {
            return oldData.map(answer => {
                return answer.id === id ?
                    { ...answer, clicked: !answer.clicked } :
                    { ...answer, clicked: false };
            })
        }


        )
    }

    const answerButtons = answerData.map(answer => {
        return (
            <Answer
                key={answer.id}
                value={answer.value}
                correct={answer.correct}
                clicked={answer.clicked}
                choose={() => chooseAnswer(answer.id)}
                checked={props.checked}
            />
        )
    })

    return (
        <div className="question-container">
            <p className="question-text">{props.question}</p>
            <div className="answer-container">
                {answerButtons}
            </div>
        </div>
    )
}
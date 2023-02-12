import Answer from "./Answer";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function Question(props) {




console.log(props.question);

    const answerButtons = props.answers.map(answer => {
        return (
            <Answer
                key={answer.id}
                value={answer.value}
                correct={answer.correct}
                clicked={answer.clicked}
                choose={() => props.choose(answer.id, props.id)}
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
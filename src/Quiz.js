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
        setData(fetchedData.results.map(question => ({
            ...question,
            id: nanoid()
        })));
    }

    const [isChecked, setIsChecked] = useState(false);


    const questions = data.map(piece => {
        return (
            <Question
                key={piece.id}
                question={piece.question}
                correct={piece.correct_answer}
                incorrect={piece.incorrect_answers}
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
                <div>
                    <p>You scored somewhat correct answers</p>
                    <button className="again-button" onClick={props.toggle}>Play again</button>
                </div>
            }

        </main>
    )
}
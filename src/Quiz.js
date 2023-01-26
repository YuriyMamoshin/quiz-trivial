import Question from "./Question"
import { useEffect, useState } from "react"
import { nanoid } from "nanoid";

export default function Quiz() {
useEffect(  () => {
    fetchData();
}, [])

const [data, setData] = useState([]);

async function fetchData() {
    const response = await fetch("https://opentdb.com/api.php?amount=5&category=23&difficulty=hard&type=multiple");
    let fetchedData = await response.json();
    setData(fetchedData.results);
}
 
const questions = data.map(piece => {
return (
    <Question
    key={nanoid()}
    question={piece.question}
    correct={piece.correct_answer}
    incorrect={piece.incorrect_answers}
    />
)
})
    return (
        <main className="main-quiz">
          {questions}
            <button className="check-button">Check answers</button>
        </main>
    )
}
import Answer from "./Answer";

export default function Question(props) {

    let idCounter = 1;
    const answersArray = [
        { value: props.correct, correct: true, id: 1, clicked: false },
        ...props.incorrect.map(answer => {
            return { value: answer, correct: false, id: ++idCounter, clicked: false }
        })
    ];

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    const shuffledAnswersArray = shuffle(answersArray);

    const answerButtons = shuffledAnswersArray.map(answer => {
        return (
            <Answer
                value={answer.value}
                correct={answer.correct}
                id={answer.id}
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
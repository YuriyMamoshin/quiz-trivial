

export default function Answer(props) {
const styles = {
    backgroundColor: props.clicked ? "#D6DBF5" : "white"
}
    return (
        <button style={styles}   className="answer-button" onClick={props.choose}>{props.value}{props.correct}</button>
    )
}
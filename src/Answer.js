

export default function Answer(props) {
const styles = {
    backgroundColor: "white"
}
    return (
        <button style={styles} className="answer-button">{props.value} {props.id}</button>
    )
}
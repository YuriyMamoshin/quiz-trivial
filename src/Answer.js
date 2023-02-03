

export default function Answer(props) {
const styles = {
    backgroundColor: props.clicked ? "#D6DBF5" : ""
}
const stylesChecked = {
    backgroundColor: props.correct ? "#94D7A2" : props.clicked ? "#F8BCBC" : ""
}
 
    return (
        <button style={props.checked ? stylesChecked : styles}  className="answer-button" onClick={props.choose}>{props.value} {+props.correct}</button>
    )
}

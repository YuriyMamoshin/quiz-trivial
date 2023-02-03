export default function Main(props) {
    return (
        <main className="main">
        <div>
        <h1 className="main-caption">Quizzical</h1>
        <p className="main-description">Some description if needed</p>
        <button className="main-button" onClick={props.toggle}>Start quiz</button>
        </div>
                </main>
    )
}
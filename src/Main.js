export default function Main(props) {
    return (
        <main className="main">
            <div>
                <h1 className="main-caption">Hardcore history quiz</h1>
                <p className="main-description">Try'n'answer</p>
                <button className="main-button" onClick={props.toggle}>Start quiz</button>
            </div>
        </main>
    )
}
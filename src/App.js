import React from "react";
import { useState } from "react";
import Main from "./Main"
import Quiz from "./Quiz"


export default function App() {

    const [quizStarted, setQuizStarted] = useState(false);

    function toggleStarted() {
        setQuizStarted(prevStarted => !prevStarted)
    }
    return (
        <div>
            {quizStarted ? 
            <Quiz 
            toggle={toggleStarted}
            /> : 
            <Main 
            toggle={toggleStarted}
            />}
        </div>
    )
}

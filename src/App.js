import React from "react";
import { useState } from "react";
import Main from "./Main"
import Quiz from "./Quiz"

export default function App() {

    const [quizStarted, setQuizStarted] = useState(true);

    return (
        <div>
            {quizStarted ? <Quiz /> : <Main />}
        </div>
    )
}

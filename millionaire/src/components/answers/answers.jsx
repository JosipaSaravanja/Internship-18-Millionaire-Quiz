import classes from "./index.module.css"
import { Answer } from "./answer"
import { QuestionContext } from "../../providers/questionProvider"
import { useContext, useState} from "react"

export const Answers = () => {
    const alphabet = ["A", "B", "C", "D"]
    const context = useContext(QuestionContext)

    return <div className={classes.answers}>
        {
            context.question.answers.map((el, id) => {
                return <Answer id={id} text={alphabet[id] + ": " + el.text} isAnswer={el.isAnswer}></Answer>
            })
        }
    </div>
}
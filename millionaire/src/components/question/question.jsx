import classes from "./index.module.css"
import { QuestionContext, useQuestion } from "../../providers/questionProvider"
import { useContext } from "react"

export const Question = () => {
    const context = useQuestion()
    return <div className={classes.question}>
        {context.question.question}
    </div>
}